/*字节数组转16进制字符串*/
const Bytes2Str = (arr) => {
    var str = "";
    for (var i=0; i<arr.length; i++) {
      var tmp;
      var num = arr[i];
      if (num < 0) {
      //此处填坑，当byte因为符合位导致数值为负时候，需要对数据进行处理
        tmp = (255+num+1).toString(16);
      } else {
        tmp = num.toString(16);
      }
      if (tmp.length == 1) {
        tmp = "0" + tmp;
      }
      str += tmp;
    }
    return str;
}
const ShowStacks = () => {
    Java.perform(function () {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        });
}


const PrintHashMap = (hashmap) => {
    var HashMapNode = Java.use('java.util.HashMap$Node');
    var iterator = hashmap.entrySet().iterator();
    console.log('======================Printing HashMap=========================');
    while (iterator.hasNext()) {
      var entry = Java.cast(iterator.next(), HashMapNode);
      console.log(`${entry.getKey()}: ${entry.getValue()}`);
    }
    console.log('======================End HashMap=========================');
}



const hook = () => {
    Java.perform(() => {
        console.log('[+] Enter hook()...');
//        const FaceDetectorV2Jni = Java.use('com.google.android.gms.vision.face.FaceDetectorV2Jni');
//            FaceDetectorV2Jni.initDetectorJni.implementation = function (...args) {
//            console.log('[+] FaceDetectorV2Jni.initDetectorJni');
//            ShowStacks();
//            return this.initDetectorJni(...args);
//        };
//
//Java.choose('com.google.firebase.ml.vision.face.FirebaseVisionFaceDetector', {
//            onMatch(instance){
//                console.log('[+] Enter com.google.firebase.ml.vision.face');
//
//
//                     },
//            onComplete(){}
//        }); //Java.choose()
//        FaceDetectorV2Jni.detectFacesImageByteBufferJni.implementation = function (...args) {
//            console.log('[+] FaceDetectorV2Jni.detectFacesImageByteBufferJni');
//            ShowStacks();
//            return this.detectFacesImageByteBufferJni(...args);
//        };
//        FaceDetectorV2Jni.detectFacesImageByteArrayJni.implementation = function (...args) {
//            console.log('[+] FaceDetectorV2Jni.detectFacesImageByteArrayJni');
//            ShowStacks();
//            return this.detectFacesImageByteArrayJni(...args);
//        };
//         FaceDetectorV2Jni.closeDetectorJni.implementation = function (...args) {
//            console.log('[+] FaceDetectorV2Jni.closeDetectorJni');
//            ShowStacks();
//            return this.closeDetectorJni(...args);
//        };

     const FirebaseImageML = Java.use('com.baijudodhia.photoml.activity.FirebaseImageML');
     var FirebaseVision = Java.use('com.google.firebase.ml.vision.FirebaseVision');
     var FirebaseVisionFaceDetectorOptions = Java.use('com.google.firebase.ml.vision.face.FirebaseVisionFaceDetectorOptions');
     var FirebaseVisionImage = Java.use('com.google.firebase.ml.vision.common.FirebaseVisionImage');
     const BitmapFactory = Java.use('android.graphics.BitmapFactory');
     FirebaseImageML.FaceDetection.implementation = function (...args) {
     console.log('[+] FirebaseImageML.FaceDetection');
//     ShowStacks();
     var options=FirebaseVisionFaceDetectorOptions.$new(2,1,2,2,true,0.1);
     var detector=FirebaseVision.getInstance().getVisionFaceDetector(options);
      var bitmap = BitmapFactory.decodeFile(`/storage/emulated/0/DCIM/image/4.jpg`);
      var image = FirebaseVisionImage.fromBitmap(bitmap);
     var result = detector.detectInImage(image)
     console.log('result:\n'+result);
     console.log(typeof result);
        var OnSuccessListener = Java.use("com.google.android.gms.tasks.OnSuccessListener");
        var success = Java.registerClass({
            name: 'com.google.android.gms.tasks.success',
            implements: [OnSuccessListener],
            methods: {
                onSuccess: function (faces) {
                    var size=faces.size()
                    console.log("face_num:"+size)
                }
            }
        });
//        console.log("beer.bubble:",beer.$new().flow())
     result.addOnSuccessListener(success.$new().onSuccess());

     return this.FaceDetection(...args);
     };

        });
        }
setTimeout(hook, 2000);