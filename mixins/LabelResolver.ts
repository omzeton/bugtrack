import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class LabelResolver extends Vue {
    label(labelString: string) {
        let color: string;
        switch (labelString) {
            case "Święta":
                color = "#DB504A";
                break;
            case "Urlop":
                color = "#E3B505";
                break;
            case "Muzyka":
                color = "#5299D3";
                break;
            case "Programowanie":
                color = "#32DE8A";
                break;
            default:
                color = "#77CBB9";
                break;
        }
        return `background: ${color}; box-shadow: 0px 0px 13px -1px ${color};`;
    }
}
