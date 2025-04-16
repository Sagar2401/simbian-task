
// Alert types and example data
export interface Alert {
  id: string;
  type: string;
  description: string;
  timestamp: Date;
}

// Sample alert types
const alertTypes = [
  { type: 'Phishing Email', description: 'Suspicious email with malicious link detected' },
  { type: 'Suspicious Login', description: 'Login attempt from unrecognized location' },
  { type: 'Malware Detected', description: 'Potential malware found in downloaded file' },
  { type: 'Data Exfiltration', description: 'Unusual amount of data being transferred externally' },
  { type: 'Privilege Escalation', description: 'User attempting to gain higher-level permissions' },
  { type: 'Ransomware Activity', description: 'Potential encryption of files detected' },
  { type: 'Brute Force Attempt', description: 'Multiple failed login attempts detected' },
  { type: 'API Abuse', description: 'Abnormal rate of API calls detected' },
  { type: 'Command Injection', description: 'Potential command injection in web application' },
  { type: 'SQL Injection', description: 'SQL injection attempt detected in web traffic' }
];

// Generate a random alert
export const generateRandomAlert = (): Alert => {
  const randomType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
  return {
    id: Math.random().toString(36).substring(2, 11),
    type: randomType.type,
    description: randomType.description,
    timestamp: new Date()
  };
};

// Content for without Simbian section
export const withoutSimbianContent = [
  'Wasting valuable analyst time on false positives',
  'Processing one alert at a time, missing the big picture',
  'More time fixing SOAR automation, less time on real threats'
];

// Content for with Simbian section
export const withSimbianSteps = [
  {
    title: 'Triaged & Reported',
    description: 'The SOC Agent handled investigation and reporting.'
  },
  {
    title: 'Automated Response',
    description: 'Incident automatically contained.'
  },
  {
    title: 'Comprehensive Analysis',
    description: 'AI recognized patterns.'
  },
  {
    title: 'Accurate Detection',
    description: 'Zero false positives.'
  },
  {
    title: '24/7 Coverage',
    description: 'No analyst fatigue.'
  }
];

export const withSimbianContent = [
  '90% of alerts resolved automatically, 24/7',
  'Correlates alerts to your environment',
  'Investigate every alert—no SOAR needed'
];
