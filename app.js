// ==========================================
// REACT SETUP
// ==========================================

const {
    createElement,
    useState,
    useEffect,
    useRef
} = React;


// ==========================================
// INITIAL DATA
// ==========================================

const initialBins = [

    {
        id: 1,
        location: "Koramangala",
        level: "Full",
        type: "Organic",
        assignedTruck: "Truck 1"
    },

    {
        id: 2,
        location: "Indiranagar",
        level: "Half-Full",
        type: "Recyclable",
        assignedTruck: "Truck 2"
    },

    {
        id: 3,
        location: "Whitefield",
        level: "Empty",
        type: "Non-recyclable",
        assignedTruck: "Truck 3"
    },

    {
        id: 4,
        location: "Jayanagar",
        level: "Full",
        type: "Organic",
        assignedTruck: "Truck 1"
    }

];


const initialTrucks = [

    {
        id: 1,
        route: "Koramangala",
        status: "Active"
    },

    {
        id: 2,
        route: "Indiranagar",
        status: "Active"
    },

    {
        id: 3,
        route: "Whitefield",
        status: "InActive"
    }

];


const initialEvents = [

    {
        id: 1,
        type: "Political Gathering",
        date: "2024-12-10",
        location: "Koramangala",
        truckCount: 2
    },

    {
        id: 2,
        type: "Engagement",
        date: "2024-12-12",
        location: "Indiranagar",
        truckCount: 1
    }

];


// ==========================================
// MAIN APP
// ==========================================

function App() {

    const [currentPage, setCurrentPage] =
        useState("welcome");


    const [bins, setBins] =
        useState(initialBins);


    const [trucks] =
        useState(initialTrucks);


    const [events, setEvents] =
        useState(initialEvents);


    const [feedback, setFeedback] =
        useState([]);


    // Existing HTML sidebar buttons use these
    useEffect(() => {

        window.navigateTo =
            function (page) {

                setCurrentPage(page);

            };


        window.generateReport =
            function () {

                openGeneratedReport(
                    bins,
                    trucks,
                    events
                );

            };

    }, [
        bins,
        trucks,
        events
    ]);


    switch (currentPage) {

        case "statistics":

            return createElement(
                StatisticsPage,
                {
                    bins,
                    navigateTo:
                        setCurrentPage
                }
            );


        case "addBin":

            return createElement(
                AddBinPage,
                {
                    bins,
                    setBins,
                    navigateTo:
                        setCurrentPage
                }
            );


        case "events":

            return createElement(
                EventsPage,
                {
                    events,
                    navigateTo:
                        setCurrentPage
                }
            );


        case "addEvent":

            return createElement(
                AddEventPage,
                {
                    events,
                    setEvents,
                    navigateTo:
                        setCurrentPage
                }
            );


        case "truckRoutes":

            return createElement(
                TruckRoutesPage,
                {
                    trucks,
                    navigateTo:
                        setCurrentPage
                }
            );


        case "feedback":

            return createElement(
                FeedbackPage,
                {
                    feedback,
                    setFeedback,
                    navigateTo:
                        setCurrentPage
                }
            );


        case "viewFeedback":

            return createElement(
                ViewFeedbackPage,
                {
                    feedback,
                    navigateTo:
                        setCurrentPage
                }
            );


        case "visualizeData":

            return createElement(
                VisualizeDataPage,
                {
                    bins,
                    navigateTo:
                        setCurrentPage
                }
            );


        default:

            return createElement(
                WelcomePage
            );

    }

}


// ==========================================
// WELCOME PAGE
// ==========================================

function WelcomePage() {

    return createElement(

        React.Fragment,

        null,


        // =========================
        // WELCOME HEADER
        // =========================

        createElement(

            "header",

            {
                style: {
                    textAlign: "center",
                    padding: "20px"
                }
            },


            createElement(

                "h1",

                {
                    style: {
                        fontSize: "3em",
                        marginBottom: "10px"
                    }
                },

                "Welcome to Waste Management Dashboard"

            ),


            createElement(

                "p",

                {
                    style: {
                        fontSize: "1.2em"
                    }
                },

                "Your efficient waste collection and management solution for smart cities"

            )

        ),


        // =========================
        // QUOTE SECTION
        // =========================

        createElement(

            "main",

            {
                style: {

                    display: "flex",

                    alignItems: "flex-start",

                    justifyContent: "center",

                    textAlign: "center",

                    padding: "25px 20px",

                    minHeight: "430px",

                    background:
                        "linear-gradient(to right, #e0f7fa, #e8f5e9)",

                    borderRadius: "10px",

                    boxSizing: "border-box"

                }
            },


            // =========================
            // QUOTE CARD
            // =========================

            createElement(

                "p",

                {
                    style: {

                        fontSize: "1.45em",

                        fontFamily:
                            '"Georgia", "Times New Roman", serif',

                        fontStyle: "italic",

                        fontWeight: "500",

                        lineHeight: "1.7",

                        letterSpacing: "0.2px",

                        color: "#3c6f66",

                        width: "75%",

                        maxWidth: "850px",

                        padding: "22px 35px",

                        margin: "0",

                        backgroundColor: "#ffffff",

                        borderRadius: "8px",

                        boxShadow:
                            "0 4px 10px rgba(0, 0, 0, 0.10)",

                        boxSizing: "border-box"

                    }
                },

                `"It is our collective and individual responsibility to
                preserve and tend to the world in which we all live.
                The earth is not ours to exploit but a gift to cherish
                and protect."`

            )

        )

    );

}

// ==========================================
// BIN STATISTICS
// ==========================================

function StatisticsPage({
    bins,
    navigateTo
}) {

    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "Bin Statistics"
            )

        ),


        createElement(

            "main",

            null,


            ...bins.map(bin => {

                let color = "green";


                if (bin.level === "Full") {

                    color = "red";

                } else if (
                    bin.level === "Half-Full"
                ) {

                    color = "orange";

                }


                return createElement(

                    "div",

                    {
                        key: bin.id,

                        className:
                            "bin-card",

                        style: {
                            backgroundColor:
                                color
                        }
                    },


                    createElement(
                        "h3",
                        null,
                        `Location: ${bin.location}`
                    ),


                    createElement(
                        "p",
                        null,
                        `Bin Level: ${bin.level}`
                    ),


                    createElement(
                        "p",
                        null,
                        `Bin Type: ${bin.type}`
                    ),


                    createElement(
                        "p",
                        null,
                        `Assigned Truck: ${bin.assignedTruck}`
                    )

                );

            }),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "welcome"
                        )
                },

                "Back to Welcome Page"

            )

        )

    );

}


// ==========================================
// ADD BIN PAGE
// ==========================================

function AddBinPage({
    bins,
    setBins,
    navigateTo
}) {

    const [location, setLocation] =
        useState("");


    // Empty by default
    const [type, setType] =
        useState("");


    // Empty by default
    const [level, setLevel] =
        useState("");


    // Empty by default
    const [
        assignedTruck,
        setAssignedTruck
    ] = useState("");


    const [sections, setSections] =
        useState({

            location: false,

            type: false,

            level: false,

            truck: false

        });


    function toggleSection(name) {

        setSections({

            ...sections,

            [name]:
                !sections[name]

        });

    }


    function addBin() {

        if (!location.trim()) {

            alert(
                "Please provide the location for the bin."
            );

            return;

        }


        if (!type) {

            alert(
                "Please select a bin type."
            );

            return;

        }


        if (!level) {

            alert(
                "Please select a bin level."
            );

            return;

        }


        if (!assignedTruck) {

            alert(
                "Please select an assigned truck."
            );

            return;

        }


        const newBin = {

            id:
                bins.length + 1,

            location:
                location.trim(),

            type,

            level,

            assignedTruck

        };


        setBins([
            ...bins,
            newBin
        ]);


        alert(
            "New Bin Added Successfully!"
        );


        navigateTo(
            "welcome"
        );

    }


    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "Add New Bin"
            )

        ),


        createElement(

            "main",

            null,


            // LOCATION

            createElement(

                "div",

                {
                    className:
                        "form-section"
                },


                createElement(

                    "button",

                    {
                        className:
                            "toggle-btn",

                        onClick: () =>
                            toggleSection(
                                "location"
                            )
                    },

                    "Location"

                ),


                createElement(

                    "div",

                    {
                        className:
                            "form-content",

                        style: {

                            display:
                                sections.location
                                    ? "block"
                                    : "none"

                        }
                    },


                    createElement(

                        "label",

                        null,

                        "Location:"

                    ),


                    createElement(

                        "input",

                        {
                            type: "text",

                            placeholder:
                                "Enter location",

                            value:
                                location,

                            onChange:
                                event =>
                                    setLocation(
                                        event.target.value
                                    )
                        }

                    )

                )

            ),


            // BIN TYPE

            createElement(

                "div",

                {
                    className:
                        "form-section"
                },


                createElement(

                    "button",

                    {
                        className:
                            "toggle-btn",

                        onClick: () =>
                            toggleSection(
                                "type"
                            )
                    },

                    "Bin Type"

                ),


                createElement(

                    "div",

                    {
                        className:
                            "form-content",

                        style: {

                            display:
                                sections.type
                                    ? "block"
                                    : "none"

                        }
                    },


                    createElement(

                        "label",

                        null,

                        "Bin Type:"

                    ),


                    createElement(

                        "select",

                        {
                            required: true,

                            value:
                                type,

                            onChange:
                                event =>
                                    setType(
                                        event.target.value
                                    )
                        },


                        createElement(

                            "option",

                            {
                                value: "",
                                disabled: true
                            },

                            "Select bin type"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Organic"
                            },

                            "Organic"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Recyclable"
                            },

                            "Recyclable"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Non-recyclable"
                            },

                            "Non-recyclable"

                        )

                    )

                )

            ),


            // BIN LEVEL

            createElement(

                "div",

                {
                    className:
                        "form-section"
                },


                createElement(

                    "button",

                    {
                        className:
                            "toggle-btn",

                        onClick: () =>
                            toggleSection(
                                "level"
                            )
                    },

                    "Bin Level"

                ),


                createElement(

                    "div",

                    {
                        className:
                            "form-content",

                        style: {

                            display:
                                sections.level
                                    ? "block"
                                    : "none"

                        }
                    },


                    createElement(

                        "label",

                        null,

                        "Bin Level:"

                    ),


                    createElement(

                        "select",

                        {
                            required: true,

                            value:
                                level,

                            onChange:
                                event =>
                                    setLevel(
                                        event.target.value
                                    )
                        },


                        createElement(

                            "option",

                            {
                                value: "",
                                disabled: true
                            },

                            "Select bin level"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Full"
                            },

                            "Full"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Half-Full"
                            },

                            "Half-Full"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Empty"
                            },

                            "Empty"

                        )

                    )

                )

            ),


            // ASSIGNED TRUCK

            createElement(

                "div",

                {
                    className:
                        "form-section"
                },


                createElement(

                    "button",

                    {
                        className:
                            "toggle-btn",

                        onClick: () =>
                            toggleSection(
                                "truck"
                            )
                    },

                    "Assigned Truck"

                ),


                createElement(

                    "div",

                    {
                        className:
                            "form-content",

                        style: {

                            display:
                                sections.truck
                                    ? "block"
                                    : "none"

                        }
                    },


                    createElement(

                        "label",

                        null,

                        "Assigned Truck:"

                    ),


                    createElement(

                        "select",

                        {
                            required: true,

                            value:
                                assignedTruck,

                            onChange:
                                event =>
                                    setAssignedTruck(
                                        event.target.value
                                    )
                        },


                        createElement(

                            "option",

                            {
                                value: "",
                                disabled: true
                            },

                            "Select assigned truck"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Truck 1"
                            },

                            "Truck 1"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Truck 2"
                            },

                            "Truck 2"

                        ),


                        createElement(

                            "option",

                            {
                                value:
                                    "Truck 3"
                            },

                            "Truck 3"

                        )

                    )

                )

            ),


            createElement(

                "button",

                {
                    onClick:
                        addBin
                },

                "Add Bin"

            ),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "welcome"
                        )
                },

                "Back to Welcome Page"

            )

        )

    );

}


// ==========================================
// EVENTS PAGE
// ==========================================

function EventsPage({
    events,
    navigateTo
}) {

    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "Manage Events"
            )

        ),


        createElement(

            "main",

            null,


            ...events.map(event =>

                createElement(

                    "div",

                    {
                        key:
                            event.id,

                        className:
                            "event-card"
                    },


                    createElement(
                        "h3",
                        null,
                        `Event Type: ${event.type}`
                    ),


                    createElement(
                        "p",
                        null,
                        `Date: ${event.date}`
                    ),


                    createElement(
                        "p",
                        null,
                        `Location: ${event.location}`
                    ),


                    createElement(
                        "p",
                        null,
                        `Truck Count: ${event.truckCount}`
                    )

                )

            ),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "addEvent"
                        )
                },

                "Add Event"

            ),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "welcome"
                        )
                },

                "Back to Welcome Page"

            )

        )

    );

}


// ==========================================
// ADD EVENT
// ==========================================

function AddEventPage({
    events,
    setEvents,
    navigateTo
}) {

    const [type, setType] =
        useState("");


    const [date, setDate] =
        useState("");


    const [location, setLocation] =
        useState("");


    const [
        truckCount,
        setTruckCount
    ] = useState("");


    function addEvent() {

        if (
            !type.trim() ||
            !date ||
            !location.trim() ||
            !truckCount
        ) {

            alert(
                "Please fill all fields."
            );

            return;

        }


        const newEvent = {

            id:
                events.length + 1,

            type:
                type.trim(),

            date,

            location:
                location.trim(),

            truckCount

        };


        setEvents([
            ...events,
            newEvent
        ]);


        alert(
            "Event Added Successfully!"
        );


        navigateTo(
            "events"
        );

    }


    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "Add New Event"
            )

        ),


        createElement(

            "main",

            null,


            createElement(
                "label",
                null,
                "Event Type:"
            ),


            createElement(

                "input",

                {
                    type:
                        "text",

                    placeholder:
                        "Enter event type",

                    value:
                        type,

                    onChange:
                        e =>
                            setType(
                                e.target.value
                            )
                }

            ),


            createElement(
                "label",
                null,
                "Event Date:"
            ),


            createElement(

                "input",

                {
                    type:
                        "date",

                    value:
                        date,

                    onChange:
                        e =>
                            setDate(
                                e.target.value
                            )
                }

            ),


            createElement(
                "label",
                null,
                "Event Location:"
            ),


            createElement(

                "input",

                {
                    type:
                        "text",

                    placeholder:
                        "Enter location",

                    value:
                        location,

                    onChange:
                        e =>
                            setLocation(
                                e.target.value
                            )
                }

            ),


            createElement(
                "label",
                null,
                "Truck Count:"
            ),


            createElement(

                "input",

                {
                    type:
                        "number",

                    min: "1",

                    placeholder:
                        "Enter number of trucks",

                    value:
                        truckCount,

                    onChange:
                        e =>
                            setTruckCount(
                                e.target.value
                            )
                }

            ),


            createElement(

                "button",

                {
                    onClick:
                        addEvent
                },

                "Add Event"

            ),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "events"
                        )
                },

                "Back to Events"

            )

        )

    );

}


// ==========================================
// TRUCK ROUTES
// ==========================================

function TruckRoutesPage({
    trucks,
    navigateTo
}) {

    const [status, setStatus] =
        useState("All");


    const [search, setSearch] =
        useState("");


    const filteredTrucks =
        trucks.filter(truck => {

            const statusMatch =

                status === "All" ||

                truck.status === status;


            const searchMatch =

                truck.route
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );


            return (
                statusMatch &&
                searchMatch
            );

        });


    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "Truck Routes"
            )

        ),


        createElement(

            "main",

            null,


            createElement(

                "section",

                {
                    className:
                        "filter-section"
                },


                createElement(
                    "label",
                    null,
                    "Filter by Status:"
                ),


                createElement(

                    "select",

                    {
                        value:
                            status,

                        onChange:
                            e =>
                                setStatus(
                                    e.target.value
                                )
                    },


                    createElement(
                        "option",
                        {
                            value:
                                "All"
                        },
                        "All"
                    ),


                    createElement(
                        "option",
                        {
                            value:
                                "Active"
                        },
                        "Active"
                    ),


                    createElement(
                        "option",
                        {
                            value:
                                "InActive"
                        },
                        "InActive"
                    ),


                    createElement(
                        "option",
                        {
                            value:
                                "Completed"
                        },
                        "Completed"
                    ),


                    createElement(
                        "option",
                        {
                            value:
                                "Pending"
                        },
                        "Pending"
                    )

                )

            ),


            createElement(

                "section",

                {
                    className:
                        "search-section"
                },


                createElement(
                    "label",
                    null,
                    "Search Route:"
                ),


                createElement(

                    "input",

                    {
                        type:
                            "text",

                        placeholder:
                            "Search by route name",

                        value:
                            search,

                        onChange:
                            e =>
                                setSearch(
                                    e.target.value
                                )
                    }

                )

            ),


            createElement(

                "section",

                {
                    className:
                        "truck-cards"
                },


                ...filteredTrucks.map(
                    truck =>

                        createElement(

                            "div",

                            {
                                key:
                                    truck.id,

                                className:
                                    "truck-card"
                            },


                            createElement(
                                "h3",
                                null,
                                `Route: ${truck.route}`
                            ),


                            createElement(
                                "p",
                                null,
                                `Status: ${truck.status}`
                            )

                        )

                )

            ),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "welcome"
                        )
                },

                "Back to Welcome Page"

            )

        )

    );

}


// ==========================================
// REPORT ISSUE
// ==========================================

function FeedbackPage({
    feedback,
    setFeedback,
    navigateTo
}) {

    const [text, setText] =
        useState("");


    function submitFeedback() {

        if (!text.trim()) {

            alert(
                "Please provide feedback before submitting."
            );

            return;

        }


        setFeedback([
            ...feedback,
            text.trim()
        ]);


        alert(
            "Feedback Submitted Successfully!"
        );


        navigateTo(
            "welcome"
        );

    }


    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "Report an Issue"
            )

        ),


        createElement(

            "main",

            null,


            createElement(

                "textarea",

                {
                    placeholder:
                        "Enter your feedback or issue here",

                    value:
                        text,

                    onChange:
                        e =>
                            setText(
                                e.target.value
                            )
                }

            ),


            createElement(

                "button",

                {
                    onClick:
                        submitFeedback
                },

                "Submit Feedback"

            ),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "welcome"
                        )
                },

                "Back to Welcome Page"

            )

        )

    );

}


// ==========================================
// VIEW FEEDBACK
// ==========================================

function ViewFeedbackPage({
    feedback,
    navigateTo
}) {

    const feedbackContent =

        feedback.length === 0

            ?

            createElement(

                "p",

                null,

                "No feedback available"

            )

            :

            feedback.map(
                (item, index) =>

                    createElement(

                        "div",

                        {
                            key:
                                index,

                            className:
                                "feedback-card"
                        },


                        createElement(
                            "p",
                            null,
                            item
                        )

                    )

            );


    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "View Feedback"
            )

        ),


        createElement(

            "main",

            null,


            feedbackContent,


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "welcome"
                        )
                },

                "Back to Welcome Page"

            )

        )

    );

}


// ==========================================
// VISUALIZE DATA
// ==========================================

function VisualizeDataPage({
    bins,
    navigateTo
}) {

    const chartReference =
        useRef(null);


    useEffect(() => {

        const binLevels = {

            Full: 0,

            HalfFull: 0,

            Empty: 0

        };


        bins.forEach(bin => {

            if (
                bin.level === "Full"
            ) {

                binLevels.Full++;

            }


            if (
                bin.level ===
                "Half-Full"
            ) {

                binLevels.HalfFull++;

            }


            if (
                bin.level === "Empty"
            ) {

                binLevels.Empty++;

            }

        });


        const context =
            chartReference
                .current
                .getContext("2d");


        const chart =
            new Chart(
                context,
                {

                    type: "bar",

                    data: {

                        labels: [
                            "Full",
                            "Half-Full",
                            "Empty"
                        ],

                        datasets: [

                            {

                                label:
                                    "Number of Bins by Level",

                                data: [

                                    binLevels.Full,

                                    binLevels.HalfFull,

                                    binLevels.Empty

                                ],

                                backgroundColor: [
                                    "red",
                                    "orange",
                                    "green"
                                ],

                                borderColor: [
                                    "darkred",
                                    "darkorange",
                                    "darkgreen"
                                ],

                                borderWidth: 1

                            }

                        ]

                    },


                    options: {

                        scales: {

                            y: {

                                beginAtZero:
                                    true

                            }

                        }

                    }

                }

            );


        return () => {

            chart.destroy();

        };

    }, [bins]);


    return createElement(

        React.Fragment,

        null,


        createElement(

            "header",

            null,

            createElement(
                "h1",
                null,
                "Visualize Waste Data"
            )

        ),


        createElement(

            "main",

            null,


            createElement(

                "canvas",

                {
                    ref:
                        chartReference,

                    width:
                        "400",

                    height:
                        "200"
                }

            ),


            createElement(

                "button",

                {
                    onClick: () =>
                        navigateTo(
                            "welcome"
                        )
                },

                "Back to Welcome Page"

            )

        )

    );

}


// ==========================================
// REPORT
// ==========================================

function openGeneratedReport(
    bins,
    trucks,
    events
) {

    const reportWindow =
        window.open(
            "",
            "_blank"
        );


    if (!reportWindow) {

        alert(
            "Please allow pop-ups to generate the report."
        );

        return;

    }


    const binsReport =
        bins.map(bin => `

            <div class="report-item">

                <div>
                    <strong>Location:</strong>
                    ${bin.location}
                </div>

                <div>
                    <strong>Bin Type:</strong>
                    ${bin.type}
                </div>

                <div>
                    <strong>Bin Level:</strong>
                    ${bin.level}
                </div>

                <div>
                    <strong>Assigned Truck:</strong>
                    ${bin.assignedTruck}
                </div>

            </div>

        `).join("");


    const trucksReport =
        trucks.map(truck => `

            <div class="report-item">

                <div>
                    <strong>Route:</strong>
                    ${truck.route}
                </div>

                <div>
                    <strong>Status:</strong>
                    ${truck.status}
                </div>

            </div>

        `).join("");


    const eventsReport =
        events.map(event => `

            <div class="report-item">

                <div>
                    <strong>Event Type:</strong>
                    ${event.type}
                </div>

                <div>
                    <strong>Date:</strong>
                    ${event.date}
                </div>

                <div>
                    <strong>Location:</strong>
                    ${event.location}
                </div>

                <div>
                    <strong>Truck Count:</strong>
                    ${event.truckCount}
                </div>

            </div>

        `).join("");


    reportWindow.document.write(`

        <!DOCTYPE html>

        <html lang="en">

        <head>

            <meta charset="UTF-8">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            >

            <title>
                Waste Management Report
            </title>


           <style>

    body {

        margin: 0;

        padding: 40px;

        font-family:
            "Trebuchet MS",
            Arial,
            sans-serif;

        background-color:
            #e9ece6;

        color:
            #333;

    }


    .report-container {

        max-width:
            900px;

        margin:
            0 auto;

        background-color:
            #ffffff;

        padding:
            40px;

        border-radius:
            12px;

        box-shadow:
            0 5px 18px
            rgba(0, 0, 0, 0.12);

    }


    .main-heading {

        background-color:
            #545b5a;

        color:
            white;

        text-align:
            center;

        padding:
            22px;

        border-radius:
            8px;

        font-size:
            36px;

        font-weight:
            bold;

        letter-spacing:
            0.7px;

        margin-bottom:
            40px;

    }


    .section {

        margin-bottom:
            40px;

    }


    .section-heading {

        color:
            #357f72;

        font-size:
            27px;

        font-weight:
            bold;

        padding:
            10px 14px;

        margin-bottom:
            20px;

        background-color:
            #d6e7e2;

        border-left:
            5px solid #52ab98;

        border-radius:
            5px;

    }


    .report-item {

        background-color:
            #f7f9f8;

        border:
            1px solid #d4dfdc;

        border-left:
            5px solid #6fa89c;

        padding:
            18px 20px;

        margin-bottom:
            15px;

        border-radius:
            7px;

        font-size:
            17px;

        line-height:
            1.9;

    }


    .report-item strong {

        color:
            #3c6f66;

        font-size:
            17px;

        font-weight:
            bold;

    }


    .report-item:hover {

        background-color:
            #eef5f2;

    }


    @media print {

        body {

            background:
                white;

            padding:
                0;

        }


        .report-container {

            box-shadow:
                none;

        }

    }

</style>
        </head>


        <body>


            <div class="report-container">


                <div class="main-heading">

                    Waste Management Report

                </div>


                <div class="section">

                    <div class="section-heading">

                        Bins Report

                    </div>

                    ${binsReport}

                </div>


                <div class="section">

                    <div class="section-heading">

                        Trucks Report

                    </div>

                    ${trucksReport}

                </div>


                <div class="section">

                    <div class="section-heading">

                        Events Report

                    </div>

                    ${eventsReport}

                </div>


            </div>


        </body>

        </html>

    `);


    reportWindow.document.close();

}


// ==========================================
// START REACT APPLICATION
// ==========================================

const root =
    ReactDOM.createRoot(
        document.getElementById(
            "app"
        )
    );


root.render(
    createElement(App)
);