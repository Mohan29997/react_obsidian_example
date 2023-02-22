import { BarManager } from 'data'

class FooService {
  barmanager: BarManager
  constructor(barmanager: BarManager) {
    this.barmanager = barmanager
  }
  test() {
    this.barmanager.testBarManger()
  }
}
export default FooService
