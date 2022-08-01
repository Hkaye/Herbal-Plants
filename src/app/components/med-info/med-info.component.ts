import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-med-info',
  templateUrl: './med-info.component.html',
  styleUrls: ['./med-info.component.scss'],
})
export class MedInfoComponent {

  medicinal = [
    {
      medicinalTitle: "Medicinal Plant",
      medicinalDes: "Herbal medicine and treatment with herbs are not new to humanity, and it has been in practice since thousands of years back and still going on. Both the developed and developing countries are now focusing on the treatment based on herbal medicine because of its several benefits. India is the country of herbs, and the Indian traditional treatment system was also based on herbs and medicinal plant that is known as Ayurveda. India is the well-known mine of well recorded herbal plants with their medicinal use. Herbal medicine is also called botanical medicines or phytomedicine. In a survey report of the World Health Organization, it was found that the 80% population of the world rely on traditional herbal medicine for primary health-care need. In fact in developed countries, alternative medicine is gaining popularity and it is increasing day by day because of their efficacy, safety, and lesser side effects. Herbal drugs possess a long history of its application and better patient tolerance on their application. This review article discusses the limitation and challenges faced for the production of herbal medicine."
    },
  ]

  constructor() {
    this.medicinal = this.medicinal.map(item => ({
      ...item,
      showMore: false
    }));
  }

  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

}
