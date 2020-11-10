import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './app-routing.module';

fdescribe('App Routing', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('Before each');
  });
  afterAll(() => {
    console.log('afterAll ');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  
  it('Should have app as path', () => {
    expect(routes[0].path).toBe('');
  });
  it('Should have app as path', () => {
    expect(routes[1].path).toBe('dashboard');
  });
});
