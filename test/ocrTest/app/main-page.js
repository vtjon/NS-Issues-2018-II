"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_ocr_1 = require("nativescript-ocr");
var image_source_1 = require("image-source");
var vm;
function navigatingTo(args) {
    var page = args.object;
    vm = new observable_1.Observable();
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
function decodeImage() {
    var img = new image_source_1.ImageSource();
    var ocr = new nativescript_ocr_1.OCR();
    console.log("decode iamge");
    img.fromFile("~/samples/sacnned.png")
        .then(function (success) {
        console.log("success: ", success);
        console.log("img: ", img);
    }).then(function () {
        ocr.retrieveText({
            image: img,
            whitelist: "ABCDEF",
            blacklist: "0123456789",
            onProgress: function (percentage) {
                console.log("Decoding progress: " + percentage + "%");
            }
        }).then(function (result) {
            console.log("Result: " + result.text);
            vm.set("result", result.text);
        }, function (error) {
            console.log("Error: " + error);
        });
    });
}
exports.decodeImage = decodeImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsOENBQXdEO0FBRXhELHFEQUEyRDtBQUMzRCw2Q0FBMkM7QUFHM0MsSUFBSSxFQUFjLENBQUM7QUFFbkIsc0JBQTZCLElBQWU7SUFFeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQU5ELG9DQU1DO0FBRUQ7SUFDSSxJQUFJLEdBQUcsR0FBZ0IsSUFBSSwwQkFBVyxFQUFFLENBQUM7SUFDekMsSUFBSSxHQUFHLEdBQUcsSUFBSSxzQkFBRyxFQUFFLENBQUM7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUU1QixHQUFHLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1NBQ2hDLElBQUksQ0FBQyxVQUFDLE9BQWdCO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNKLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDYixLQUFLLEVBQUUsR0FBRztZQUNWLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFVBQVUsRUFBRSxVQUFDLFVBQWtCO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUFzQixVQUFVLE1BQUcsQ0FBQyxDQUFDO1lBQ3JELENBQUM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUMsTUFBMEI7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLE1BQU0sQ0FBQyxJQUFNLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLFVBQUMsS0FBYTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxLQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUMsQ0FBQyxDQUFBO0FBRVYsQ0FBQztBQTFCRCxrQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBPQ1IsIFJldHJpZXZlVGV4dFJlc3VsdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtb2NyXCI7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuXG5sZXQgdm06IE9ic2VydmFibGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHZtID0gbmV3IE9ic2VydmFibGUoKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUltYWdlKCkge1xuICAgIGxldCBpbWc6IEltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgbGV0IG9jciA9IG5ldyBPQ1IoKTtcbiAgICBjb25zb2xlLmxvZyhcImRlY29kZSBpYW1nZVwiKTtcblxuICAgIGltZy5mcm9tRmlsZShcIn4vc2FtcGxlcy9zYWNubmVkLnBuZ1wiKVxuICAgICAgICAudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzOiBcIiwgc3VjY2Vzcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImltZzogXCIsIGltZyk7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgb2NyLnJldHJpZXZlVGV4dCh7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltZyxcbiAgICAgICAgICAgICAgICB3aGl0ZWxpc3Q6IFwiQUJDREVGXCIsICAgICAvLyB5b3UgY2FuIGluY2x1ZGUgb25seSBjZXJ0YWluIGNoYXJhY3RlcnMgaW4gdGhlIHJlc3VsdFxuICAgICAgICAgICAgICAgIGJsYWNrbGlzdDogXCIwMTIzNDU2Nzg5XCIsIC8vIC4uIG9yIHlvdSBjYW4gZXhjbHVkZSBjZXJ0YWluIGNoYXJhY3RlcnMgZnJvbSB0aGUgcmVzdWx0XG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzczogKHBlcmNlbnRhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGVjb2RpbmcgcHJvZ3Jlc3M6ICR7cGVyY2VudGFnZX0lYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBSZXRyaWV2ZVRleHRSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHQudGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0KFwicmVzdWx0XCIsIHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxufSJdfQ==