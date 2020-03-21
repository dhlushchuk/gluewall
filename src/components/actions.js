export const showSidebar = (isShowedSidebar) =>
({
    type: "SHOW_SIDEBAR",
    isShowedSidebar
})
export const loadPage = (isPageOnload) =>
({
    type: "LOAD_PAGE",
    isPageOnload
})
export const changeBackgroundTheme = (backgroundTheme) => 
({
    type: "CHANGE_BACKGROUND_COLOR",
    backgroundTheme
})