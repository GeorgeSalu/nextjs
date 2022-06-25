import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, 'Qual bicho trasmite a doença de chagas?', [
    RespostaModel.errada('abaelha'),
    RespostaModel.errada('barata'),
    RespostaModel.errada('pulga'),
    RespostaModel.certa('barbeiro')
  ]),
  new QuestaoModel(306, 'Qual fruto é conhecido no norte e nordeste como jerimum ?', [
    RespostaModel.errada('caju'),
    RespostaModel.errada('coco'),
    RespostaModel.errada('chuchu'),
    RespostaModel.certa('abobora')
  ])
]

export default questoes