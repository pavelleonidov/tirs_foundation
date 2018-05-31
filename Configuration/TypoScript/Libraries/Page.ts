# Extend lib.pageContent from tirs_configuration

page.10 {
    variables {
        sidebarRight < .content
        sidebarRight.select.where = colPos = 2
        sidebarLeft < .sidebarRight
        sidebarLeft.select.where = colPos = 3
    }
}