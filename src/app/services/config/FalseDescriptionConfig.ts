import { DescriptionConfig } from './DescriptionConfig';

export class FalseDescriptionConfig implements DescriptionConfig {
  isFieldHidden(name: string): boolean {
    return false;
  }

  getConfigFor(name: string): DescriptionConfig {
    return new FalseDescriptionConfig();
  }
F}