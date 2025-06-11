import type { Preset } from '@peacepieceuix-compatibility/themes/types';
import type { NoraBaseDesignTokens } from './base/index.d';

import accordion from '@peacepieceuix-compatibility/themes/nora/accordion';
import autocomplete from '@peacepieceuix-compatibility/themes/nora/autocomplete';
import avatar from '@peacepieceuix-compatibility/themes/nora/avatar';
import badge from '@peacepieceuix-compatibility/themes/nora/badge';
import base from '@peacepieceuix-compatibility/themes/nora/base';
import blockui from '@peacepieceuix-compatibility/themes/nora/blockui';
import breadcrumb from '@peacepieceuix-compatibility/themes/nora/breadcrumb';
import button from '@peacepieceuix-compatibility/themes/nora/button';
import card from '@peacepieceuix-compatibility/themes/nora/card';
import carousel from '@peacepieceuix-compatibility/themes/nora/carousel';
import cascadeselect from '@peacepieceuix-compatibility/themes/nora/cascadeselect';
import checkbox from '@peacepieceuix-compatibility/themes/nora/checkbox';
import chip from '@peacepieceuix-compatibility/themes/nora/chip';
import colorpicker from '@peacepieceuix-compatibility/themes/nora/colorpicker';
import confirmdialog from '@peacepieceuix-compatibility/themes/nora/confirmdialog';
import confirmpopup from '@peacepieceuix-compatibility/themes/nora/confirmpopup';
import contextmenu from '@peacepieceuix-compatibility/themes/nora/contextmenu';
import datatable from '@peacepieceuix-compatibility/themes/nora/datatable';
import dataview from '@peacepieceuix-compatibility/themes/nora/dataview';
import datepicker from '@peacepieceuix-compatibility/themes/nora/datepicker';
import dialog from '@peacepieceuix-compatibility/themes/nora/dialog';
import divider from '@peacepieceuix-compatibility/themes/nora/divider';
import dock from '@peacepieceuix-compatibility/themes/nora/dock';
import drawer from '@peacepieceuix-compatibility/themes/nora/drawer';
import editor from '@peacepieceuix-compatibility/themes/nora/editor';
import fieldset from '@peacepieceuix-compatibility/themes/nora/fieldset';
import fileupload from '@peacepieceuix-compatibility/themes/nora/fileupload';
import floatlabel from '@peacepieceuix-compatibility/themes/nora/floatlabel';
import galleria from '@peacepieceuix-compatibility/themes/nora/galleria';
import iconfield from '@peacepieceuix-compatibility/themes/nora/iconfield';
import iftalabel from '@peacepieceuix-compatibility/themes/nora/iftalabel';
import image from '@peacepieceuix-compatibility/themes/nora/image';
import imagecompare from '@peacepieceuix-compatibility/themes/nora/imagecompare';
import inlinemessage from '@peacepieceuix-compatibility/themes/nora/inlinemessage';
import inplace from '@peacepieceuix-compatibility/themes/nora/inplace';
import inputchips from '@peacepieceuix-compatibility/themes/nora/inputchips';
import inputgroup from '@peacepieceuix-compatibility/themes/nora/inputgroup';
import inputnumber from '@peacepieceuix-compatibility/themes/nora/inputnumber';
import inputotp from '@peacepieceuix-compatibility/themes/nora/inputotp';
import inputtext from '@peacepieceuix-compatibility/themes/nora/inputtext';
import knob from '@peacepieceuix-compatibility/themes/nora/knob';
import listbox from '@peacepieceuix-compatibility/themes/nora/listbox';
import megamenu from '@peacepieceuix-compatibility/themes/nora/megamenu';
import menu from '@peacepieceuix-compatibility/themes/nora/menu';
import menubar from '@peacepieceuix-compatibility/themes/nora/menubar';
import message from '@peacepieceuix-compatibility/themes/nora/message';
import metergroup from '@peacepieceuix-compatibility/themes/nora/metergroup';
import multiselect from '@peacepieceuix-compatibility/themes/nora/multiselect';
import orderlist from '@peacepieceuix-compatibility/themes/nora/orderlist';
import organizationchart from '@peacepieceuix-compatibility/themes/nora/organizationchart';
import overlaybadge from '@peacepieceuix-compatibility/themes/nora/overlaybadge';
import paginator from '@peacepieceuix-compatibility/themes/nora/paginator';
import panel from '@peacepieceuix-compatibility/themes/nora/panel';
import panelmenu from '@peacepieceuix-compatibility/themes/nora/panelmenu';
import password from '@peacepieceuix-compatibility/themes/nora/password';
import picklist from '@peacepieceuix-compatibility/themes/nora/picklist';
import popover from '@peacepieceuix-compatibility/themes/nora/popover';
import progressbar from '@peacepieceuix-compatibility/themes/nora/progressbar';
import progressspinner from '@peacepieceuix-compatibility/themes/nora/progressspinner';
import radiobutton from '@peacepieceuix-compatibility/themes/nora/radiobutton';
import rating from '@peacepieceuix-compatibility/themes/nora/rating';
import ripple from '@peacepieceuix-compatibility/themes/nora/ripple';
import scrollpanel from '@peacepieceuix-compatibility/themes/nora/scrollpanel';
import select from '@peacepieceuix-compatibility/themes/nora/select';
import selectbutton from '@peacepieceuix-compatibility/themes/nora/selectbutton';
import skeleton from '@peacepieceuix-compatibility/themes/nora/skeleton';
import slider from '@peacepieceuix-compatibility/themes/nora/slider';
import speeddial from '@peacepieceuix-compatibility/themes/nora/speeddial';
import splitbutton from '@peacepieceuix-compatibility/themes/nora/splitbutton';
import splitter from '@peacepieceuix-compatibility/themes/nora/splitter';
import stepper from '@peacepieceuix-compatibility/themes/nora/stepper';
import steps from '@peacepieceuix-compatibility/themes/nora/steps';
import tabmenu from '@peacepieceuix-compatibility/themes/nora/tabmenu';
import tabs from '@peacepieceuix-compatibility/themes/nora/tabs';
import tabview from '@peacepieceuix-compatibility/themes/nora/tabview';
import tag from '@peacepieceuix-compatibility/themes/nora/tag';
import terminal from '@peacepieceuix-compatibility/themes/nora/terminal';
import textarea from '@peacepieceuix-compatibility/themes/nora/textarea';
import tieredmenu from '@peacepieceuix-compatibility/themes/nora/tieredmenu';
import timeline from '@peacepieceuix-compatibility/themes/nora/timeline';
import toast from '@peacepieceuix-compatibility/themes/nora/toast';
import togglebutton from '@peacepieceuix-compatibility/themes/nora/togglebutton';
import toggleswitch from '@peacepieceuix-compatibility/themes/nora/toggleswitch';
import toolbar from '@peacepieceuix-compatibility/themes/nora/toolbar';
import tooltip from '@peacepieceuix-compatibility/themes/nora/tooltip';
import tree from '@peacepieceuix-compatibility/themes/nora/tree';
import treeselect from '@peacepieceuix-compatibility/themes/nora/treeselect';
import treetable from '@peacepieceuix-compatibility/themes/nora/treetable';
import virtualscroller from '@peacepieceuix-compatibility/themes/nora/virtualscroller';

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
} satisfies Preset<NoraBaseDesignTokens>;
