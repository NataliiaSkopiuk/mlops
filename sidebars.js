module.exports = {
  someSidebar: {
    Introduction: [
      'intro', 
      'prereqs'
    ],
    "Airflow": [
    {
      'AF Architecture': [
        'Airflow/architecture/af-basics'
        ]
      }
    ],
    "Kubeflow": [
    {
      'KF Architecture': [
        'Kubeflow/architecture/kf-basics',
        'Kubeflow/architecture/kf-components',
        'Kubeflow/architecture/kf-profiles-tenants-integration'
        ],
      'KF Deployment': [
        'Kubeflow/deployment/kf-requirements',
        'Kubeflow/deployment/kf-installation-steps',
        'Kubeflow/deployment/kf-images-list'
        ],
      'K8s Admin Tutorials': [
        'Kubeflow/k8s-admin-tutorials/prometheus-tutorial'
        ],
      'KF Known Issues': [
        'Kubeflow/known-issues/kf-known-issues'
        ]
      }
    ],
    "Lab Installation": [
      'lab/overview',
      'lab/install1',
      'lab/install2',
      'lab/install3',
      'lab/advanced'
    ],
    "KD Overview": [
      'about-kd/intro',
      'about-kd/concepts',
    ],
    "Using KD": [
      'kd-user/intro',
      'kd-user/using',
      'kd-user/storage',
      'kd-user/configuring',
      'kd-user/ref'
    ],
    "KD Image Development": [
      'kd-img-dev/overview', 
      'kd-img-dev/defaultpersistdirs', 
      'kd-img-dev/customdockerimage', 
      'kd-img-dev/customdockerimage2', 
      'kd-img-dev/configpackage',
      'kd-img-dev/configcli',
      'kd-img-dev/hpecp_kd_app',
      'kd-img-dev/nifi',
      'kd-img-dev/connections',
      'kd-img-dev/more'
    ],
    "KD Development": [
      'kd-dev/overview'
    ],
  },
};
