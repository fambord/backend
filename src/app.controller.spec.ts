import { AppController } from './app.controller';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(() => {
    controller = new AppController();
  });

  describe('getHello', () => {
    it('should return a greeting object', () => {
      const result = controller.getHello();
      expect(result).toHaveProperty('greeting');
      expect(result).toHaveProperty('docsURL', 'v1/swagger');
    });
  });

  describe('getStatus', () => {
    it('should return version info', () => {
      const result = controller.getStatus();
      expect(result).toHaveProperty('version');
    });
  });
});
