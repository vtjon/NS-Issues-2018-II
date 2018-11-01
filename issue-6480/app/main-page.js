"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var worker = new Worker('./worker');
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.HelloWorldModel();
    worker.postMessage({ method: "GET", url: 'https://docs.nativescript.org', auth: "auth" });
    worker.onmessage = function (msg) {
        console.log(msg);
    };
    worker.onerror = function (err) {
        console.log("An unhandled error occurred in worker: " + err.filename + ", line: " + err.lineno + " :");
        console.log(err.message);
    };
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBRXBELElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXBDLHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUc1QyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFMUYsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFDLEdBQUc7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUE7SUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBRztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUEwQyxHQUFHLENBQUMsUUFBUSxnQkFBVyxHQUFHLENBQUMsTUFBTSxPQUFJLENBQUMsQ0FBQztRQUM3RixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUE7QUFDTCxDQUFDO0FBZkQsb0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuXG5sZXQgd29ya2VyID0gbmV3IFdvcmtlcignLi93b3JrZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG5cblxuICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IG1ldGhvZDogXCJHRVRcIiwgdXJsOiAnaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcnLCBhdXRoOiBcImF1dGhcIiB9KTtcblxuICAgIHdvcmtlci5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxuXG4gICAgd29ya2VyLm9uZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBBbiB1bmhhbmRsZWQgZXJyb3Igb2NjdXJyZWQgaW4gd29ya2VyOiAke2Vyci5maWxlbmFtZX0sIGxpbmU6ICR7ZXJyLmxpbmVub30gOmApO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgfVxufVxuIl19