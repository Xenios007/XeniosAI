import { ServiceCollection } from '../foundation/di/service-collection.js';
import { AuditService } from './audit/audit-service.js';
import { HealthCheckService } from './health/health-check-service.js';
import { LocalizationService } from './localization/localization-service.js';
import { OperationObserver } from './observability/operation-observer.js';
import { ContractValidator } from './validation/contract-validator.js';
import { VersionRegistry } from './versioning/version-registry.js';

export function addCrossCuttingConcerns(services) {
  if (!(services instanceof ServiceCollection)) {
    throw new Error('addCrossCuttingConcerns expects an instance of ServiceCollection.');
  }

  services.registerSingleton('AuditService', provider =>
    new AuditService({
      clock: provider.getRequiredService('Clock'),
      idGenerator: provider.getRequiredService('IdGenerator'),
      logger: provider.getRequiredService('Logger'),
      meter: provider.getRequiredService('Meter')
    })
  );
  services.registerSingleton('HealthCheckService', provider =>
    new HealthCheckService({
      clock: provider.getRequiredService('Clock')
    })
  );
  services.registerSingleton('LocalizationService', () => new LocalizationService());
  services.registerSingleton('OperationObserver', provider =>
    new OperationObserver({
      clock: provider.getRequiredService('Clock'),
      logger: provider.getRequiredService('Logger'),
      meter: provider.getRequiredService('Meter')
    })
  );
  services.registerSingleton('ContractValidator', () => new ContractValidator());
  services.registerSingleton('VersionRegistry', () => new VersionRegistry());

  return services;
}
