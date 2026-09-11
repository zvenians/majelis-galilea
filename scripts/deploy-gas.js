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

try {
  // 1. Push code to Apps Script project
  console.log('\nStep 1: Pushing files to Google Apps Script...');
  run('npx @google/clasp push --force');

  // 2. Deploy or update existing deployment
  if (deploymentId) {
    console.log(`\nStep 2: Updating existing deployment ID [${deploymentId}]...`);
    // Create new version first
    console.log('Creating new version...');
    const versionOutput = execSync(`npx @google/clasp version "${description}"`, { encoding: 'utf8' });
    console.log(versionOutput);

    const versionMatch = versionOutput.match(/Created version\s+(\d+)/i);
    const versionNumber = versionMatch ? versionMatch[1] : '';

    if (versionNumber) {
      console.log(`Redeploying deployment ${deploymentId} with version ${versionNumber}...`);
      run(`npx @google/clasp deploy -i "${deploymentId}" -V ${versionNumber} -d "${description}"`);
    } else {
      console.log(`Redeploying deployment ${deploymentId} with latest description...`);
      run(`npx @google/clasp deploy -i "${deploymentId}" -d "${description}"`);
    }
  } else {
    console.log('\nStep 2: No GAS_DEPLOYMENT_ID provided. Deploying new version...');
    run(`npx @google/clasp deploy -d "${description}"`);
  }

  console.log('\n=== [CLASP] Deployment completed successfully! ===\n');
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
}
