<div class="panel-footer">
    <ul class="nav nav-pills">
        <li class="filters all-entries active"><a href="#/">All <span class="badge"><%= allEntriesCount %></span></a></li>
        <li class="filters all-active"><a href="#/active">Active <% if (activeEntriesCount > 0) { %> <span class="badge"><%= activeEntriesCount %></span><% } %></a></li>
        <li class="filters all-completed"><a href="#/completed">Completed <% if (completedEntriesCount > 0) { %> <span class="badge"><%= completedEntriesCount %></span><% } %></a></li>
        <li class="dropdown pull-right">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                Clear <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
                <li><a class="clear-completed-items" href="#">All Completed Items</a></li>
                <li><a class="clear-all-items" href="#">All Items</a></li>
            </ul>
        </li>
    </ul>
    <div class="clearfix"></div>
</div>
