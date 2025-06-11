import type { Preset } from '@peacepieceuix-compatibility/themes/types';
import type { LaraBaseDesignTokens } from './base/index.d';

import accordion from '@peacepieceuix-compatibility/themes/lara/accordion';
import autocomplete from '@peacepieceuix-compatibility/themes/lara/autocomplete';
import avatar from '@peacepieceuix-compatibility/themes/lara/avatar';
import badge from '@peacepieceuix-compatibility/themes/lara/badge';
import base from '@peacepieceuix-compatibility/themes/lara/base';
import blockui from '@peacepieceuix-compatibility/themes/lara/blockui';
import breadcrumb from '@peacepieceuix-compatibility/themes/lara/breadcrumb';
import button from '@peacepieceuix-compatibility/themes/lara/button';
import card from '@peacepieceuix-compatibility/themes/lara/card';
import carousel from '@peacepieceuix-compatibility/themes/lara/carousel';
import cascadeselect from '@peacepieceuix-compatibility/themes/lara/cascadeselect';
import checkbox from '@peacepieceuix-compatibility/themes/lara/checkbox';
import chip from '@peacepieceuix-compatibility/themes/lara/chip';
import colorpicker from '@peacepieceuix-compatibility/themes/lara/colorpicker';
import confirmdialog from '@peacepieceuix-compatibility/themes/lara/confirmdialog';
import confirmpopup from '@peacepieceuix-compatibility/themes/lara/confirmpopup';
import contextmenu from '@peacepieceuix-compatibility/themes/lara/contextmenu';
import datatable from '@peacepieceuix-compatibility/themes/lara/datatable';
import dataview from '@peacepieceuix-compatibility/themes/lara/dataview';
import datepicker from '@peacepieceuix-compatibility/themes/lara/datepicker';
import dialog from '@peacepieceuix-compatibility/themes/lara/dialog';
import divider from '@peacepieceuix-compatibility/themes/lara/divider';
import dock from '@peacepieceuix-compatibility/themes/lara/dock';
import drawer from '@peacepieceuix-compatibility/themes/lara/drawer';
import editor from '@peacepieceuix-compatibility/themes/lara/editor';
import fieldset from '@peacepieceuix-compatibility/themes/lara/fieldset';
import fileupload from '@peacepieceuix-compatibility/themes/lara/fileupload';
import floatlabel from '@peacepieceuix-compatibility/themes/lara/floatlabel';
import galleria from '@peacepieceuix-compatibility/themes/lara/galleria';
import iconfield from '@peacepieceuix-compatibility/themes/lara/iconfield';
import iftalabel from '@peacepieceuix-compatibility/themes/lara/iftalabel';
import image from '@peacepieceuix-compatibility/themes/lara/image';
import imagecompare from '@peacepieceuix-compatibility/themes/lara/imagecompare';
import inlinemessage from '@peacepieceuix-compatibility/themes/lara/inlinemessage';
import inplace from '@peacepieceuix-compatibility/themes/lara/inplace';
import inputchips from '@peacepieceuix-compatibility/themes/lara/inputchips';
import inputgroup from '@peacepieceuix-compatibility/themes/lara/inputgroup';
import inputnumber from '@peacepieceuix-compatibility/themes/lara/inputnumber';
import inputotp from '@peacepieceuix-compatibility/themes/lara/inputotp';
import inputtext from '@peacepieceuix-compatibility/themes/lara/inputtext';
import knob from '@peacepieceuix-compatibility/themes/lara/knob';
import listbox from '@peacepieceuix-compatibility/themes/lara/listbox';
import megamenu from '@peacepieceuix-compatibility/themes/lara/megamenu';
import menu from '@peacepieceuix-compatibility/themes/lara/menu';
import menubar from '@peacepieceuix-compatibility/themes/lara/menubar';
import message from '@peacepieceuix-compatibility/themes/lara/message';
import metergroup from '@peacepieceuix-compatibility/themes/lara/metergroup';
import multiselect from '@peacepieceuix-compatibility/themes/lara/multiselect';
import orderlist from '@peacepieceuix-compatibility/themes/lara/orderlist';
import organizationchart from '@peacepieceuix-compatibility/themes/lara/organizationchart';
import overlaybadge from '@peacepieceuix-compatibility/themes/lara/overlaybadge';
import paginator from '@peacepieceuix-compatibility/themes/lara/paginator';
import panel from '@peacepieceuix-compatibility/themes/lara/panel';
import panelmenu from '@peacepieceuix-compatibility/themes/lara/panelmenu';
import password from '@peacepieceuix-compatibility/themes/lara/password';
import picklist from '@peacepieceuix-compatibility/themes/lara/picklist';
import popover from '@peacepieceuix-compatibility/themes/lara/popover';
import progressbar from '@peacepieceuix-compatibility/themes/lara/progressbar';
import progressspinner from '@peacepieceuix-compatibility/themes/lara/progressspinner';
import radiobutton from '@peacepieceuix-compatibility/themes/lara/radiobutton';
import rating from '@peacepieceuix-compatibility/themes/lara/rating';
import ripple from '@peacepieceuix-compatibility/themes/lara/ripple';
import scrollpanel from '@peacepieceuix-compatibility/themes/lara/scrollpanel';
import select from '@peacepieceuix-compatibility/themes/lara/select';
import selectbutton from '@peacepieceuix-compatibility/themes/lara/selectbutton';
import skeleton from '@peacepieceuix-compatibility/themes/lara/skeleton';
import slider from '@peacepieceuix-compatibility/themes/lara/slider';
import speeddial from '@peacepieceuix-compatibility/themes/lara/speeddial';
import splitbutton from '@peacepieceuix-compatibility/themes/lara/splitbutton';
import splitter from '@peacepieceuix-compatibility/themes/lara/splitter';
import stepper from '@peacepieceuix-compatibility/themes/lara/stepper';
import steps from '@peacepieceuix-compatibility/themes/lara/steps';
import tabmenu from '@peacepieceuix-compatibility/themes/lara/tabmenu';
import tabs from '@peacepieceuix-compatibility/themes/lara/tabs';
import tabview from '@peacepieceuix-compatibility/themes/lara/tabview';
import tag from '@peacepieceuix-compatibility/themes/lara/tag';
import terminal from '@peacepieceuix-compatibility/themes/lara/terminal';
import textarea from '@peacepieceuix-compatibility/themes/lara/textarea';
import tieredmenu from '@peacepieceuix-compatibility/themes/lara/tieredmenu';
import timeline from '@peacepieceuix-compatibility/themes/lara/timeline';
import toast from '@peacepieceuix-compatibility/themes/lara/toast';
import togglebutton from '@peacepieceuix-compatibility/themes/lara/togglebutton';
import toggleswitch from '@peacepieceuix-compatibility/themes/lara/toggleswitch';
import toolbar from '@peacepieceuix-compatibility/themes/lara/toolbar';
import tooltip from '@peacepieceuix-compatibility/themes/lara/tooltip';
import tree from '@peacepieceuix-compatibility/themes/lara/tree';
import treeselect from '@peacepieceuix-compatibility/themes/lara/treeselect';
import treetable from '@peacepieceuix-compatibility/themes/lara/treetable';
import virtualscroller from '@peacepieceuix-compatibility/themes/lara/virtualscroller';

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
} satisfies Preset<LaraBaseDesignTokens>;
