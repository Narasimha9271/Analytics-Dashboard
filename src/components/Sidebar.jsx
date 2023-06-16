import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Widgets as ComponentsIcon,
    Equalizer as ChartsIcon,
    Assignment as FormsIcon,
    TableChart as TablesIcon,
    Extension as IconsIcon,
    Map as MapsIcon,
    DescriptionOutlined as DocumentationIcon,
    HistoryOutlined as ChangeLogIcon,
    Dashboard as DashboardIcon,
    Pages as PagesIcon,
    DescriptionOutlined as InvoicesIcon,
    VpnKey as AuthIcon,
} from "@mui/icons-material";

const Title = () => {
    return (
        <div
            style={{
                Padding: "50px",
                paddingLeft: "70px",
                color: "white",
                backgroundColor: "rgb(71, 130, 218)",
                height: "63px",
                fontSize: "30px",
                marginTop: "10px",
            }}
        >
            My App
        </div>
    );
};

const Sidebar = () => {
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : null);
    };

    return (
        <div
            style={{
                width: "300px",
                backgroundColor: "rgb(71, 130, 218)",
                color: "white",
            }}
        >
            <Title />
            <div>
                <div
                    style={{
                        marginTop: "30px",
                        marginBottom: "10px",
                        paddingLeft: "20px",
                        backgroundColor: "rgb(71, 130, 218)",
                        color: "white",
                    }}
                >
                    PAGES
                </div>
                <Accordion
                    expanded={expandedAccordion === "dashboard"}
                    onChange={handleAccordionChange("dashboard")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <DashboardIcon />
                        <Typography>Dashboard</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">Default</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Analytics</Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">SaaS</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "pages"}
                    onChange={handleAccordionChange("pages")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <PagesIcon />
                        <Typography>Pages</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">Profiles</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Settings</Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">Pricing</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Chat</Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">Blank Page</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                {/* Invoices Accordion */}
                <Accordion
                    expanded={expandedAccordion === "invoices"}
                    onChange={handleAccordionChange("invoices")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <InvoicesIcon />
                        <Typography>Invoices</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">List</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Detail</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                {/* Auth Accordion */}
                <Accordion
                    expanded={expandedAccordion === "auth"}
                    onChange={handleAccordionChange("auth")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <AuthIcon />
                        <Typography>Auth</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">Sign In</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Sign Up</Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">Reset Pages</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">404 Page</Link>
                            </div>
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">500 Page</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "25px",
                        marginBottom: "10px",
                        paddingLeft: "20px",
                    }}
                >
                    ELEMENTS
                </div>
                <Accordion
                    expanded={expandedAccordion === "components"}
                    onChange={handleAccordionChange("components")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ComponentsIcon />
                        <Typography>Components</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: "8px 16px 8px 19px" }}>
                                <Link href="#">Alerts</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Accordion</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Avatar</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Badges</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Buttons</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Cards</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Chips</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Dialogs</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Lists</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Menus</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Pagination</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Progress</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Snakbars</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Tooltips</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "charts"}
                    onChange={handleAccordionChange("charts")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ChartsIcon />
                        <Typography>Charts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Chart.js</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">ApexCharts</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expandedAccordion === "forms"}
                    onChange={handleAccordionChange("forms")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <FormsIcon />
                        <Typography>Forms</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Pickers</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Selection Controls</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Selects</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Text Fields</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Editors</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Formik</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "tables"}
                    onChange={handleAccordionChange("tables")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <TablesIcon />
                        <Typography>Tables</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Simple Table</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Advanced Table</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Data Grid</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "icons"}
                    onChange={handleAccordionChange("icons")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <IconsIcon />
                        <Typography>Icons</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Material Icons</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Feather Icons</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expandedAccordion === "maps"}
                    onChange={handleAccordionChange("maps")}
                    style={{ backgroundColor: "rgb(71, 130, 218)" }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <MapsIcon />
                        <Typography>Maps</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Google Maps</Link>
                            </div>
                            <div style={{ padding: " 8px 16px 8px 19px" }}>
                                <Link href="#">Vector Maps</Link>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <div
                    style={{
                        marginTop: "25px",
                        marginBottom: "10px",
                        paddingLeft: "40px",
                        backgroundColor: "rgb(71, 130, 218)",
                        color: "white",
                        fontSize: "14px",
                    }}
                >
                    My App Pro
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgb(71, 130, 218)",
                        paddingLeft: "12px",
                    }}
                >
                    <DocumentationIcon />
                    <div style={{ padding: " 8px 16px 8px 16px" }}>
                        <Link style={{ color: "black" }} href="#">
                            Documentation
                        </Link>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgb(71, 130, 218)",
                        paddingLeft: "12px",
                    }}
                >
                    <ChangeLogIcon />
                    <div style={{ padding: " 8px 16px 8px 16px" }}>
                        <Link style={{ color: "black" }} href="#">
                            Changelog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
