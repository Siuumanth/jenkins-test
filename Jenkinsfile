pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Siuumanth/jenkins-test.git'  // Change this to your repo
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Start App') {
            steps {
                bat 'node server.js'
            }
        }
    }
}
