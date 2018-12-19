pipeline {
  agent any
  tools {
    nodejs 'Node 8.13.0'
  }
  environment {
    NPM_TOKEN = credentials('npm-mrmarcsmith')
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm install'
        sh 'npm test spec/PCString.spec.js'
      }
    }
    stage('Approve') {
      input {
        message "✅ All Unit tests passed! Run manual staging instructions now."
        ok "Approve & Deploy Build"
      }
      steps {
        sh 'echo "Deploying..."'
      }
    }
    stage('Deploy') {
      when {
        branch "master"
      }
      steps {
        sh 'npm publish'
      }
    }
  }
  post{
    always {
      deleteDir()
    }
  }
}