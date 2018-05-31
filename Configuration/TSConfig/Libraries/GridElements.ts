tx_gridelements {
    setup {
        section {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:section.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:section.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/section.svg
            # integer; Colored frame. 0, 1 = red, 2 = green, 3 = blue
            frame = 3
            topLevelLayout = 0
            config {
                colCount = 1
                rowCount = 1
                rows.1 {
                    columns {
                        1 {
                            name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.mainColumn
                            colPos = 101
                        }
                    }
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_section.xml
        }

        2cols {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:2cols.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:2cols.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/col2.svg
            # integer; Colored frame. 0, 1 = red, 2 = green, 3 = blue
            frame = 3
            topLevelLayout = 0
            config {
                colCount = 2
                rowCount = 1
                rows.1 {
                    columns {
                        1 {
                            name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
                            colPos = 101
                        }
                        2 {
                            name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
                            colPos = 102
                        }
                    }
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_2col.xml
        }

        3cols {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:3cols.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:3cols.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/col3.svg
            frame = 3
            topLevelLayout = 0
            config {
                colCount = 3
                rowCount = 1
                rows.1 {
                    columns {
                        1 {
                            name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
                            colPos = 101
                        }
                        2 {
                            name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.centerColumn
                            colPos = 102
                        }
                        3 {
                            name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
                            colPos = 103
                        }
                    }
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_3col.xml
        }

        4cols {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:4cols.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:4cols.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/col4.svg
            frame = 3
            topLevelLayout = 0
            config {
                colCount = 4
                rowCount = 1
                rows.1.columns {
                    1 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
                        colPos = 101
                    }
                    2 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.column2
                        colPos = 102
                    }
                    3 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.column3
                        colPos = 103
                    }
                    4 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
                        colPos = 104
                    }
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_4col.xml
        }

        5cols {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:5cols.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:5cols.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/col5.svg
            frame = 3
            topLevelLayout = 0
            config {
                colCount = 5
                rowCount = 1
                rows.1.columns {
                    1 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
                        colPos = 101
                    }
                    2 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.column2
                        colPos = 102
                    }
                    3 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.column3
                        colPos = 103
                    }
                    4 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.column4
                        colPos = 104
                    }
                    5 {
                        name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
                        colPos = 105
                    }
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_5col.xml
        }

        accordion {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:accordion.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:accordion.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/accordion.svg
            frame = 2
            topLevelLayout = 0
            config {
                colCount = 1
                rowCount = 1
                rows.1.columns.1 {
                    name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.accordionElements
                    colPos = 101
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_accordion.xml
        }

        tabs {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:tabs.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:tabs.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/tabs.svg
            frame = 2
            topLevelLayout = 0
            config {
                colCount = 1
                rowCount = 1
                rows.1.columns.1 {
                    name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.tabsElements
                    colPos = 101
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_tabs.xml
        }

        slider {
            title = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:slider.title
            description = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:slider.description
            icon = EXT:tirs_foundation/Resources/Public/Icons/slider.svg
            frame = 1
            topLevelLayout = 0
            config {
                colCount = 1
                rowCount = 1
                rows.1.columns.1 {
                    name = LLL:EXT:tirs_foundation/Resources/Private/Language/locallang_db.xlf:celayout.sliderElements
                    colPos = 101
                }
            }
            flexformDS = FILE:EXT:tirs_foundation/Configuration/FlexForm/GridElements/flexform_slider.xml
        }

    }
}