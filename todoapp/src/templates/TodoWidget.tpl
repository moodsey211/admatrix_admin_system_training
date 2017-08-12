<div class="panel panel-default">
    <div class="panel-body">
        <input class="form-control input-lg" type="text" id="inputLarge" />
        <hr />
        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                    <th>
                        <div class="btn-group" data-toggle="buttons">
                            <label class="btn btn-default btn-xs btn-checkbox">
                                <input type="checkbox" autocomplete="off" />
                                <span class="glyphicon glyphicon-ok"></span>
                            </label>
                        </div>
                    </th>
                    <th>Tasks</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td width="5%">
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-default btn-xs btn-checkbox">
                            <input type="checkbox" autocomplete="off" />
                            <span class="glyphicon glyphicon-ok"></span>
                        </label>
                    </div>
                </td>
                <td>Task One</td>
                <td align="right">
                    <a href="#" class="btn btn-default btn-xs">
                        <span class="glyphicon glyphicon-remove"></span>
                    </a>
                </td>
            </tr>
            <tr class="cleared">
                <td width="5%">
                    <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-default btn-xs btn-checkbox active">
                            <input type="checkbox" autocomplete="off" />
                            <span class="glyphicon glyphicon-ok"></span>
                        </label>
                    </div>
                </td>
                <td>Task Two</td>
                <td align="right">
                    <a href="#" class="btn btn-default btn-xs">
                        <span class="glyphicon glyphicon-remove"></span>
                    </a>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
    <div class="panel-footer">
        <ul class="nav nav-pills">
            <li class="active"><a href="#">All <span class="badge">42</span></a></li>
            <li><a href="#">Active <span class="badge">42</span></a></li>
            <li><a href="#">Completed <span class="badge">42</span></a></li>
            <li class="dropdown pull-right">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    Clear <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#">All Completed Items</a></li>
                    <li><a href="#">All Items</a></li>
                </ul>
            </li>
        </ul>
        <div class="clearfix"></div>
    </div>
</div>
