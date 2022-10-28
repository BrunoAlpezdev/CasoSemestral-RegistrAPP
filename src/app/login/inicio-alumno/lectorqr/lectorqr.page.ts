import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-lectorqr',
  templateUrl: './lectorqr.page.html',
  styleUrls: ['./lectorqr.page.scss'],
})
export class LectorqrPage implements OnInit {

  qrCodeString = "codigo de qr";
  scannedResult : any;
  constructor() { }

  ngOnInit() {
  }

  checkPermission = async () => {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        return true;
      }
      return false;

    }catch (err) {
      console.log(err)
    }

  };

  async startScan() {
    try{
      const permission = await this.checkPermission();
      if(!permission){
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      const result = await BarcodeScanner.startScan();
      console.log(result);
      if(result?.hasContent) {
        this.scannedResult = result.content;
        BarcodeScanner.showBackground();
        document.querySelector('body').classList.remove('scanner-active');
        console.log(this.scannedResult);
      }
    }catch (err) {
      console.log(err);
      this.stopScan();
    }
  }
  
  async stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
  }

}
