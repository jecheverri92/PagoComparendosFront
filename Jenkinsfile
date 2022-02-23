@Library('ceiba-jenkins-library') _
pipeline {
    agent {
        label 'Slave_Induccion'
    }

    tools {
        jdk 'JDK8_Centos'
    }
    /*	Versiones disponibles
      JDK8_Mac
      JDK6_Centos
      JDK7_Centos
      JDK8_Centos
      JDK10_Centos
      JDK11_Centos
      JDK13_Centos
      JDK14_Centos
*/

    stages {
        stage('Checkout'){
           steps {
				echo "------------>Checkout<------------"
				checkout scm
                }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        /*
        stage('Test end-to-end') {
            steps{
                echo "------------>Testing Protractor<------------"
                sh 'npm run e2e --'
            }
        }
        */

      stage('Static Code Analysis') {
			steps{
        echo '------------>Análisis de código estático<------------'
				sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:pago.comparendosFront-julian.echeverri',
        sonarName:'''"Ceiba-PagoComparendosFront(julian.echeverri)"''',
        sonarPathProperties:'./sonar-project.properties')
			}
		}
    }

    post{
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
            mail (to: 'julian.echeverri@ceiba.com.co',
            subject: "Failed Pipeline:${currentBuild.fullDisplayName}",
            body: "Something is wrong with ${env.BUILD_URL}")
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
