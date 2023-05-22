pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.34.0-jammy' } }
   stages {
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            sh 'npm install'
            sh 'npx playwright test'
         }
      }
   }
}