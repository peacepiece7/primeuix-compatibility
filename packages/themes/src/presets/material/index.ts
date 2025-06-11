import type { Preset } from '@peacepieceuix-compatibility/themes/types';
import type { MaterialBaseDesignTokens } from './base/index.d';

import accordion from '@peacepieceuix-compatibility/themes/material/accordion';
import autocomplete from '@peacepieceuix-compatibility/themes/material/autocomplete';
import avatar from '@peacepieceuix-compatibility/themes/material/avatar';
import badge from '@peacepieceuix-compatibility/themes/material/badge';
import base from '@peacepieceuix-compatibility/themes/material/base';
import blockui from '@peacepieceuix-compatibility/themes/material/blockui';
import breadcrumb from '@peacepieceuix-compatibility/themes/material/breadcrumb';
import button from '@peacepieceuix-compatibility/themes/material/button';
import card from '@peacepieceuix-compatibility/themes/material/card';
import carousel from '@peacepieceuix-compatibility/themes/material/carousel';
import cascadeselect from '@peacepieceuix-compatibility/themes/material/cascadeselect';
import checkbox from '@peacepieceuix-compatibility/themes/material/checkbox';
import chip from '@peacepieceuix-compatibility/themes/material/chip';
import colorpicker from '@peacepieceuix-compatibility/themes/material/colorpicker';
import confirmdialog from '@peacepieceuix-compatibility/themes/material/confirmdialog';
import confirmpopup from '@peacepieceuix-compatibility/themes/material/confirmpopup';
import contextmenu from '@peacepieceuix-compatibility/themes/material/contextmenu';
import datatable from '@peacepieceuix-compatibility/themes/material/datatable';
import dataview from '@peacepieceuix-compatibility/themes/material/dataview';
import datepicker from '@peacepieceuix-compatibility/themes/material/datepicker';
import dialog from '@peacepieceuix-compatibility/themes/material/dialog';
import divider from '@peacepieceuix-compatibility/themes/material/divider';
import dock from '@peacepieceuix-compatibility/themes/material/dock';
import drawer from '@peacepieceuix-compatibility/themes/material/drawer';
import editor from '@peacepieceuix-compatibility/themes/material/editor';
import fieldset from '@peacepieceuix-compatibility/themes/material/fieldset';
import fileupload from '@peacepieceuix-compatibility/themes/material/fileupload';
import floatlabel from '@peacepieceuix-compatibility/themes/material/floatlabel';
import galleria from '@peacepieceuix-compatibility/themes/material/galleria';
import iconfield from '@peacepieceuix-compatibility/themes/material/iconfield';
import iftalabel from '@peacepieceuix-compatibility/themes/material/iftalabel';
import image from '@peacepieceuix-compatibility/themes/material/image';
import imagecompare from '@peacepieceuix-compatibility/themes/material/imagecompare';
import inlinemessage from '@peacepieceuix-compatibility/themes/material/inlinemessage';
import inplace from '@peacepieceuix-compatibility/themes/material/inplace';
import inputchips from '@peacepieceuix-compatibility/themes/material/inputchips';
import inputgroup from '@peacepieceuix-compatibility/themes/material/inputgroup';
import inputnumber from '@peacepieceuix-compatibility/themes/material/inputnumber';
import inputotp from '@peacepieceuix-compatibility/themes/material/inputotp';
import inputtext from '@peacepieceuix-compatibility/themes/material/inputtext';
import knob from '@peacepieceuix-compatibility/themes/material/knob';
import listbox from '@peacepieceuix-compatibility/themes/material/listbox';
import megamenu from '@peacepieceuix-compatibility/themes/material/megamenu';
import menu from '@peacepieceuix-compatibility/themes/material/menu';
import menubar from '@peacepieceuix-compatibility/themes/material/menubar';
import message from '@peacepieceuix-compatibility/themes/material/message';
import metergroup from '@peacepieceuix-compatibility/themes/material/metergroup';
import multiselect from '@peacepieceuix-compatibility/themes/material/multiselect';
import orderlist from '@peacepieceuix-compatibility/themes/material/orderlist';
import organizationchart from '@peacepieceuix-compatibility/themes/material/organizationchart';
import overlaybadge from '@peacepieceuix-compatibility/themes/material/overlaybadge';
import paginator from '@peacepieceuix-compatibility/themes/material/paginator';
import panel from '@peacepieceuix-compatibility/themes/material/panel';
import panelmenu from '@peacepieceuix-compatibility/themes/material/panelmenu';
import password from '@peacepieceuix-compatibility/themes/material/password';
import picklist from '@peacepieceuix-compatibility/themes/material/picklist';
import popover from '@peacepieceuix-compatibility/themes/material/popover';
import progressbar from '@peacepieceuix-compatibility/themes/material/progressbar';
import progressspinner from '@peacepieceuix-compatibility/themes/material/progressspinner';
import radiobutton from '@peacepieceuix-compatibility/themes/material/radiobutton';
import rating from '@peacepieceuix-compatibility/themes/material/rating';
import ripple from '@peacepieceuix-compatibility/themes/material/ripple';
import scrollpanel from '@peacepieceuix-compatibility/themes/material/scrollpanel';
import select from '@peacepieceuix-compatibility/themes/material/select';
import selectbutton from '@peacepieceuix-compatibility/themes/material/selectbutton';
import skeleton from '@peacepieceuix-compatibility/themes/material/skeleton';
import slider from '@peacepieceuix-compatibility/themes/material/slider';
import speeddial from '@peacepieceuix-compatibility/themes/material/speeddial';
import splitbutton from '@peacepieceuix-compatibility/themes/material/splitbutton';
import splitter from '@peacepieceuix-compatibility/themes/material/splitter';
import stepper from '@peacepieceuix-compatibility/themes/material/stepper';
import steps from '@peacepieceuix-compatibility/themes/material/steps';
import tabmenu from '@peacepieceuix-compatibility/themes/material/tabmenu';
import tabs from '@peacepieceuix-compatibility/themes/material/tabs';
import tabview from '@peacepieceuix-compatibility/themes/material/tabview';
import tag from '@peacepieceuix-compatibility/themes/material/tag';
import terminal from '@peacepieceuix-compatibility/themes/material/terminal';
import textarea from '@peacepieceuix-compatibility/themes/material/textarea';
import tieredmenu from '@peacepieceuix-compatibility/themes/material/tieredmenu';
import timeline from '@peacepieceuix-compatibility/themes/material/timeline';
import toast from '@peacepieceuix-compatibility/themes/material/toast';
import togglebutton from '@peacepieceuix-compatibility/themes/material/togglebutton';
import toggleswitch from '@peacepieceuix-compatibility/themes/material/toggleswitch';
import toolbar from '@peacepieceuix-compatibility/themes/material/toolbar';
import tooltip from '@peacepieceuix-compatibility/themes/material/tooltip';
import tree from '@peacepieceuix-compatibility/themes/material/tree';
import treeselect from '@peacepieceuix-compatibility/themes/material/treeselect';
import treetable from '@peacepieceuix-compatibility/themes/material/treetable';
import virtualscroller from '@peacepieceuix-compatibility/themes/material/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<MaterialBaseDesignTokens>;
