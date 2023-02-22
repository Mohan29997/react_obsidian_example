import { Singleton, Graph, ObjectGraph, Provides } from 'react-obsidian'
import { BarManager } from './barmanager'

@Singleton()
@Graph()
export class Anotherclass extends ObjectGraph {
  @Provides()
  barManager(): BarManager {
    console.log('barManager fuc')
    return new BarManager()
  }
}
