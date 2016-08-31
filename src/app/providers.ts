import { provide } from '@angular/core';
import { DescriptionRepository } from './services/DescriptionRepository';
import { InMemoryDescriptionRepository } from './services/InMemoryDescriptionRepository';
import { XmlService } from './services/XmlService';
import { SensorMLXmlService } from './services/SensorMLXmlService';
import { SampleDataLoader } from './services/SampleDataLoader';
import { DescriptionConfigService } from './services/DescriptionConfigService';
import { EditorService } from './services/EditorService';
import { PublishDescriptionService } from './sos/publish/publish.service';
import { ConnectDescriptionService } from './sos/connect/connect.service';
import { SosService } from './sos/sos.service';
import { AuthGuard } from './sos/components/auth-guard.service';
import { AuthService } from './sos/components/auth.service';

export const APP_PROVIDERS: any[] = [
  { provide: DescriptionRepository, useClass: InMemoryDescriptionRepository },
  { provide: XmlService, useClass: SensorMLXmlService },
  SampleDataLoader,
  DescriptionConfigService,
  EditorService,
  PublishDescriptionService,
  ConnectDescriptionService,
  SosService,
  AuthGuard,
  AuthService
];
