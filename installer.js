const electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/logzziax-win32-x64/',
    outputDirectory: './build/installer/',
    description: 'Real time log viewer',
    authors: 'ziaxdk',
    exe: 'logzziax.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));