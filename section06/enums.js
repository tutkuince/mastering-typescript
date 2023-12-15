"use strict";
var Statuses;
(function (Statuses) {
    Statuses[Statuses["PENDING"] = 0] = "PENDING";
    Statuses[Statuses["SHIPPED"] = 1] = "SHIPPED";
    Statuses[Statuses["DELIVERED"] = 2] = "DELIVERED";
    Statuses[Statuses["CANCELLED"] = 3] = "CANCELLED";
    Statuses[Statuses["RETURNED"] = 4] = "RETURNED";
})(Statuses || (Statuses = {}));
const orderStatus = Statuses.DELIVERED;
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 2] = "no";
    Responses[Responses["yes"] = 3] = "yes";
    Responses[Responses["maybe"] = 4] = "maybe";
})(Responses || (Responses = {}));
var Answers;
(function (Answers) {
    Answers["no"] = "No";
    Answers["yes"] = "Yes";
    Answers["maybe"] = "Maybe";
})(Answers || (Answers = {}));
