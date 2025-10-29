/**
 * System Monitoring Script - Production
 * Monitors application health and performance
 */

const monitorConfig = {
  interval: 60000, // 1 minute
  alertThreshold: 80,
  metricsEndpoint: 'http://localhost:8080/metrics'
};

console.log('=================================');
console.log('DevOps Simulator - Monitor v1.0');
console.log('=================================');

function checkSystemHealth() {
  console.log(`[${new Date().toISOString()}] Checking system health...`);
  
  // Check CPU usage
  console.log('✓ CPU usage: Normal');
  
  // Check Memory
  console.log('✓ Memory usage: Normal');
  
  // Check Disk
  console.log('✓ Disk space: Adequate');
  
  console.log('System Status: HEALTHY');
}

// Start monitoring
console.log(`Monitoring every ${monitorConfig.interval}ms`);
console.log('Debug features enabled');
setInterval(checkSystemHealth, monitorConfig.interval);

// Run first check immediately
checkSystemHealth();

// Development-specific: Log memory usage
if (monitorConfig.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log('\n--- Memory Usage ---');
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}
