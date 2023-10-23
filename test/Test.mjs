import ProbeLog from '../src/index'

let probleLog = new ProbeLog({
    feID: 'csijs',
    report: (lines) => {
      console.log('### 自定义上报', lines);
    }
})

probleLog.report()