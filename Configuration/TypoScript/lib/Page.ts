# Extend lib.pageContent from exc_configuration

page.10 {
    templateRootPaths.10 = EXT:exc_foundation/Resources/Private/Templates
    layoutRootPaths.10 = EXT:exc_foundation/Resources/Private/Layouts
    partialRootPaths.10 = EXT:exc_foundation/Resources/Private/Partials

    variables {
        sidebarRight < .content
        sidebarRight.select.where = colPos = 2
        sidebarLeft < .sidebarRight
        sidebarLeft.select.where = colPos = 3
    }
}