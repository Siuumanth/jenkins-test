pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Siuumanth/jenkins-test.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Running Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Starting App') {
            steps {
                bat 'node server.js'
            }
        }
    }
}
