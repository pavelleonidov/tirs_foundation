# Menu override
# Note: Deprecated, use the Fluid-based MenuProcessor instead (see Libraries.ts in mq_base and the Override in mq_foundation/Resources/Private/Partials/Navigation

lib.menu {
    1 {
        wrap = <ul class="vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown">|</ul>
        expAll = 1
    }

    2 {
        wrap = <ul class="menu vertical">|</ul>
    }
}

lib.submenu {
    1 {
        wrap = <ul class="menu vertical">|</ul>
    }
}