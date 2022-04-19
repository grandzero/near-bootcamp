import { storage, Context } from "near-sdk-as"


// return the string 'hello world'
export function helloWorld(): string {
  return 'hello world '
}

export function helloWorldTask2(name: string): string {
  return 'hello world ' + name
}


export function helloWorldTask3(names: Array<string>): string {
  return names.map<string>(name => "hello " + name).join(`\n`)
}


export function helloWorldTask4(): string {
  const predecessor = Context.predecessor
  return 'hello ' + predecessor // We are getting data from execution context of chain. It's like msg.sender in solidity
}

// read the given key from account (contract) storage
export function read(key: string): string {
  if (storage.hasKey(key)) {
    return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`
  } else {
    return `🚫 Key [ ${key} ] not found in storage. ( ${storageReport()} )`
  }
}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {
  storage.set(key, value)
  return `✅ Data saved. ( ${storageReport()} )`
}

// private helper method used by read() and write() above
function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`
}
