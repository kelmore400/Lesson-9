import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import { Menu } from "../components/Menu";
import styles from "../App.module.scss";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const MainLayout = props => {
    return (
        // <Fragment key="aaaa">
            <ErrorBoundary>
            <div className={styles.menuContainer}>
                <aside className={styles.sidebar}>
                    <nav className={styles.menuContainer}><Menu activeLinkClassName={styles.activeLink}/></nav>
                </aside>
                <main className={styles.MainLayout}>{renderRoutes(props.route.routes)}</main>
            </div>
            </ErrorBoundary>
        //  <div>Some text</div>
        // </Fragment>
    )
}