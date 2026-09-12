const { useState, useEffect, useRef } = React;
const e = React.createElement;


/* =========================================================
   BENGALURU AREAS
   ========================================================= */

const bengaluruAreas = [

    "Adugodi",
    "Arekere",
    "Banashankari",
    "Banaswadi",
    "Basavanagudi",
    "Basaveshwaranagar",
    "Bellandur",
    "Benson Town",
    "Bommanahalli",
    "Bommasandra",
    "Brookefield",
    "BTM Layout",
    "Chamarajpet",
    "CV Raman Nagar",
    "Devanahalli",
    "Domlur",
    "Electronic City",
    "Frazer Town",
    "Girinagar",
    "HBR Layout",
    "Hebbal",
    "Hennur",
    "Horamavu",
    "HSR Layout",
    "Indiranagar",
    "Jakkur",
    "Jalahalli",
    "Jayanagar",
    "JP Nagar",
    "Kadugodi",
    "Kalyan Nagar",
    "Kammanahalli",
    "Kengeri",
    "Koramangala",
    "KR Puram",
    "Kumaraswamy Layout",
    "Mahadevapura",
    "Malleshwaram",
    "Marathahalli",
    "MG Road",
    "Nagarbhavi",
    "Nagawara",
    "Peenya",
    "Rajajinagar",
    "Ramamurthy Nagar",
    "Richmond Town",
    "RT Nagar",
    "Sadashivanagar",
    "Sahakara Nagar",
    "Sarjapur",
    "Shivajinagar",
    "Ulsoor",
    "Varthur",
    "Vasanth Nagar",
    "Vijayanagar",
    "Whitefield",
    "Wilson Garden",
    "Yelahanka",
    "Yeshwanthpur",

    // Smaller Bengaluru areas

    "Ragigudda",
    "Ragiguda",
    "Jayanagar 4th Block",
    "Jayanagar 9th Block",
    "JP Nagar 1st Phase",
    "JP Nagar 2nd Phase",
    "JP Nagar 6th Phase",
    "BTM 1st Stage",
    "BTM 2nd Stage",
    "Madiwala",
    "Tavarekere",
    "Suddaguntepalya",
    "SG Palya",
    "Ejipura",
    "Viveknagar",
    "Austin Town",
    "Neelasandra",
    "Cox Town",
    "Cooke Town",
    "Lingarajapuram",
    "Kacharakanahalli",
    "HRBR Layout",
    "Kasturi Nagar",
    "Benniganahalli",
    "Dooravani Nagar",
    "Hoodi",
    "Kundalahalli",
    "Munnekollal",
    "Doddanekundi",
    "AECS Layout",
    "Murugeshpalya",
    "Kodihalli",
    "HAL",
    "Jeevan Bima Nagar",
    "New Thippasandra",
    "Old Airport Road",
    "Richmond Circle",
    "Shantinagar",
    "Langford Town",
    "Lalbagh",
    "Siddapura",
    "Tilak Nagar",
    "Bilekahalli",
    "Hulimavu",
    "Begur",
    "Akshayanagar",
    "Hongasandra",
    "Garvebhavi Palya",
    "Kudlu Gate",
    "Singasandra",
    "Hosa Road",
    "Parappana Agrahara",
    "Basapura"
];


/* =========================================================
   LOCATION VALIDATION
   ========================================================= */

function normalizeArea(area) {

    return area
        .toLowerCase()
        .replace(/\./g, "")
        .replace(/,/g, " ")
        .replace(/\b(bangalore|bengaluru|karnataka)\b/g, "")
        .replace(/\s+/g, " ")
        .trim();
}


function isValidBengaluruArea(location) {

    const enteredArea = normalizeArea(location);

    return bengaluruAreas.some(
        area =>
            normalizeArea(area) === enteredArea
    );
}


/* =========================================================
   INITIAL BIN DATA
   ========================================================= */

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


/* =========================================================
   INITIAL TRUCK DATA
   ========================================================= */

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


/* =========================================================
   INITIAL EVENT DATA
   ========================================================= */

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


/* =========================================================
   MAIN APP
   ========================================================= */

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


    function navigateTo(page) {

        setCurrentPage(page);
    }


    useEffect(() => {

        window.navigateTo = navigateTo;

        window.generateReport = function () {

            openGeneratedReport(
                bins,
                trucks,
                events
            );
        };

    }, [bins, trucks, events]);


    let page;


    switch (currentPage) {

        case "statistics":

            page = e(
                StatisticsPage,
                {
                    bins,
                    setBins,
                    navigateTo
                }
            );

            break;


        case "addBin":

            page = e(
                AddBinPage,
                {
                    bins,
                    setBins,
                    navigateTo
                }
            );

            break;


        case "events":

            page = e(
                EventsPage,
                {
                    events,
                    navigateTo
                }
            );

            break;


        case "addEvent":

            page = e(
                AddEventPage,
                {
                    events,
                    setEvents,
                    navigateTo
                }
            );

            break;


        case "truckRoutes":

            page = e(
                TruckRoutesPage,
                {
                    trucks,
                    navigateTo
                }
            );

            break;


        case "feedback":

            page = e(
                FeedbackPage,
                {
                    feedback,
                    setFeedback,
                    navigateTo
                }
            );

            break;


        case "viewFeedback":

            page = e(
                ViewFeedbackPage,
                {
                    feedback,
                    navigateTo
                }
            );

            break;


        case "visualizeData":

            page = e(
                VisualizeDataPage,
                {
                    bins,
                    navigateTo
                }
            );

            break;


        default:

            page = e(WelcomePage);
    }


    return page;
}


/* =========================================================
   WELCOME PAGE
   ========================================================= */

function WelcomePage() {

    return e(

        React.Fragment,
        null,


        e(

            "header",

            {
                style: {
                    textAlign: "center",
                    padding: "20px"
                }
            },


            e(

                "h1",

                {
                    style: {
                        fontSize: "3em",
                        marginBottom: "10px"
                    }
                },

                "Welcome to Waste Management Dashboard"
            ),


            e(

                "p",

                {
                    style: {
                        fontSize: "1.2em"
                    }
                },

                "Your efficient waste collection and management solution for smart cities"
            )
        ),


        e(

            "main",

            {
                style: {

                    display: "flex",

                    alignItems: "flex-start",

                    justifyContent: "center",

                    textAlign: "center",

                    padding: "25px 20px",

                    minHeight: "380px",

                    background:
                        "linear-gradient(to right, #e0f7fa, #e8f5e9)",

                    borderRadius: "10px",

                    boxSizing: "border-box"
                }
            },


            e(

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
                            "0 4px 10px rgba(0,0,0,0.10)",

                        boxSizing: "border-box"
                    }
                },


                `"It is our collective and individual responsibility to preserve and tend to the world in which we all live.
                The earth is not ours to exploit but a gift to cherish and protect."`
            )
        )
    );
}


/* =========================================================
   BIN STATISTICS
   ========================================================= */

function StatisticsPage({
    bins,
    setBins,
    navigateTo
}) {

    const [selectedBinId, setSelectedBinId] =
        useState(null);


    function deleteBin(id) {

        const selectedBin =
            bins.find(
                bin => bin.id === id
            );


        if (!selectedBin) {

            return;
        }


        const confirmDelete =
            window.confirm(

                `Are you sure you want to delete the bin in ${selectedBin.location}?`
            );


        if (!confirmDelete) {

            return;
        }


        const updatedBins =
            bins.filter(
                bin =>
                    bin.id !== id
            );


        setBins(updatedBins);

        setSelectedBinId(null);

        alert(
            "Bin deleted successfully."
        );
    }


    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(
                "h1",
                null,
                "Bin Statistics"
            )
        ),


        e(

            "main",
            null,


            bins.length === 0

                ? e(
                    "p",
                    null,
                    "No bins available."
                )

                : bins.map(bin => {


                    let color;


                    if (bin.level === "Full") {

                        color = "red";

                    }

                    else if (
                        bin.level === "Half-Full"
                    ) {

                        color = "orange";

                    }

                    else {

                        color = "green";
                    }


                    return e(

                        "div",

                        {

                            key: bin.id,

                            className:
                                "bin-card",

                            style: {

                                backgroundColor:
                                    color,

                                cursor:
                                    "pointer",

                                position:
                                    "relative"
                            },


                            onClick: () =>

                                setSelectedBinId(

                                    selectedBinId === bin.id
                                        ? null
                                        : bin.id
                                )
                        },


                        e(

                            "h3",
                            null,

                            `Location: ${bin.location}`
                        ),


                        e(

                            "p",
                            null,

                            `Bin Level: ${bin.level}`
                        ),


                        e(

                            "p",
                            null,

                            `Bin Type: ${bin.type}`
                        ),


                        e(

                            "p",
                            null,

                            `Assigned Truck: ${bin.assignedTruck}`
                        ),


                        selectedBinId === bin.id &&

                        e(

                            "div",

                            {

                                style: {
                                    marginTop: "12px"
                                },

                                onClick: event =>
                                    event.stopPropagation()
                            },


                            e(

                                "button",

                                {

                                    type: "button",

                                    onClick: () =>
                                        deleteBin(bin.id)
                                },

                                "Delete Bin"
                            )
                        )
                    );

                }),


            e(

                "button",

                {

                    type: "button",

                    onClick: () =>
                        navigateTo("welcome")
                },

                "Back to Welcome Page"
            )
        )
    );
}


/* =========================================================
   ADD BIN PAGE
   ========================================================= */

function AddBinPage({
    bins,
    setBins,
    navigateTo
}) {

    const [location, setLocation] =
        useState("");

    const [binType, setBinType] =
        useState("");

    const [binLevel, setBinLevel] =
        useState("");

    const [assignedTruck, setAssignedTruck] =
        useState("");


    /*
       All sections are CLOSED initially
    */

    const [showLocation, setShowLocation] =
        useState(false);

    const [showType, setShowType] =
        useState(false);

    const [showLevel, setShowLevel] =
        useState(false);

    const [showTruck, setShowTruck] =
        useState(false);


    function addBin() {


        /* LOCATION EMPTY */

        if (!location.trim()) {

            alert(
                "Please enter the bin location."
            );

            return;
        }


        /* BENGALURU VALIDATION */

        if (!isValidBengaluruArea(location)) {

            alert(
                "Area not found. Please enter a valid Bengaluru area."
            );

            return;
        }


        if (!binType) {

            alert(
                "Please select the bin type."
            );

            return;
        }


        if (!binLevel) {

            alert(
                "Please select the bin level."
            );

            return;
        }


        if (!assignedTruck) {

            alert(
                "Please select an assigned truck."
            );

            return;
        }


        /*
           Get correct area name
        */

        const matchedArea =
            bengaluruAreas.find(

                area =>

                    normalizeArea(area) ===
                    normalizeArea(location)
            );


        const finalLocation =
            matchedArea || location.trim();


        /*
           CHECK DUPLICATE BIN
        */

        const binAlreadyExists =
            bins.some(

                bin =>

                    normalizeArea(bin.location) ===
                    normalizeArea(finalLocation)
            );


        if (binAlreadyExists) {

            alert(
                "Bin already present in this area."
            );

            return;
        }


        /*
           CREATE NEW BIN
        */

        const newBin = {

            id:

                bins.length > 0

                    ? Math.max(
                        ...bins.map(
                            bin => bin.id
                        )
                    ) + 1

                    : 1,


            location:
                finalLocation,


            type:
                binType,


            level:
                binLevel,


            assignedTruck:
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
            "statistics"
        );
    }


    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(
                "h1",
                null,
                "Add New Bin"
            )
        ),


        e(

            "main",
            null,


            /* =================================================
               LOCATION
               ================================================= */

            e(

                "div",

                {
                    className:
                        "form-section"
                },


                e(

                    "button",

                    {

                        type: "button",

                        className:
                            "toggle-btn",

                        onClick: () =>
                            setShowLocation(
                                !showLocation
                            )
                    },

                    "Location"
                ),


                showLocation &&

                e(

                    "div",

                    {

                        className:
                            "form-content",

                        /*
                           This overrides old
                           CSS display:none
                        */

                        style: {
                            display: "block"
                        }
                    },


                    e(

                        "label",

                        {
                            htmlFor:
                                "bin-location"
                        },

                        "Location:"
                    ),


                    e(

                        "input",

                        {

                            type:
                                "text",

                            id:
                                "bin-location",

                            placeholder:
                                "Enter Bengaluru area",

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


            /* =================================================
               BIN TYPE
               ================================================= */

            e(

                "div",

                {
                    className:
                        "form-section"
                },


                e(

                    "button",

                    {

                        type: "button",

                        className:
                            "toggle-btn",

                        onClick: () =>
                            setShowType(
                                !showType
                            )
                    },

                    "Bin Type"
                ),


                showType &&

                e(

                    "div",

                    {

                        className:
                            "form-content",

                        style: {
                            display: "block"
                        }
                    },


                    e(

                        "label",

                        {
                            htmlFor:
                                "bin-type"
                        },

                        "Bin Type:"
                    ),


                    e(

                        "select",

                        {

                            id:
                                "bin-type",

                            value:
                                binType,


                            onChange:
                                event =>

                                    setBinType(
                                        event.target.value
                                    )
                        },


                        e(

                            "option",

                            {

                                value: "",

                                disabled: true
                            },

                            "Select bin type"
                        ),


                        e(

                            "option",

                            {
                                value:
                                    "Organic"
                            },

                            "Organic"
                        ),


                        e(

                            "option",

                            {
                                value:
                                    "Recyclable"
                            },

                            "Recyclable"
                        ),


                        e(

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


            /* =================================================
               BIN LEVEL
               ================================================= */

            e(

                "div",

                {
                    className:
                        "form-section"
                },


                e(

                    "button",

                    {

                        type: "button",

                        className:
                            "toggle-btn",

                        onClick: () =>
                            setShowLevel(
                                !showLevel
                            )
                    },

                    "Bin Level"
                ),


                showLevel &&

                e(

                    "div",

                    {

                        className:
                            "form-content",

                        style: {
                            display: "block"
                        }
                    },


                    e(

                        "label",

                        {
                            htmlFor:
                                "bin-level"
                        },

                        "Bin Level:"
                    ),


                    e(

                        "select",

                        {

                            id:
                                "bin-level",

                            value:
                                binLevel,


                            onChange:
                                event =>

                                    setBinLevel(
                                        event.target.value
                                    )
                        },


                        e(

                            "option",

                            {

                                value: "",

                                disabled: true
                            },

                            "Select bin level"
                        ),


                        e(

                            "option",

                            {
                                value:
                                    "Full"
                            },

                            "Full"
                        ),


                        e(

                            "option",

                            {
                                value:
                                    "Half-Full"
                            },

                            "Half-Full"
                        ),


                        e(

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


            /* =================================================
               ASSIGNED TRUCK
               ================================================= */

            e(

                "div",

                {
                    className:
                        "form-section"
                },


                e(

                    "button",

                    {

                        type: "button",

                        className:
                            "toggle-btn",

                        onClick: () =>
                            setShowTruck(
                                !showTruck
                            )
                    },

                    "Assigned Truck"
                ),


                showTruck &&

                e(

                    "div",

                    {

                        className:
                            "form-content",

                        style: {
                            display: "block"
                        }
                    },


                    e(

                        "label",

                        {
                            htmlFor:
                                "assigned-truck"
                        },

                        "Assigned Truck:"
                    ),


                    e(

                        "select",

                        {

                            id:
                                "assigned-truck",

                            value:
                                assignedTruck,


                            onChange:
                                event =>

                                    setAssignedTruck(
                                        event.target.value
                                    )
                        },


                        e(

                            "option",

                            {

                                value: "",

                                disabled: true
                            },

                            "Select assigned truck"
                        ),


                        e(

                            "option",

                            {
                                value:
                                    "Truck 1"
                            },

                            "Truck 1"
                        ),


                        e(

                            "option",

                            {
                                value:
                                    "Truck 2"
                            },

                            "Truck 2"
                        ),


                        e(

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


            /* ADD BIN BUTTON */

            e(

                "button",

                {

                    type:
                        "button",

                    onClick:
                        addBin
                },

                "Add Bin"
            ),


            /* BACK BUTTON */

            e(

                "button",

                {

                    type:
                        "button",

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


/* =========================================================
   EVENTS PAGE
   ========================================================= */

function EventsPage({
    events,
    navigateTo
}) {

    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(
                "h1",
                null,
                "Manage Events"
            )
        ),


        e(

            "main",
            null,


            events.map(event =>

                e(

                    "div",

                    {

                        className:
                            "event-card",

                        key:
                            event.id
                    },


                    e(

                        "h3",
                        null,

                        `Event Type: ${event.type}`
                    ),


                    e(

                        "p",
                        null,

                        `Date: ${event.date}`
                    ),


                    e(

                        "p",
                        null,

                        `Location: ${event.location}`
                    ),


                    e(

                        "p",
                        null,

                        `Truck Count: ${event.truckCount}`
                    )
                )
            ),


            e(

                "button",

                {

                    onClick: () =>
                        navigateTo(
                            "addEvent"
                        )
                },

                "Add Event"
            ),


            e(

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


/* =========================================================
   ADD EVENT PAGE
   ========================================================= */

function AddEventPage({
    events,
    setEvents,
    navigateTo
}) {

    const [eventType, setEventType] =
        useState("");

    const [eventDate, setEventDate] =
        useState("");

    const [location, setLocation] =
        useState("");

    const [truckCount, setTruckCount] =
        useState("");


    function addEvent() {


        if (
            !eventType.trim() ||
            !eventDate ||
            !location.trim() ||
            !truckCount
        ) {

            alert(
                "Please fill all fields."
            );

            return;
        }


        if (!isValidBengaluruArea(location)) {

            alert(
                "Area not found. Please enter a valid Bengaluru area."
            );

            return;
        }


        const matchedArea =
            bengaluruAreas.find(

                area =>

                    normalizeArea(area) ===
                    normalizeArea(location)
            );


        const newEvent = {

            id:

                events.length > 0

                    ? Math.max(
                        ...events.map(
                            event =>
                                event.id
                        )
                    ) + 1

                    : 1,


            type:
                eventType.trim(),


            date:
                eventDate,


            location:
                matchedArea ||
                location.trim(),


            truckCount:
                Number(truckCount)
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


    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(
                "h1",
                null,
                "Add New Event"
            )
        ),


        e(

            "main",
            null,


            e(

                "label",

                {
                    htmlFor:
                        "event-type"
                },

                "Event Type:"
            ),


            e(

                "input",

                {

                    id:
                        "event-type",

                    type:
                        "text",

                    placeholder:
                        "Enter event type",

                    value:
                        eventType,


                    onChange:
                        event =>

                            setEventType(
                                event.target.value
                            )
                }
            ),


            e(

                "label",

                {
                    htmlFor:
                        "event-date"
                },

                "Event Date:"
            ),


            e(

                "input",

                {

                    id:
                        "event-date",

                    type:
                        "date",

                    value:
                        eventDate,


                    onChange:
                        event =>

                            setEventDate(
                                event.target.value
                            )
                }
            ),


            e(

                "label",

                {
                    htmlFor:
                        "event-location"
                },

                "Event Location:"
            ),


            e(

                "input",

                {

                    id:
                        "event-location",

                    type:
                        "text",

                    placeholder:
                        "Enter Bengaluru area",

                    value:
                        location,


                    onChange:
                        event =>

                            setLocation(
                                event.target.value
                            )
                }
            ),


            e(

                "label",

                {
                    htmlFor:
                        "truck-count"
                },

                "Truck Count:"
            ),


            e(

                "input",

                {

                    id:
                        "truck-count",

                    type:
                        "number",

                    min:
                        "1",

                    placeholder:
                        "Enter number of trucks",

                    value:
                        truckCount,


                    onChange:
                        event =>

                            setTruckCount(
                                event.target.value
                            )
                }
            ),


            e(

                "button",

                {
                    onClick:
                        addEvent
                },

                "Add Event"
            ),


            e(

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


/* =========================================================
   TRUCK ROUTES
   ========================================================= */

function TruckRoutesPage({
    trucks,
    navigateTo
}) {

    const [statusFilter, setStatusFilter] =
        useState("All");

    const [searchText, setSearchText] =
        useState("");


    const filteredTrucks =
        trucks.filter(truck => {


            const statusMatches =

                statusFilter === "All" ||

                truck.status === statusFilter;


            const searchMatches =

                truck.route
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


            return (
                statusMatches &&
                searchMatches
            );
        });


    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(
                "h1",
                null,
                "Truck Routes"
            )
        ),


        e(

            "main",
            null,


            e(

                "section",

                {
                    className:
                        "filter-section"
                },


                e(

                    "label",

                    {
                        htmlFor:
                            "route-status"
                    },

                    "Filter by Status:"
                ),


                e(

                    "select",

                    {

                        id:
                            "route-status",

                        value:
                            statusFilter,


                        onChange:
                            event =>

                                setStatusFilter(
                                    event.target.value
                                )
                    },


                    e(

                        "option",

                        {
                            value: "All"
                        },

                        "All"
                    ),


                    e(

                        "option",

                        {
                            value: "Active"
                        },

                        "Active"
                    ),


                    e(

                        "option",

                        {
                            value: "InActive"
                        },

                        "InActive"
                    ),


                    e(

                        "option",

                        {
                            value: "Completed"
                        },

                        "Completed"
                    ),


                    e(

                        "option",

                        {
                            value: "Pending"
                        },

                        "Pending"
                    )
                )
            ),


            e(

                "section",

                {
                    className:
                        "search-section"
                },


                e(

                    "label",

                    {
                        htmlFor:
                            "search-route"
                    },

                    "Search Route:"
                ),


                e(

                    "input",

                    {

                        id:
                            "search-route",

                        type:
                            "text",

                        placeholder:
                            "Search by route name",

                        value:
                            searchText,


                        onChange:
                            event =>

                                setSearchText(
                                    event.target.value
                                )
                    }
                )
            ),


            e(

                "section",

                {
                    className:
                        "truck-cards"
                },


                filteredTrucks.length > 0

                    ? filteredTrucks.map(

                        truck =>

                            e(

                                "div",

                                {

                                    className:
                                        "truck-card",

                                    key:
                                        truck.id
                                },


                                e(

                                    "h3",
                                    null,

                                    `Route: ${truck.route}`
                                ),


                                e(

                                    "p",
                                    null,

                                    `Status: ${truck.status}`
                                )
                            )
                    )

                    : e(

                        "p",
                        null,

                        "No truck routes found."
                    )
            ),


            e(

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


/* =========================================================
   FEEDBACK PAGE
   ========================================================= */

function FeedbackPage({
    feedback,
    setFeedback,
    navigateTo
}) {

    const [feedbackText, setFeedbackText] =
        useState("");


    function submitFeedback() {


        if (!feedbackText.trim()) {

            alert(
                "Please provide feedback before submitting."
            );

            return;
        }


        setFeedback([
            ...feedback,
            feedbackText.trim()
        ]);


        alert(
            "Feedback Submitted Successfully!"
        );


        navigateTo(
            "welcome"
        );
    }


    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(
                "h1",
                null,
                "Report an Issue"
            )
        ),


        e(

            "main",
            null,


            e(

                "textarea",

                {

                    id:
                        "feedback-text",

                    placeholder:
                        "Enter your feedback or issue here",

                    value:
                        feedbackText,


                    onChange:
                        event =>

                            setFeedbackText(
                                event.target.value
                            )
                }
            ),


            e(

                "button",

                {
                    onClick:
                        submitFeedback
                },

                "Submit Feedback"
            ),


            e(

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


/* =========================================================
   VIEW FEEDBACK
   ========================================================= */

function ViewFeedbackPage({
    feedback,
    navigateTo
}) {

    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(
                "h1",
                null,
                "View Feedback"
            )
        ),


        e(

            "main",
            null,


            feedback.length === 0

                ? e(

                    "p",
                    null,

                    "No feedback available"
                )

                : feedback.map(

                    (item, index) =>

                        e(

                            "div",

                            {

                                className:
                                    "feedback-card",

                                key:
                                    index
                            },


                            e(

                                "p",
                                null,

                                item
                            )
                        )
                ),


            e(

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


/* =========================================================
   VISUALIZE DATA
   ========================================================= */

function VisualizeDataPage({
    bins,
    navigateTo
}) {

    const canvasRef =
        useRef(null);


    useEffect(() => {


        const counts = {

            Full: 0,

            HalfFull: 0,

            Empty: 0
        };


        bins.forEach(bin => {


            if (bin.level === "Full") {

                counts.Full++;
            }


            if (
                bin.level === "Half-Full"
            ) {

                counts.HalfFull++;
            }


            if (
                bin.level === "Empty"
            ) {

                counts.Empty++;
            }
        });


        const chart =
            new Chart(

                canvasRef.current,

                {

                    type:
                        "bar",


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

                                    counts.Full,

                                    counts.HalfFull,

                                    counts.Empty
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


                                borderWidth:
                                    1
                            }
                        ]
                    },


                    options: {

                        responsive:
                            true,


                        scales: {

                            y: {

                                beginAtZero:
                                    true,


                                ticks: {

                                    stepSize:
                                        1
                                }
                            }
                        }
                    }
                }
            );


        return () => {

            chart.destroy();
        };


    }, [bins]);


    return e(

        React.Fragment,
        null,


        e(

            "header",
            null,

            e(

                "h1",
                null,

                "Visualize Waste Data"
            )
        ),


        e(

            "main",
            null,


            e(

                "canvas",

                {
                    ref:
                        canvasRef
                }
            ),


            e(

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


/* =========================================================
   GENERATE REPORT
   ========================================================= */

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


    const binsHtml =
        bins.map(

            bin => `

                <div class="report-card">

                    <strong>
                        ${bin.location}
                    </strong>

                    <p>
                        Type: ${bin.type}
                    </p>

                    <p>
                        Level: ${bin.level}
                    </p>

                    <p>
                        Assigned Truck:
                        ${bin.assignedTruck}
                    </p>

                </div>

            `
        ).join("");


    const trucksHtml =
        trucks.map(

            truck => `

                <div class="report-card">

                    <strong>
                        ${truck.route}
                    </strong>

                    <p>
                        Status:
                        ${truck.status}
                    </p>

                </div>

            `
        ).join("");


    const eventsHtml =
        events.map(

            event => `

                <div class="report-card">

                    <strong>
                        ${event.type}
                    </strong>

                    <p>
                        Date:
                        ${event.date}
                    </p>

                    <p>
                        Location:
                        ${event.location}
                    </p>

                    <p>
                        Required Trucks:
                        ${event.truckCount}
                    </p>

                </div>

            `
        ).join("");


    reportWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Waste Management Report
            </title>


            <style>

                body {

                    font-family:
                        Arial,
                        sans-serif;

                    background:
                        #e9ece6;

                    margin:
                        0;

                    padding:
                        30px;

                    color:
                        #333;
                }


                .report-container {

                    max-width:
                        900px;

                    margin:
                        auto;

                    background:
                        white;

                    padding:
                        30px;

                    border-radius:
                        12px;

                    box-shadow:
                        0 4px 15px
                        rgba(0,0,0,0.10);
                }


                h1 {

                    background:
                        #545b5a;

                    color:
                        white;

                    padding:
                        20px;

                    border-radius:
                        8px;

                    text-align:
                        center;

                    margin-top:
                        0;
                }


                h2 {

                    color:
                        #357f72;

                    background:
                        #d6e7e2;

                    padding:
                        12px 15px;

                    border-left:
                        5px solid
                        #52ab98;

                    border-radius:
                        5px;

                    margin-top:
                        30px;
                }


                .report-grid {

                    display:
                        grid;

                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                220px,
                                1fr
                            )
                        );

                    gap:
                        15px;
                }


                .report-card {

                    background:
                        #f7f9f8;

                    padding:
                        15px;

                    border-radius:
                        8px;

                    border-left:
                        4px solid
                        #52ab98;
                }


                .report-card strong {

                    color:
                        #357f72;

                    font-size:
                        18px;
                }


                .report-card p {

                    margin:
                        7px 0;
                }

            </style>

        </head>


        <body>


            <div class="report-container">


                <h1>
                    Waste Management Report
                </h1>


                <h2>
                    Bin Details
                </h2>


                <div class="report-grid">

                    ${binsHtml}

                </div>


                <h2>
                    Truck Routes
                </h2>


                <div class="report-grid">

                    ${trucksHtml}

                </div>


                <h2>
                    Event Details
                </h2>


                <div class="report-grid">

                    ${eventsHtml}

                </div>


            </div>


        </body>

        </html>
    `);


    reportWindow.document.close();
}


/* =========================================================
   START REACT APPLICATION
   ========================================================= */

const root =
    ReactDOM.createRoot(

        document.getElementById(
            "app"
        )
    );


root.render(
    e(App)
);
