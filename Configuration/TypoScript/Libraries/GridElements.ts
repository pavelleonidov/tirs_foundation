# Fluid base
lib.fluidGrid = FLUIDTEMPLATE
lib.fluidGrid {
    templateName = Default
    layoutRootPaths {
        0 = EXT:tirs_foundation/Resources/Private/Layouts/GridElements
        10 = {$tirs_foundation.templates.gridelements.layoutRootPath}
    }
    partialRootPaths {
        0 = EXT:tirs_foundation/Resources/Private/Partials/GridElements
        10 = {$tirs_foundation.templates.gridelements.partialRootPath}
    }
    templateRootPaths {
        0 = EXT:tirs_foundation/Resources/Private/Templates/GridElements
        10 = {$tirs_foundation.templates.gridelements.templateRootPath}
    }

    settings {
        defaultHeaderType = {$styles.content.defaultHeaderType}
    }
}

# Grid Elements setup
lib.gridelements.defaultGridSetup.columns.2 >

/**
* Grid definitions
*/
lib.foundationGrids {

    # Column grids
    2cols < lib.gridelements.defaultGridSetup
    2cols {
        cObject =< lib.fluidGrid
        cObject {
            templateName = TwoColumn
            variables {

                widthOfSection = TEXT
                widthOfSection.data = field:flexform_widthOfSection

                xsCol1 = TEXT
                xsCol1.data = field:flexform_xsCol1

                xsCol2 = TEXT
                xsCol2.data = field:flexform_xsCol2

                smCol1 = TEXT
                smCol1.data = field:flexform_smCol1

                smCol2 = TEXT
                smCol2.data = field:flexform_smCol2

                mdCol1 = TEXT
                mdCol1.data = field:flexform_mdCol1

                mdCol2 = TEXT
                mdCol2.data = field:flexform_mdCol2

                lgCol1 = TEXT
                lgCol1.data = field:flexform_lgCol1

                lgCol2 = TEXT
                lgCol2.data = field:flexform_lgCol2

                col21class = TEXT
                col21class.data = field:flexform_col21class

                col22class = TEXT
                col22class.data = field:flexform_col22class

                equalizeColumns = TEXT
                equalizeColumns.data = field:flexform_equalizeColumns

                stretchColumns = TEXT
                stretchColumns.data = field:flexform_stretchColumns

                verticalAlignment = TEXT
                verticalAlignment.data = field:flexform_verticalAlignment

                indentContent = TEXT
                indentContent.data = field:flexform_indentContent

                backgroundCell = TEXT
                backgroundCell.data = field:flexform_backgroundCell
            }
        }

    }
    3cols < .2cols
    3cols {
        cObject {
            templateName = ThreeColumn
            variables {
                xsCol3 = TEXT
                xsCol3.data = field:flexform_xsCol3

                smCol3 = TEXT
                smCol3.data = field:flexform_smCol3

                mdCol3 = TEXT
                mdCol3.data = field:flexform_mdCol3

                lgCol3 = TEXT
                lgCol3.data = field:flexform_lgCol3

                col31class = TEXT
                col31class.data = field:flexform_col31class

                col32class = TEXT
                col32class.data = field:flexform_col32class

                col33class = TEXT
                col33class.data = field:flexform_col33class

                indentContent >

                backgroundCell >
            }
        }
    }
    4cols < .3cols
    4cols {
        cObject {
            templateName = FourColumn
            variables {
                xsCol4 = TEXT
                xsCol4.data = field:flexform_xsCol4

                smCol4 = TEXT
                smCol4.data = field:flexform_smCol4

                mdCol4 = TEXT
                mdCol4.data = field:flexform_mdCol4

                lgCol4 = TEXT
                lgCol4.data = field:flexform_lgCol4

                col41class = TEXT
                col41class.data = field:flexform_col41class

                col42class = TEXT
                col42class.data = field:flexform_col42class

                col43class = TEXT
                col43class.data = field:flexform_col43class

                col44class = TEXT
                col44class.data = field:flexform_col44class

                owlFallback = TEXT
                owlFallback.data = field:flexform_owlFallback
            }
        }
    }
    5cols < .4cols
    5cols {
        cObject {
            templateName = FiveColumn
            variables {
                xsCol5 = TEXT
                xsCol5.data = field:flexform_xsCol5

                smCol5 = TEXT
                smCol5.data = field:flexform_smCol5

                mdCol5 = TEXT
                mdCol5.data = field:flexform_mdCol5

                lgCol5 = TEXT
                lgCol5.data = field:flexform_lgCol5

                col51class = TEXT
                col51class.data = field:flexform_col51class

                col52class = TEXT
                col52class.data = field:flexform_col52class

                col53class = TEXT
                col53class.data = field:flexform_col53class

                col54class = TEXT
                col54class.data = field:flexform_col54class

                col55class = TEXT
                col55class.data = field:flexform_col55class
            }
        }
    }

    # simple row for content elements and usage with ext:bscolwrap
    simpleRow < lib.gridelements.defaultGridSetup
    simpleRow {
        # row wrap
        wrap = <div class="row">|</div>
        columns {
            # special 111, used as check for conditional fields
            111 < .default
            111.wrap = |
        }
    }

    # Accordion
    accordion  < lib.gridelements.defaultGridSetup
    accordion {

        # wrap each element
        columns {
            101 {
                /*
                renderObj = COA
                renderObj {
                    5 = TEXT
                    5.value = <a class="accordion-title">TEST</a>
                    10 =< tt_content
                    10.stdWrap.wrap = <div class="accordion-content" data-tab-content>|</div>
                    wrap = <li class="accordion-item" data-accordion-item>|</li>
                }
                */
                renderObj =< tt_content
            }
        }

        cObject =< lib.fluidGrid
        cObject {
            templateName = Accordion
            variables {
                expandFirst = TEXT
                expandFirst.data = field:flexform_expandFirst

            }
        }
    }

    # Tabs
    tabs  < lib.gridelements.defaultGridSetup
    tabs {

    # wrap each element
        columns {
            101 {
                renderObj =< tt_content
            }
        }

        cObject =< lib.fluidGrid
            cObject {
            templateName = Tabs
            variables {
                enableClose = TEXT
                enableClose.data = field:flexform_enableClose
                accordionOnMobile = TEXT
                accordionOnMobile.data = field:flexform_accordionOnMobile
            }
        }
    }

    # Owl slider
    slider  < lib.gridelements.defaultGridSetup
    slider {
        cObject =< lib.fluidGrid
        cObject {
            templateName = Slider
            variables {

                smartSpeed = TEXT
                smartSpeed.data = field:flexform_smartSpeed

                items = TEXT
                items.data = field:flexform_items

                itemsMedium = TEXT
                itemsMedium.data = field:flexform_itemsMedium

                slideBy = TEXT
                slideBy.data = field:flexform_slideBy

                slideByMedium = TEXT
                slideByMedium.data = field:flexform_slideByMedium

                loop = TEXT
                loop.data = field:flexform_loop

                center = TEXT
                center.data = field:flexform_center

                mouseDrag = TEXT
                mouseDrag.data = field:flexform_mouseDrag

                touchDrag = TEXT
                touchDrag.data = field:flexform_touchDrag

                pullDrag = TEXT
                pullDrag.data = field:flexform_pullDrag

                freeDrag = TEXT
                freeDrag.data = field:flexform_freeDrag

                startPosition = TEXT
                startPosition.data = field:flexform_startPosition

                nav = TEXT
                nav.data = field:flexform_nav

                rewind = TEXT
                rewind.data = field:flexform_rewind

                dots = TEXT
                dots.data = field:flexform_dots

                dotsEach = TEXT
                dotsEach.data = field:flexform_dotsEach

                dotsEachMedium = TEXT
                dotsEachMedium.data = field:flexform_dotsEachMedium

                autoplay = TEXT
                autoplay.data = field:flexform_autoplay

                autoplayTimeout = TEXT
                autoplayTimeout.data = field:flexform_autoplayTimeout

                autoplayHoverPause = TEXT
                autoplayHoverPause.data = field:flexform_autoplayHoverPause

                equalizeColumns = TEXT
                equalizeColumns.data = field:flexform_equalizeColumns
            }
        }
    }
    # Section
    section < lib.gridelements.defaultGridSetup
    section {
        cObject =< lib.fluidGrid
        cObject {
            templateName = Section
            variables {
                widthOfSection = TEXT
                widthOfSection.data = field:flexform_widthOfSection
            }

        }
    }
}


/**
* Assign foundation grid elements to gridelements extension
*/
tt_content.gridelements_pi1.20.10.setup {
    2cols < lib.foundationGrids.2cols
    3cols < lib.foundationGrids.3cols
    4cols < lib.foundationGrids.4cols
    5cols < lib.foundationGrids.5cols
    accordion < lib.foundationGrids.accordion
    tabs < lib.foundationGrids.tabs
    slider < lib.foundationGrids.slider
    xSimpleRow < lib.foundationGrids.simpleRow
    section < lib.foundationGrids.section
    simplerow < lib.foundationGrids.simplerow
}

tt_content.gridelements_view >
tt_content.gridelements_view < tt_content.gridelements_pi1