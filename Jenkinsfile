pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npm run tests'
      }
    }
    stage('Build project') {
      steps {
        bat 'npm run build'
      }
    }
  }
}
