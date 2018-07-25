"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var items = new observable_array_1.ObservableArray(observable_1.fromObject({ index: 0, text: "Option 1", selected: true }), observable_1.fromObject({ index: 1, text: "Option 2", selected: false }), observable_1.fromObject({ index: 2, text: "Option 3", selected: false }), observable_1.fromObject({ index: 3, text: "Option 4", selected: false }), observable_1.fromObject({ index: 4, text: "Option 4", selected: true }), observable_1.fromObject({ index: 5, text: "Option 4", selected: false }));
    vm.set("items", items);
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQW9FO0FBQ3BFLDBEQUF3RDtBQUd4RCx3RUFBd0U7QUFDeEUsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUUxQixJQUFJLEtBQUssR0FBRyxJQUFJLGtDQUFlLENBQzNCLHVCQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzFELHVCQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQzNELHVCQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQzNELHVCQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQzNELHVCQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzFELHVCQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQzlELENBQUM7SUFFRixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBaEJELG9DQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSwgZnJvbU9iamVjdCB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGxldCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbiAgICBsZXQgaXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFxuICAgICAgICBmcm9tT2JqZWN0KHsgaW5kZXg6IDAsIHRleHQ6IFwiT3B0aW9uIDFcIiwgc2VsZWN0ZWQ6IHRydWUgfSksXG4gICAgICAgIGZyb21PYmplY3QoeyBpbmRleDogMSwgdGV4dDogXCJPcHRpb24gMlwiLCBzZWxlY3RlZDogZmFsc2UgfSksXG4gICAgICAgIGZyb21PYmplY3QoeyBpbmRleDogMiwgdGV4dDogXCJPcHRpb24gM1wiLCBzZWxlY3RlZDogZmFsc2UgfSksXG4gICAgICAgIGZyb21PYmplY3QoeyBpbmRleDogMywgdGV4dDogXCJPcHRpb24gNFwiLCBzZWxlY3RlZDogZmFsc2UgfSksXG4gICAgICAgIGZyb21PYmplY3QoeyBpbmRleDogNCwgdGV4dDogXCJPcHRpb24gNFwiLCBzZWxlY3RlZDogdHJ1ZSB9KSxcbiAgICAgICAgZnJvbU9iamVjdCh7IGluZGV4OiA1LCB0ZXh0OiBcIk9wdGlvbiA0XCIsIHNlbGVjdGVkOiBmYWxzZSB9KSxcbiAgICApO1xuXG4gICAgdm0uc2V0KFwiaXRlbXNcIiwgaXRlbXMpO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuIl19