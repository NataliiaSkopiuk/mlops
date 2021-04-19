module.exports = {
  someSidebar: {
    Introduction: [
      'intro'
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
        'Kubeflow/k8s-admin-tutorials/prometheus-tutorial',
        'Kubeflow/k8s-admin-tutorials/kiali-tutorial',
        'Kubeflow/k8s-admin-tutorials/grafana-tutorial'
        ],
      'User Tutorials': [
        'Kubeflow/user-tutorials/kf-ui-access',
        'Kubeflow/user-tutorials/gh-issue-sum-tutorial-p1',
        'Kubeflow/user-tutorials/gh-issue-sum-tutorial-p2',
        'Kubeflow/user-tutorials/kfp-tutorial',
        'Kubeflow/user-tutorials/hdfs-access'
        ],
      'KF Known Issues': [
        'Kubeflow/known-issues/kf-known-issues'
        ]
      }
    ],
  },
};
