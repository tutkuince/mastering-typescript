enum Statuses {
    PENDING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
    RETURNED
}

const orderStatus = Statuses.DELIVERED;

enum Responses {
    no = 2,
    yes,
    maybe
}

enum Answers {
    no = "No",
    yes = "Yes",
    maybe = "Maybe"
}