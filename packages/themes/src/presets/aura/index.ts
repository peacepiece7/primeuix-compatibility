import type { Preset } from '@peacepieceuix-compatibility/themes/types';
import type { AuraBaseDesignTokens } from './base/index.d';

import accordion from '@peacepieceuix-compatibility/themes/aura/accordion';
import autocomplete from '@peacepieceuix-compatibility/themes/aura/autocomplete';
import avatar from '@peacepieceuix-compatibility/themes/aura/avatar';
import badge from '@peacepieceuix-compatibility/themes/aura/badge';
import base from '@peacepieceuix-compatibility/themes/aura/base';
import blockui from '@peacepieceuix-compatibility/themes/aura/blockui';
import breadcrumb from '@peacepieceuix-compatibility/themes/aura/breadcrumb';
import button from '@peacepieceuix-compatibility/themes/aura/button';
import card from '@peacepieceuix-compatibility/themes/aura/card';
import carousel from '@peacepieceuix-compatibility/themes/aura/carousel';
import cascadeselect from '@peacepieceuix-compatibility/themes/aura/cascadeselect';
import checkbox from '@peacepieceuix-compatibility/themes/aura/checkbox';
import chip from '@peacepieceuix-compatibility/themes/aura/chip';
import colorpicker from '@peacepieceuix-compatibility/themes/aura/colorpicker';
import confirmdialog from '@peacepieceuix-compatibility/themes/aura/confirmdialog';
import confirmpopup from '@peacepieceuix-compatibility/themes/aura/confirmpopup';
import contextmenu from '@peacepieceuix-compatibility/themes/aura/contextmenu';
import datatable from '@peacepieceuix-compatibility/themes/aura/datatable';
import dataview from '@peacepieceuix-compatibility/themes/aura/dataview';
import datepicker from '@peacepieceuix-compatibility/themes/aura/datepicker';
import dialog from '@peacepieceuix-compatibility/themes/aura/dialog';
import divider from '@peacepieceuix-compatibility/themes/aura/divider';
import dock from '@peacepieceuix-compatibility/themes/aura/dock';
import drawer from '@peacepieceuix-compatibility/themes/aura/drawer';
import editor from '@peacepieceuix-compatibility/themes/aura/editor';
import fieldset from '@peacepieceuix-compatibility/themes/aura/fieldset';
import fileupload from '@peacepieceuix-compatibility/themes/aura/fileupload';
import floatlabel from '@peacepieceuix-compatibility/themes/aura/floatlabel';
import galleria from '@peacepieceuix-compatibility/themes/aura/galleria';
import iconfield from '@peacepieceuix-compatibility/themes/aura/iconfield';
import iftalabel from '@peacepieceuix-compatibility/themes/aura/iftalabel';
import image from '@peacepieceuix-compatibility/themes/aura/image';
import imagecompare from '@peacepieceuix-compatibility/themes/aura/imagecompare';
import inlinemessage from '@peacepieceuix-compatibility/themes/aura/inlinemessage';
import inplace from '@peacepieceuix-compatibility/themes/aura/inplace';
import inputchips from '@peacepieceuix-compatibility/themes/aura/inputchips';
import inputgroup from '@peacepieceuix-compatibility/themes/aura/inputgroup';
import inputnumber from '@peacepieceuix-compatibility/themes/aura/inputnumber';
import inputotp from '@peacepieceuix-compatibility/themes/aura/inputotp';
import inputtext from '@peacepieceuix-compatibility/themes/aura/inputtext';
import knob from '@peacepieceuix-compatibility/themes/aura/knob';
import listbox from '@peacepieceuix-compatibility/themes/aura/listbox';
import megamenu from '@peacepieceuix-compatibility/themes/aura/megamenu';
import menu from '@peacepieceuix-compatibility/themes/aura/menu';
import menubar from '@peacepieceuix-compatibility/themes/aura/menubar';
import message from '@peacepieceuix-compatibility/themes/aura/message';
import metergroup from '@peacepieceuix-compatibility/themes/aura/metergroup';
import multiselect from '@peacepieceuix-compatibility/themes/aura/multiselect';
import orderlist from '@peacepieceuix-compatibility/themes/aura/orderlist';
import organizationchart from '@peacepieceuix-compatibility/themes/aura/organizationchart';
import overlaybadge from '@peacepieceuix-compatibility/themes/aura/overlaybadge';
import paginator from '@peacepieceuix-compatibility/themes/aura/paginator';
import panel from '@peacepieceuix-compatibility/themes/aura/panel';
import panelmenu from '@peacepieceuix-compatibility/themes/aura/panelmenu';
import password from '@peacepieceuix-compatibility/themes/aura/password';
import picklist from '@peacepieceuix-compatibility/themes/aura/picklist';
import popover from '@peacepieceuix-compatibility/themes/aura/popover';
import progressbar from '@peacepieceuix-compatibility/themes/aura/progressbar';
import progressspinner from '@peacepieceuix-compatibility/themes/aura/progressspinner';
import radiobutton from '@peacepieceuix-compatibility/themes/aura/radiobutton';
import rating from '@peacepieceuix-compatibility/themes/aura/rating';
import ripple from '@peacepieceuix-compatibility/themes/aura/ripple';
import scrollpanel from '@peacepieceuix-compatibility/themes/aura/scrollpanel';
import select from '@peacepieceuix-compatibility/themes/aura/select';
import selectbutton from '@peacepieceuix-compatibility/themes/aura/selectbutton';
import skeleton from '@peacepieceuix-compatibility/themes/aura/skeleton';
import slider from '@peacepieceuix-compatibility/themes/aura/slider';
import speeddial from '@peacepieceuix-compatibility/themes/aura/speeddial';
import splitbutton from '@peacepieceuix-compatibility/themes/aura/splitbutton';
import splitter from '@peacepieceuix-compatibility/themes/aura/splitter';
import stepper from '@peacepieceuix-compatibility/themes/aura/stepper';
import steps from '@peacepieceuix-compatibility/themes/aura/steps';
import tabmenu from '@peacepieceuix-compatibility/themes/aura/tabmenu';
import tabs from '@peacepieceuix-compatibility/themes/aura/tabs';
import tabview from '@peacepieceuix-compatibility/themes/aura/tabview';
import tag from '@peacepieceuix-compatibility/themes/aura/tag';
import terminal from '@peacepieceuix-compatibility/themes/aura/terminal';
import textarea from '@peacepieceuix-compatibility/themes/aura/textarea';
import tieredmenu from '@peacepieceuix-compatibility/themes/aura/tieredmenu';
import timeline from '@peacepieceuix-compatibility/themes/aura/timeline';
import toast from '@peacepieceuix-compatibility/themes/aura/toast';
import togglebutton from '@peacepieceuix-compatibility/themes/aura/togglebutton';
import toggleswitch from '@peacepieceuix-compatibility/themes/aura/toggleswitch';
import toolbar from '@peacepieceuix-compatibility/themes/aura/toolbar';
import tooltip from '@peacepieceuix-compatibility/themes/aura/tooltip';
import tree from '@peacepieceuix-compatibility/themes/aura/tree';
import treeselect from '@peacepieceuix-compatibility/themes/aura/treeselect';
import treetable from '@peacepieceuix-compatibility/themes/aura/treetable';
import virtualscroller from '@peacepieceuix-compatibility/themes/aura/virtualscroller';

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
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        datatable,
        dataview,
        datepicker,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        floatlabel,
        galleria,
        iconfield,
        iftalabel,
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
        paginator,
        panel,
        panelmenu,
        password,
        picklist,
        popover,
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
        splitbutton,
        splitter,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        tag,
        terminal,
        textarea,
        tieredmenu,
        timeline,
        toast,
        togglebutton,
        toggleswitch,
        toolbar,
        tooltip,
        tree,
        treeselect,
        treetable,
        virtualscroller
    }
} satisfies Preset<AuraBaseDesignTokens>;
