/**
 * MAJELIS GALILEA — Clasp Deploy or Redeploy Helper
 * 
 * Safely deploys the latest version to Apps Script.
 * If GAS_DEPLOYMENT_ID is provided in environment, it updates that exact deployment
 * so the Web App URL remains 100% constant!
 * If not provided, it deploys a new version.
 */
const { execSync } = require('child_process');

function run(cmd) {
  console.log(`> ${cmd}`);
  return execSync(cmd, { stdio: 'inherit' });
}

console.log('=== [CLASP] Deploying to Google Apps Script ===');

const deploymentId = process.env.GAS_DEPLOYMENT_ID ? process.env.GAS_DEPLOYMENT_ID.trim() : '';
const description = process.env.DEPLOY_DESCRIPTION || `Auto-deploy via GitHub Actions (${new Date().toISOString()})`;

if (!deploymentId) {
  console.error('\n❌ CRITICAL: Environment variable GAS_DEPLOYMENT_ID is missing or empty.');
  console.error('To protect production and prevent URL drift, creating arbitrary new deployments is disallowed.');
  console.error('Please configure GAS_DEPLOYMENT_ID in GitHub Repository Secrets with the existing production deployment ID.\n');
  process.exit(1);
}

try {
  // 1. Push code to Apps Script project
  console.log('\nStep 1: Pushing files to Google Apps Script...');
  run('npx @google/clasp push --force');

  // 2. Create an immutable version of the script
  console.log(`\nStep 2: Creating new immutable version...`);
  const versionOutput = execSync(`npx @google/clasp version "${description}"`, { encoding: 'utf8' });
  console.log(versionOutput);

  const versionMatch = versionOutput.match(/Created version\s+(\d+)/i);
  const versionNumber = versionMatch ? versionMatch[1] : '';

  if (!versionNumber) {
    throw new Error('Failed to extract created version number from clasp output:\n' + versionOutput);
  }

  // 3. Redeploy existing deployment with the new version number
  console.log(`\nStep 3: Redeploying existing deployment ID [${deploymentId}] with version ${versionNumber}...`);
  run(`npx @google/clasp deploy -i "${deploymentId}" -V ${versionNumber} -d "${description}"`);

  console.log('\n=== [CLASP] Deployment completed successfully! ===\n');
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
}
