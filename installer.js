const electronInstaller = require('electron-winstaller');
resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/zlogsviwer-win32-x64/',
    outputDirectory: './build/installer/',
    description: 'Real time UDP log viewer',
    authors: 'ziaxdk',
    exe: 'zlogsviwer.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));