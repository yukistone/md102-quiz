export interface QuizImage {
  url: string;
  analysis: string;
}

export interface QuizItem {
  id: number;
  question: string;
  choices: { letter: string; text: string }[];
  answer: string;
  images: QuizImage[];
}

export const quizData: QuizItem[] = [
  {
    "id": 1,
    "question": "Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune に登録された 100 台の iOS デバイスが含まれています。\nIntune を使用して、カスタムの基幹業務 (LOB) アプリをデバイスに展開する必要があります。\nアプリのパッケージファイルには、どの拡張子を選択する必要がありますか？",
    "choices": [
      { "letter": "A", "text": ".intunemac" },
      { "letter": "B", "text": ".ipa" },
      { "letter": "C", "text": ".apk" },
      { "letter": "D", "text": ".appx" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 2,
    "question": "Microsoft 365 サブスクリプションがあります。\nWindows 10 を実行し、モバイルデバイス管理 (MDM) に登録されている 10 台のコンピューターがあります。\nMicrosoft 365 Apps for enterprise スイートをすべてのコンピューターに展開する必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune 管理センターから、Windows 10 デバイスプロファイルを作成する。" },
      { "letter": "B", "text": "Azure AD から、アプリの登録を追加する。" },
      { "letter": "C", "text": "Azure AD から、エンタープライズ アプリケーションを追加する。" },
      { "letter": "D", "text": "Microsoft Intune 管理センターから、アプリを追加する。" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 3,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用しています。\nIntune に登録されている Device1 という名前の Windows 11 デバイスがあります。Device1 は 30 日間オフラインになっています。\nDevice1 を Intune から直ちに削除する必要があります。このソリューションは、デバイスが再びチェックインしたときに、Intune によってプロビジョニングされたアプリとデータが確実に削除されるようにする必要があります。ユーザーがインストールしたアプリ、個人データ、および OEM がインストールしたアプリは保持される必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "削除 (Delete) アクション" },
      { "letter": "B", "text": "リタイア (Retire) アクション" },
      { "letter": "C", "text": "フレッシュ スタート (Fresh Start) アクション" },
      { "letter": "D", "text": "Autopilot リセット アクション" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 4,
    "question": "Microsoft Intune に登録された 500 台の macOS デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Defender for Endpoint のウイルス対策ポリシーを macOS デバイスに適用できるようにする必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "macOS デバイスを Microsoft Purview コンプライアンス ポータルにオンボードする。" },
      { "letter": "B", "text": "Microsoft Intune 管理センターから、セキュリティ ベースラインを作成する。" },
      { "letter": "C", "text": "macOS デバイスに Defender for Endpoint をインストールする。" },
      { "letter": "D", "text": "Microsoft Intune 管理センターから、構成プロファイルを作成する。" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 5,
    "question": "ネットワークには、オンプレミスの Active Directory ドメインと Azure AD テナントが含まれています。\nDefault Domain Policy グループポリシーオブジェクト (GPO) には、次の表に示す設定が含まれています。\n既存の Default Domain Policy GPO 設定をデバイス構成プロファイルに移行する必要があります。\nどのデバイス構成プロファイルタイプのテンプレートを使用する必要がありますか？",
    "choices": [
      { "letter": "A", "text": "管理用テンプレート (Administrative Templates)" },
      { "letter": "B", "text": "エンドポイント保護 (Endpoint protection)" },
      { "letter": "C", "text": "デバイス制限 (Device restrictions)" },
      { "letter": "D", "text": "カスタム (Custom)" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image31.png", "analysis": "" }
    ]
  },
  {
    "id": 6,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあります。\n次の図に示すように、Policy1 という名前の新しい更新リング (Update rings) ポリシーを作成します。\n図に示されている情報に基づいて、各ステートメントを完成させる回答の選択肢をドロップダウンメニューから選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image25.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image26.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image549.png", "analysis": "" }
    ]
  },
  {
    "id": 7,
    "question": "150 台のハイブリッド Azure AD 参加済み Windows デバイスを含む Microsoft 365 E5 サブスクリプションがあります。すべてのデバイスは Microsoft Intune に登録されています。\n次の要件を満たすように、デバイスに配信の最適化 (Delivery Optimization) を構成する必要があります：\n・インターネットおよびローカルネットワーク上の他のコンピューターからのダウンロードを許可する。\n・使用される帯域幅の割合を 50 に制限する。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "構成プロファイル" },
      { "letter": "B", "text": "Windows Update for Business のグループポリシー設定" },
      { "letter": "C", "text": "Microsoft ピアツーピア ネットワーク サービス のグループポリシー設定" },
      { "letter": "D", "text": "Windows 10 以降の更新リング プロファイル" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 8,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\nApp1 と App2 という名前の 2 つのアプリをすべての Windows デバイスに展開する予定です。App1 は App2 の前にインストールされる必要があります。\nIntune 管理センターから、2 つの Windows アプリ (Win32) を作成して展開します。\nすべてのデバイスで App1 が App2 の前にインストールされるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "App1 の展開構成" },
      { "letter": "B", "text": "動的デバイスグループ" },
      { "letter": "C", "text": "検出ルール (Detection rule)" },
      { "letter": "D", "text": "App2 の展開構成" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 9,
    "question": "【ケーススタディ】\n概要\nADatum Corporation は、モントリオールに本社を置き、シアトルとニューヨークに支社を持つコンサルティング会社です。\nADatum は Microsoft 365 E5 サブスクリプションを持っています。\n\n環境\nネットワーク環境\nネットワークには、adatum.com という名前のオンプレミスの Active Directory ドメインが含まれています。ドメインには、次の表に示すサーバーが含まれています。\nADatum には、adatum.com という名前のハイブリッド Azure AD テナントがあります。\n\nユーザーとグループ\nadatum.com テナントには、次の表に示すユーザーが含まれています。\nすべてのユーザーには、Microsoft Office 365 ライセンスと Enterprise Mobility + Security E3 ライセンスが割り当てられています。\nGroup1 と GroupA では、Enterprise State Roaming が有効になっています。\nGroup1 と Group2 のメンバーシップの種類は「割り当て済み (Assigned)」です。\n\nデバイス\nADatum には、次の表に示す Windows 10 デバイスがあります。\nWindows 10 デバイスは Azure AD に参加しており、Microsoft Intune に登録されています。\nWindows 10 デバイスは、次の表に示すように構成されています。\nすべての Azure AD 参加済みデバイスには、C:\\AppA.exe という名前の実行可能ファイルと、D:\\Folder1 という名前のフォルダーがあります。\n\nMicrosoft Intune の構成\nMicrosoft Intune には、次の表に示すコンプライアンス ポリシーがあります。\n自動登録の設定は、次のように構成されています：\nMDM ユーザースコープ：GroupA\nMAM ユーザースコープ：GroupB\n\n以下の「コントロールされたフォルダーアクセス (Controlled folder access)」設定を持つエンドポイント保護構成プロファイルがあります：\n名前：Protection1\nフォルダー保護：有効にする\n保護されたフォルダーへのアクセス権を持つアプリのリスト：C:\\*\\AppA.exe\n保護する必要がある追加のフォルダーのリスト：D:\\Folder1\n割り当て：\n含まれるグループ：Group2, GroupB\n\nWindows Autopilot の構成\nADatum には、次の図に示すように構成された Windows Autopilot 展開プロファイルがあります。\n現在、Windows Autopilot を使用して展開されているデバイスはありません。\nActive Directory 用の Intune コネクタは Server1 にインストールされています。\n\n要件\n計画された変更\nADatum は、次の変更を実装することを計画しています：\n・Device6 という名前の新しい Windows 10 デバイスを購入し、デバイスを Intune に登録する。\n・新しいコンピューターは Windows Autopilot を使用して展開され、ハイブリッド Azure AD 参加済みになる。\n・以下の設定を持つネットワーク境界構成プロファイルを展開する：\n名前：Boundary1\nネットワーク境界：192.168.1.0/24\nスコープタグ：Tag1\n割り当て：含まれるグループ：Group1, Group2\n・以下の設定を持つ、Connection1 および Connection2 という名前の 2 つの VPN 構成プロファイルを展開する：\n名前：Connection1\n接続名：VPN1\n接続タイプ：L2TP\n割り当て：含まれるグループ：Group1, Group2, GroupA / 除外されるグループ：--\n名前：Connection2\n接続名：VPN2\n接続タイプ：IKEv2\n割り当て：含まれるグループ：GroupA / 除外されるグループ：GroupB\n\n技術的要件\nADatum は、次の技術的要件を満たす必要があります：\n・GroupA のユーザーは、新しいコンピューターを展開できる必要がある。\n・管理作業を最小限に抑える必要がある。\n\n【問題】\n計画された変更に基づいて Boundary1 を実装します。\nネットワーク境界が 192.168.1.0/24 に設定されるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device2 のみ" },
      { "letter": "B", "text": "Device3 のみ" },
      { "letter": "C", "text": "Device1, Device2, および Device5 のみ" },
      { "letter": "D", "text": "Device1, Device2, Device3, および Device4 のみ" }
    ],
    "answer": "D",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image1.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image2.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image3.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image4.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image5.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image6.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image7.png", "analysis": "" }
    ]
  },
  {
    "id": 10,
    "question": "次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\nどのデバイスにアプリ構成ポリシー (App configuration policies) を適用できますか？",
    "choices": [
      { "letter": "A", "text": "Device2 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device3 および Device4 のみ" },
      { "letter": "D", "text": "Device2, Device3, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image17.png", "analysis": "" }
    ]
  },
  {
    "id": 11,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\nデバイスの起動時間と再起動の頻度を確認する必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure Monitor" },
      { "letter": "B", "text": "Intune データウェアハウス" },
      { "letter": "C", "text": "Microsoft Defender for Endpoint" },
      { "letter": "D", "text": "エンドポイント分析 (Endpoint analytics)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 12,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft 365 サブスクリプションがあります。これには Microsoft Intune が含まれています。\n次の要件を満たす Microsoft Defender for Endpoint ソリューションを実装する必要があります：\n・条件付きアクセスを使用して Defender for Endpoint のコンプライアンスを強制する。\n・疑わしいスクリプトがデバイスで実行されるのを防ぐ。\n何を構成すべきですか？回答するには、適切な機能を正しい要件にドラッグします。各機能は、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image29.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image30.png", "analysis": "" }
    ]
  },
  {
    "id": 13,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft 365 サブスクリプションがあります。サブスクリプションには、Windows 11 を実行し、Microsoft Intune に登録されているコンピューターが含まれています。\n次の要件を満たすコンプライアンス ポリシーを作成する必要があります：\n・各デバイスで BitLocker ドライブ暗号化 (BitLocker) を要求する。\n・最小オペレーティングシステムバージョンを要求する。\n各要件に対して、コンプライアンス ポリシーのどの設定を構成する必要がありますか？回答するには、適切な設定を正しい要件にドラッグします。各設定は、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image44.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image45.png", "analysis": "" }
    ]
  },
  {
    "id": 14,
    "question": "【ケーススタディ】\n（※問題文の前提は問9のケーススタディと同じです）\n【問題】\nWindows Autopilot 展開サービスを使用して登録されるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device3 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image1.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image2.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image3.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image4.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image5.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image6.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image7.png", "analysis": "" }
    ]
  },
  {
    "id": 15,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune Suite を使用します。\n次の図に示す iOS アプリ保護ポリシーがあります。\n図に示されている情報に基づいて、各ステートメントを完成させる回答の選択肢をドロップダウンメニューから選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image12.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image13.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image14.png", "analysis": "" }
    ]
  },
  {
    "id": 16,
    "question": "【ホットスポット】\n【ケーススタディ】\n（※問題文の前提は問9のケーススタディと同じです）\n【問題】\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image1.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image2.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image3.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image4.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image5.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image6.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image7.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image8.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image9.png", "analysis": "" }
    ]
  },
{
    "id": 17,
    "question": "【ホットスポット】\n【ケーススタディ】\n（※問題文の前提は問9のケーススタディと同じです）\n\n【問題】\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image1.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image2.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image3.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image4.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image5.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image6.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image7.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image10.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image11.png", "analysis": "" }
    ]
  },
  {
    "id": 18,
    "question": "Windows 10 を実行し、Azure Log Analytics ワークスペースに接続しているコンピューターがあります。ワークスペースは、Windows イベントログから利用可能なすべてのイベントを収集するように構成されています。\nコンピューターには、次の表に示すログイベントがあります。\nLog Analytics ワークスペースによって収集されるイベントはどれですか？",
    "choices": [
      { "letter": "A", "text": "1 のみ" },
      { "letter": "B", "text": "2 および 3 のみ" },
      { "letter": "C", "text": "1 および 3 のみ" },
      { "letter": "D", "text": "1, 2, および 4 のみ" },
      { "letter": "E", "text": "1, 2, 3, および 4" }
    ],
    "answer": "E",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image28.png", "analysis": "" }
    ]
  },
  {
    "id": 19,
    "question": "ネットワークには Active Directory ドメインが含まれています。ドメインには Admin1 という名前のユーザーが含まれています。すべてのコンピューターは Windows 10 を実行しています。\nコンピューターで Windows PowerShell リモート管理を有効にします。\nAdmin1 がコンピューターへのリモート PowerShell 接続を確立できるようにする必要があります。このソリューションは、最小特権の原則を使用する必要があります。\nAdmin1 をどのグループに追加すべきですか？",
    "choices": [
      { "letter": "A", "text": "Access Control Assistance Operators" },
      { "letter": "B", "text": "Remote Desktop Users" },
      { "letter": "C", "text": "Power Users" },
      { "letter": "D", "text": "Remote Management Users" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 20,
    "question": "【ホットスポット】\n次の表に示すユーザーを含む Azure AD テナントがあります。\nまた、次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\nIntune から、カスタム通知 Notification1 を作成し、Group1 に送信します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image37.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image38.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image39.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image40.png", "analysis": "" }
    ]
  },
  {
    "id": 21,
    "question": "User1 という名前のユーザーを含み、Microsoft Intune Suite を使用する Microsoft 365 E5 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\nIntune に登録されている Device1 という名前のデバイスがあります。\nUser1 が Device1 に対して Intune 管理センターからリモートヘルプ (Remote Help) を使用できるようにする必要があります。\n実行すべき 3 つのアクションはどれですか？（それぞれの正解はソリューションの一部を示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "リモートヘルプ アプリを Device1 に展開する。" },
      { "letter": "B", "text": "User1 にヘルプデスク オペレーター (Help Desk Operator) ロールを割り当てる。" },
      { "letter": "C", "text": "User1 に Intune 管理者ロールを割り当てる。" },
      { "letter": "D", "text": "User1 に Microsoft 365 E5 ライセンスを割り当てる。" },
      { "letter": "E", "text": "Device1 でデバイスのオンボードを再実行する。" },
      { "letter": "F", "text": "User1 にリモートヘルプのアドオンライセンスを割り当てる。" }
    ],
    "answer": "ABF",
    "images": []
  },
  {
    "id": 22,
    "question": "ネットワークには contoso.com という名前の Active Directory ドメインが含まれています。ドメインには Windows 10 を実行する Computer1 という名前のコンピューターが含まれています。\n次の表に示すグループがあります。\nGroup4 に追加できるグループはどれですか？",
    "choices": [
      { "letter": "A", "text": "Group2 のみ" },
      { "letter": "B", "text": "Group1 および Group2 のみ" },
      { "letter": "C", "text": "Group2 および Group3 のみ" },
      { "letter": "D", "text": "Group1, Group2, および Group3" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image43.png", "analysis": "" }
    ]
  },
  {
    "id": 23,
    "question": "【ドラッグ＆ドロップ】\nWindows 10 を実行し、User1 と User2 という名前の 2 人のローカルユーザーを含むコンピューターがあります。\nユーザーが次のアクションを実行できるようにする必要があります：\n・User1 は日付と時刻を調整できること。\n・User2 は Windows ログを消去できること。\nこのソリューションは、最小特権の原則を使用する必要があります。\n各ユーザーをどのグループに追加すべきですか？回答するには、適切なグループを正しいユーザーにドラッグします。各グループは、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image55.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image550.png", "analysis": "" }
    ]
  },
  {
    "id": 24,
    "question": "【ホットスポット】\n次の表に示すユーザーを含む contoso.com という名前の Azure AD テナントがあります。\nWindows 10 を実行する Computer1 という名前のコンピューターがあります。Computer1 はワークグループ内にあり、次の表に示すローカルユーザーがいます。\nUserA は userA@contoso.com を使用して Computer1 を Azure AD に参加させます。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image60.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image61.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image62.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image551.png", "analysis": "" }
    ]
  },
  {
    "id": 25,
    "question": "Azure AD テナントと、Azure AD に参加し Microsoft Intune を使用して管理されている 100 台の Windows 10 デバイスがあります。\nデバイス上で Microsoft Defender ファイアウォール と Microsoft Defender ウイルス対策 を構成する必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n実行すべき 2 つのアクションはどれですか？（それぞれの正解はソリューションの一部を示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "Microsoft Defender ウイルス対策を構成するには、グループポリシーオブジェクト (GPO) を作成し、Windows Defender ウイルス対策の設定を構成する。" },
      { "letter": "B", "text": "Microsoft Defender ファイアウォールを構成するには、デバイス構成プロファイルを作成し、デバイス制限の設定を構成する。" },
      { "letter": "C", "text": "Microsoft Defender ウイルス対策を構成するには、デバイス構成プロファイルを作成し、エンドポイント保護の設定を構成する。" },
      { "letter": "D", "text": "Microsoft Defender ウイルス対策を構成するには、デバイス構成プロファイルを作成し、デバイス制限の設定を構成する。" },
      { "letter": "E", "text": "Microsoft Defender ファイアウォールを構成するには、デバイス構成プロファイルを作成し、エンドポイント保護の設定を構成する。" },
      { "letter": "F", "text": "Microsoft Defender ファイアウォールを構成するには、グループポリシーオブジェクト (GPO) を作成し、セキュリティが強化された Windows Defender ファイアウォールを構成する。" }
    ],
    "answer": "DE",
    "images": []
  },
  {
    "id": 26,
    "question": "Group1 という名前の Azure AD グループがあります。Group1 には、Device1 と Device2 という名前の 2 台の Windows 10 Enterprise デバイスが含まれています。\nProfile1 という名前のデバイス構成プロファイルを作成します。Profile1 を Group1 に割り当てます。\nProfile1 が Device1 にのみ適用されるようにする必要があります。\nProfile1 で何を修正すべきですか？",
    "choices": [
      { "letter": "A", "text": "割り当て (Assignments)" },
      { "letter": "B", "text": "設定 (Settings)" },
      { "letter": "C", "text": "スコープ（タグ） (Scope (Tags))" },
      { "letter": "D", "text": "適用規則 (Applicability Rules)" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 27,
    "question": "【ホットスポット】\nWindows 10 を実行する 100 台のコンピューターがあります。サーバーはありません。すべてのコンピューターは Azure AD に参加しています。\nコンピューターには異なる更新設定があり、一部のコンピューターは手動更新用に構成されています。\nWindows Update を構成する必要があります。このソリューションは、次の要件を満たす必要があります：\n・構成は中央の場所から管理されること。\n・インターネットトラフィックを最小限に抑えること。\n・コストを最小限に抑えること。\nWindows Update をどのように構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image41.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image42.png", "analysis": "" }
    ]
  },
  {
    "id": 28,
    "question": "Windows 10 を実行し、Azure Log Analytics ワークスペースに接続している 100 台のコンピューターがあります。\nLog Analytics を使用してコンピューターから収集できる 3 つのデータの種類はどれですか？（それぞれの正解は完全なソリューションを提示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "セキュリティ ログからの失敗イベント" },
      { "letter": "B", "text": "プロセスとその実行時間のリスト" },
      { "letter": "C", "text": "平均プロセッサ使用率" },
      { "letter": "D", "text": "システム ログからのエラー イベント" },
      { "letter": "E", "text": "テキストファイルとして保存されたサードパーティ アプリケーションのログ" }
    ],
    "answer": "CDE",
    "images": []
  },
  {
    "id": 29,
    "question": "【ホットスポット】\nMicrosoft Intune サブスクリプションがあります。\n次の図に示すように、Profile1 という名前の Windows Autopilot 展開プロファイルを作成しています。Profile1 は Windows 10 デバイスに展開されます。\n図に示されている情報に基づいて、各ステートメントを完成させる回答の選択肢をドロップダウンメニューから選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image64.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image65.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image66.png", "analysis": "" }
    ]
  },
  {
    "id": 30,
    "question": "会社ではすべてのユーザーに対して Windows 10 Enterprise を標準化しています。\n一部のユーザーは、小売店から自分のコンピューターを購入しています。それらのコンピューターは Windows 10 Pro を実行しています。\nコンピューターを Windows 10 Enterprise にアップグレードし、Azure AD に参加させ、いくつかの Microsoft Store アプリをインストールするソリューションを推奨する必要があります。このソリューションは、次の要件を満たす必要があります：\n・ユーザーによってインストールされたアプリケーションが保持されることを確認する。\n・ユーザーの介入を最小限に抑える。\n目的を達成するための最良の推奨事項は何ですか？複数の回答が目標を達成する可能性があります。最適な回答を選択してください。",
    "choices": [
      { "letter": "A", "text": "Windows Autopilot" },
      { "letter": "B", "text": "Microsoft 展開ツールキット (MDT)" },
      { "letter": "C", "text": "Windows 構成デザイナーのプロビジョニング パッケージ" },
      { "letter": "D", "text": "Windows 展開サービス (WDS)" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 31,
    "question": "64 ビット版の Windows 10 Enterprise を実行し、Microsoft Office 2019 がインストールされている Device1 という名前の Windows 11 対応デバイスがあります。\n次の表に示す Windows 11 Enterprise イメージがあります。\nDevice1 のインプレースアップグレードを実行するために使用できるイメージはどれですか？",
    "choices": [
      { "letter": "A", "text": "Image1 のみ" },
      { "letter": "B", "text": "Image2 のみ" },
      { "letter": "C", "text": "Image1 および Image2" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image108.png", "analysis": "" }
    ]
  },
  {
    "id": 32,
    "question": "【ホットスポット】\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nネットワークには、Azure AD Connect を使用して Azure AD テナントと同期するオンプレミスの Active Directory Domain Services (AD DS) ドメインが含まれています。\nデバイスの管理には Microsoft Intune と Configuration Manager を使用します。\n新しい Windows 11 デバイスの展開プランを推奨する必要があります。このソリューションは、次の要件を満たす必要があります：\n・マーケティング部門のデバイスは、AD DS ドメインのみに参加させる必要があります。IT 部門は、デバイスをマーケティング部門のユーザーに渡す前に、ビルド時に複雑なアプリケーションをデバイスにインストールします。\n・営業部門のデバイスは Azure AD に参加している必要があります。デバイスはメーカーから直接、営業部門のユーザーの自宅に発送されます。\n・管理作業は最小限に抑える必要があります。\n各部門にどの展開方法を推奨すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image109.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image110.png", "analysis": "" }
    ]
  },
  {
    "id": 33,
    "question": "【ホットスポット】\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\nAzure AD に参加している Windows デバイスは Intune に自動的に登録されます。\n次の表に示すデバイスがあります。\nデバイスを Windows 11 にアップグレードする準備をしています。すべてのデバイスは Windows 11 と互換性があります。\nすべてのユーザー設定とアプリケーションを保持したまま、デバイスに Windows 11 Pro を実装するための展開方法として、Windows Autopilot とインプレースアップグレードを評価する必要があります。\n各方法を使用してアップグレードできるデバイスはどれですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image103.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image104.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image553.png", "analysis": "" }
    ]
  },
  {
    "id": 34,
    "question": "【ドラッグ＆ドロップ】\nWindows 10 を実行する 100 台のコンピューターがあります。\nワイプ・アンド・ロード (wipe and load) インストールを実行して、コンピューターに Windows 11 を展開する予定です。\nユーザー設定とユーザーデータを保持する方法を推奨する必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image106.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image107.png", "analysis": "" }
    ]
  },
  {
    "id": 35,
    "question": "Microsoft Intune サブスクリプションがあります。\n次の表に示すように、Intune に登録されたデバイスがあります。\nApp1 という名前のアプリが各デバイスにインストールされています。\nApp1 を管理するために必要なアプリ構成ポリシーの最小数はいくつですか？",
    "choices": [
      { "letter": "A", "text": "1" },
      { "letter": "B", "text": "2" },
      { "letter": "C", "text": "3" },
      { "letter": "D", "text": "4" },
      { "letter": "E", "text": "5" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image22.png", "analysis": "" }
    ]
  },
{
    "id": 36,
    "question": "10 台の Android Enterprise デバイスを含む Microsoft 365 E5 サブスクリプションがあります。各デバイスには企業所有の仕事用プロファイルがあり、Microsoft Intune に登録されています。\nキオスクモードで単一のアプリを実行するようにデバイスを構成する必要があります。\nデバイス制限プロファイルで、どの構成設定を変更すべきですか？",
    "choices": [
      { "letter": "A", "text": "ユーザーとアカウント (Users and Accounts)" },
      { "letter": "B", "text": "全般 (General)" },
      { "letter": "C", "text": "システム セキュリティ (System security)" },
      { "letter": "D", "text": "デバイス エクスペリエンス (Device experience)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 37,
    "question": "Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、Windows 11 を実行し、Microsoft Intune に登録されている 25 台のコンピューターが含まれています。\nデバイスを Microsoft Defender for Endpoint にオンボードする必要があります。\nMicrosoft Intune 管理センターで何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "攻撃面の縮小 (ASR) ポリシー" },
      { "letter": "B", "text": "セキュリティ ベースライン" },
      { "letter": "C", "text": "エンドポイントでの検出と対応 (EDR) ポリシー" },
      { "letter": "D", "text": "アカウント保護ポリシー" },
      { "letter": "E", "text": "ウイルス対策ポリシー" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 38,
    "question": "Microsoft 365 E5 サブスクリプションと 25 台の Apple iPad があります。\nApple Configurator 登録方法を使用して、iPad を Microsoft Intune に登録する必要があります。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Apple MDM プッシュ証明書を構成する。" },
      { "letter": "B", "text": "ユーザーアカウントをデバイス登録マネージャー (DEM) として追加する。" },
      { "letter": "C", "text": "登録制限を変更する。" },
      { "letter": "D", "text": "各 iPad のデバイス識別子を含むファイルをアップロードする。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 39,
    "question": "会社ではデバイスの管理に Microsoft Intune を使用しています。\nAndroid 仕事用プロファイル (work profiles) を使用する Android デバイスのみが Intune に登録できるようにする必要があります。\nデバイスの登録制限で実行すべき 2 つの構成はどれですか？（それぞれの正解はソリューションの一部を示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "プラットフォーム設定から、Android デバイス管理者 (個人的に所有) を「ブロック」に設定する。" },
      { "letter": "B", "text": "プラットフォーム設定から、Android Enterprise (仕事用プロファイル) を「許可」に設定する。" },
      { "letter": "C", "text": "プラットフォーム設定から、Android デバイス管理者 (個人的に所有) を「許可」に設定する。" },
      { "letter": "D", "text": "プラットフォーム設定から、Android デバイス管理者を「ブロック」に設定する。" }
    ],
    "answer": "BD",
    "images": []
  },
  {
    "id": 40,
    "question": "【ホットスポット】\nMicrosoft Intune に登録された 100 台の Windows 10 デバイスがあります。\nデバイスがインターネットおよびローカルネットワーク上の他のコンピューターから Windows 更新プログラムを取得するように構成する必要があります。\nどの配信の最適化 (Delivery Optimization) 設定を構成し、どの種類の Intune オブジェクトを作成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image35.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image36.png", "analysis": "" }
    ]
  },
  {
    "id": 41,
    "question": "【ドラッグ＆ドロップ】\nMDT1 という名前の Microsoft Deployment Toolkit (MDT) サーバーがあります。\nコンピューターが LiteTouchPE_x64.iso イメージから起動して MDT1 に接続すると、次の図に示すようにウェルカム画面が表示されます。\nコンピューターが MDT1 に接続したときにウェルカム画面が表示されないようにする必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image91.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image92.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image552.png", "analysis": "" }
    ]
  },
  {
    "id": 42,
    "question": "Microsoft Intune と Intune データウェアハウスを使用します。\nデータウェアハウスに保存されているデータを含むデバイスインベントリレポートを作成する必要があります。\nレポートの作成には何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "ポータル サイト (Company Portal) アプリ" },
      { "letter": "B", "text": "エンドポイント分析 (Endpoint analytics)" },
      { "letter": "C", "text": "Azure ポータル アプリ" },
      { "letter": "D", "text": "Microsoft Power BI" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 43,
    "question": "【ホットスポット】\nMicrosoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。\n次の表に示す Windows 11 デバイスがあります。\n展示（Exhibit）に示すデバイスコンプライアンスポリシーを展開します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image46.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image47.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image48.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image49.png", "analysis": "" }
    ]
  },
  {
    "id": 44,
    "question": "【ドラッグ＆ドロップ】\n次の表に示すデバイスを含む Microsoft 365 サブスクリプションがあります。\n信頼されたファームウェアまたはオペレーティングシステムビルドを実行しているデバイスのみがネットワークリソースにアクセスできるようにする必要があります。\n各デバイスに対して、どのコンプライアンスポリシー設定を構成すべきですか？回答するには、適切な設定を正しいデバイスにドラッグします。各設定は、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image50.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image51.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image52.png", "analysis": "" }
    ]
  },
  {
    "id": 45,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft Intune に登録された 1,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。\nデバイスの BIOS バージョンを検証するために使用するコンプライアンスポリシーを作成し、その結果を監視する予定です。\n順番に実行すべき 4 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image53.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image54.png", "analysis": "" }
    ]
  },
  {
    "id": 46,
    "question": "【ホットスポット】\ncontoso.com という名前の Azure AD テナントがあります。\n次の表に示すデバイスがあります。\nどのデバイスを Azure AD に参加 (joined) させることができ、どのデバイスを contoso.com に登録 (registered) することができますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image57.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image58.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image59.png", "analysis": "" }
    ]
  },
  {
    "id": 47,
    "question": "Windows 10 を実行するコンピューターをリモート管理するために Windows Admin Center を使用します。\nWindows Admin Center に接続すると、次の図に示すメッセージが表示されます。\nWindows Admin Center に接続したときにメッセージが表示されないようにする必要があります。\n証明書をどの証明書ストアにインポートすべきですか？",
    "choices": [
      { "letter": "A", "text": "クライアント認証発行者 (Client Authentication Issuers)" },
      { "letter": "B", "text": "個人 (Personal)" },
      { "letter": "C", "text": "信頼されたルート証明機関 (Trusted Root Certification Authorities)" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image94.png", "analysis": "" }
    ]
  },
  {
    "id": 48,
    "question": "【ホットスポット】\n次の表に示すデバイスを含む contoso.com という名前の Azure AD テナントがあります。\nContoso.com には、次の表に示す Azure AD グループが含まれています。\nWindows Autopilot 展開プロファイルを追加します。プロファイルは次の図のように構成されています。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image95.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image96.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image97.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image98.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image99.png", "analysis": "" }
    ]
  },
  {
    "id": 49,
    "question": "MDT1 という名前の Microsoft Deployment Toolkit (MDT) 展開共有をホストする Server1 という名前のオンプレミスサーバーがあります。\nMDT1 がマルチキャスト展開をサポートするようにする必要があります。\nServer1 に何をインストールすべきですか？",
    "choices": [
      { "letter": "A", "text": "マルチパス I/O (MPIO)" },
      { "letter": "B", "text": "マルチポイントコネクタ (Multipoint Connector)" },
      { "letter": "C", "text": "Windows 展開サービス (WDS)" },
      { "letter": "D", "text": "Windows Server Update Services (WSUS)" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 50,
    "question": "【ホットスポット】\nServer1 という名前のサーバーと、Windows 10 を実行するコンピューターがあります。Server1 には Microsoft Deployment Toolkit (MDT) がインストールされています。\nMDT 展開ウィザードを使用して、Windows 10 コンピューターを Windows 11 にアップグレードする予定です。\nServer1 に展開共有を作成する必要があります。\nServer1 で何をすべきですか？また、MDT 展開共有に追加すべき最小限のコンポーネントは何ですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image89.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image90.png", "analysis": "" }
    ]
  },
{
    "id": 51,
    "question": "【ホットスポット】\nすべてのユーザーに Microsoft 365 アプリが展開されています。\n次の要件を満たすように Microsoft 365 アプリを構成する必要があります：\n・WebView2 ランタイムの自動インストールを有効にする。\n・ユーザーがフィードバックを送信できないようにする。\nMicrosoft 365 Apps 管理センターでどの 2 つの設定を構成すべきですか？回答するには、回答領域で適切な設定を選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image23.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image24.png", "analysis": "" }
    ]
  },
  {
    "id": 52,
    "question": "【ホットスポット】\n【ケーススタディ】\n概要\nContoso, Ltd. は、モントリオールに本社を置き、シアトルとニューヨークに 2 つの支社を持つコンサルティング会社です。\nContoso には、次の表に示すユーザーとコンピューターがあります。\n同社には、IT、人事 (HR)、法務 (LEG)、マーケティング (MKG)、および財務 (FIN) 部門があります。\nContoso は最近、Microsoft 365 サブスクリプションを購入しました。\n同社はフェニックスに新しい支社を開設します。フェニックスオフィスのユーザーのほとんどは自宅から仕事をします。\n\n既存の環境\nネットワークには、Azure AD に同期されている contoso.com という名前の Active Directory ドメインが含まれています。\nすべてのメンバーサーバーは Windows Server 2016 を実行しています。すべてのラップトップおよびデスクトップコンピューターは Windows 10 Enterprise を実行しています。\nコンピューターは Microsoft Configuration Manager を使用して管理されています。モバイルデバイスは Microsoft Intune を使用して管理されています。\nコンピューターの命名規則は、部門の頭字語にハイフン、その後に 4 つの数字が続く形式です（例：FIN-6785）。すべてのコンピューターはオンプレミスの Active Directory ドメインに参加しています。\n各部門には、Computers という名前の子 OU を含む組織単位 (OU) があります。各コンピューターアカウントは、それぞれの部門の Computers OU にあります。\n\nIntune の構成\nドメインには、次の表に示すユーザーが含まれています。\nUser2 は、Intune のデバイス登録マネージャー (DEM) です。\nIntune に登録されているデバイスは、次の表に示されています。\nIntune のデバイスコンプライアンスポリシーは、次の表に示すように構成されています。\nデバイスコンプライアンスポリシーには、次の表に示す割り当てがあります。\nIntune のデバイス制限は、次の表に示すように構成されています。\n\n要件\n計画された変更\nContoso は、次の変更を実装することを計画しています：\n・フェニックスオフィスのユーザーに新しいコンピューターを提供する。新しいコンピューターには Windows 10 Pro がプレインストールされており、すでに購入済みである。\n・コンピューターに共同管理を実装する。\n\n技術的要件\nContoso は、次の技術的要件を満たす必要があります：\n・Group4 という名前のグループのユーザーが、Intune に登録されているデバイスからのみ Microsoft Exchange Online にアクセスできるようにする。\n・Windows Autopilot を使用して、フェニックスオフィスのユーザーのコンピューターに Windows 10 Enterprise を展開する。\n・人事部門の新しいコンピューター用のプロビジョニング パッケージを作成する。\n・iOS デバイスが診断および使用状況のテレメトリデータを送信するのをブロックする。\n・可能な限り最小特権の原則を使用する。\n・MKG 部門のユーザーが App1 を使用できるようにする。\n・IT 部門の共同管理をパイロット導入する。\n\n【問題】\nUser1 と User2 が Intune に登録できるデバイスの最大数はいくつですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image111.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image112.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image113.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image114.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image115.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image116.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image119.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image554.png", "analysis": "" }
    ]
  },
  {
    "id": 53,
    "question": "【ケーススタディ】\n（※問題文の前提は問52のケーススタディと同じです）\n\n【問題】\niOS デバイスの技術的要件を満たす必要があります。\nIntune でどのオブジェクトを作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "展開プロファイル (deployment profile)" },
      { "letter": "B", "text": "アプリ保護ポリシー (app protection policy)" },
      { "letter": "C", "text": "デバイス構成プロファイル (device configuration profile)" },
      { "letter": "D", "text": "コンプライアンス ポリシー (compliance policy)" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image111.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image112.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image113.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image114.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image115.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image116.png", "analysis": "" }
    ]
  },
  {
    "id": 54,
    "question": "【ホットスポット】\nMicrosoft Intune を使用する Microsoft 365 サブスクリプションがあり、次の表に示すユーザーが含まれています。\nGroup2 は登録ステータス ページ (Enrollment Status Page) に割り当てられています。\n次の表に示すデバイスがあります。\nマーケティング部門のデバイスのハードウェア ID をキャプチャしてアップロードします。\nWindows Autopilot を構成します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image134.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image135.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image136.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image137.png", "analysis": "" }
    ]
  },
  {
    "id": 55,
    "question": "500 台の Android Enterprise デバイスを含む Microsoft 365 サブスクリプションがあります。\nすべてのデバイスは Microsoft Intune に登録されています。\nデバイス上の Chrome ブラウザーにブックマークを配信する必要があります。\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "コンプライアンス ポリシー" },
      { "letter": "B", "text": "構成プロファイル" },
      { "letter": "C", "text": "アプリ保護ポリシー" },
      { "letter": "D", "text": "アプリ構成ポリシー" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 56,
    "question": "次の表に示すデバイスを含む Azure AD テナントがあります。\nサブスクリプションのライセンス認証 (Subscription Activation) を使用してライセンス認証できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image123.png", "analysis": "" }
    ]
  },
  {
    "id": 57,
    "question": "Windows 10 Pro を実行する 25 台のコンピューターがあります。\nMicrosoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。\nインプレースアップグレードを使用して、コンピューターを Windows 11 Enterprise にアップグレードする必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Deployment Toolkit (MDT) と Windows 11 Enterprise のデフォルトイメージ" },
      { "letter": "B", "text": "Microsoft Configuration Manager と Windows 11 Enterprise のカスタムイメージ" },
      { "letter": "C", "text": "Windows Autopilot" },
      { "letter": "D", "text": "サブスクリプションのライセンス認証 (Subscription Activation)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 58,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\n管理されている Windows 11 デバイスの起動パフォーマンスがキャプチャされ、Intune 管理センターで確認できるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure Monitor エージェント" },
      { "letter": "B", "text": "デバイス コンプライアンス ポリシー" },
      { "letter": "C", "text": "条件付きアクセス ポリシー" },
      { "letter": "D", "text": "Intune データ収集ポリシー" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 59,
    "question": "次の表に示すリソースを含む Microsoft Intune 展開があります。\nSet1 という名前のポリシー セットを作成し、Comply1 を Set1 に追加します。\nSet1 に追加できる追加のリソースはどれですか？",
    "choices": [
      { "letter": "A", "text": "Conf1 のみ" },
      { "letter": "B", "text": "Comply2 のみ" },
      { "letter": "C", "text": "Comply2 および Conf1 のみ" },
      { "letter": "D", "text": "CA1, Conf1, および Office1 のみ" },
      { "letter": "E", "text": "Comply2, CA1, Conf1, および Office1" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image151.png", "analysis": "" }
    ]
  },
  {
    "id": 60,
    "question": "Microsoft Defender for Endpoint を使用して、Windows 10 を実行するコンピューターを保護します。\nMicrosoft Defender for Endpoint の構成と Microsoft が推奨する構成ベースラインとの違いを評価する必要があります。\nどのツールを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Defender for Endpoint Power BI アプリ" },
      { "letter": "B", "text": "Microsoft セキュア スコア (Secure Score)" },
      { "letter": "C", "text": "エンドポイント分析 (Endpoint Analytics)" },
      { "letter": "D", "text": "Microsoft 365 Defender ポータル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 61,
    "question": "User1 という名前のユーザーが含まれ、Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nWindows 11 を実行するデバイスの管理に Microsoft Intune を使用します。\nUser1 は、マーケティング部門の 75 台のデバイスに対してリモートサポートを提供します。\n各マーケティング部門のデバイスの Remote Desktop Users グループに User1 を追加する必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "デバイス コンプライアンス ポリシー" },
      { "letter": "C", "text": "アカウント保護ポリシー (Account protection policy)" },
      { "letter": "D", "text": "デバイス構成プロファイル" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 62,
    "question": "Microsoft Intune を使用する Microsoft 365 テナントがあります。\nポータル サイト (Company Portal) アプリを使用して、登録されたデバイスに公開されたアプリにアクセスし、インストールします。\nMicrosoft Intune 管理センターから、Microsoft Store アプリを追加します。\nポータル サイトに表示されるアプリ情報の種類はどれですか？2つ選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [
      { "letter": "A", "text": "プライバシー URL (Privacy URL)" },
      { "letter": "B", "text": "情報 URL (Information URL)" },
      { "letter": "C", "text": "開発者 (Developer)" },
      { "letter": "D", "text": "所有者 (Owner)" }
    ],
    "answer": "AB",
    "images": []
  },
  {
    "id": 63,
    "question": "Microsoft Intune に登録された 100 台のデバイスを含む Microsoft 365 サブスクリプションがあります。\nデバイスの起動プロセスと再起動の頻度を確認する必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "エンドポイント分析 (Endpoint analytics)" },
      { "letter": "B", "text": "デバイス管理 (Device Management)" },
      { "letter": "C", "text": "Azure Monitor" },
      { "letter": "D", "text": "Intune データウェアハウス" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 64,
    "question": "Microsoft 365 テナントがあります。\nMicrosoft Intune に登録されたデバイスがあります。\nPolicy1 という名前の条件付きアクセス ポリシーを Group1 という名前のグループに割り当てます。Policy1 は、非準拠としてマークされたデバイスが Microsoft OneDrive for Business にアクセスするのを制限します。\nOneDrive for Business にアクセスしようとする非準拠デバイスを特定する必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Entra 管理センターから、条件付きアクセスの分析情報とレポートのブックを確認する。" },
      { "letter": "B", "text": "Microsoft Intune 管理センターから、デバイスのコンプライアンス レポートを確認する。" },
      { "letter": "C", "text": "Microsoft Intune 管理センターから、非準拠デバイスのレポートを確認する。" },
      { "letter": "D", "text": "Microsoft Intune 管理センターから、設定のコンプライアンス レポートを確認する。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 65,
    "question": "ネットワークには Active Directory ドメインが含まれています。ドメインには Windows 10 を実行する 2,000 台のコンピューターが含まれています。\nハイブリッド Azure AD と Microsoft Intune を実装します。\n既存のすべてのコンピューターを自動的に Azure AD に登録し、Intune にコンピューターを登録する必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "自動検出 (Autodiscover) アドレスレコード" },
      { "letter": "B", "text": "グループ ポリシー オブジェクト (GPO)" },
      { "letter": "C", "text": "自動検出サービス接続ポイント (SCP)" },
      { "letter": "D", "text": "Windows Autopilot 展開プロファイル" }
    ],
    "answer": "B",
    "images": []
  },
{
    "id": 66,
    "question": "【ホットスポット】\nネットワークには、Azure AD テナントと同期するオンプレミスの Active Directory ドメイン サービス (AD DS) ドメインが含まれています。テナントには、次の表に示すユーザーが含まれています。\nGroup1 と User2 に Windows 10/11 Enterprise E5 ライセンスを割り当てます。\n次の表に示すデバイスを展開します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image124.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image125.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image126.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image555.png", "analysis": "" }
    ]
  },
  {
    "id": 67,
    "question": "次の表に示す仮想マシンを含む Hyper-V ホストがあります。\nどの仮想マシンに Windows 11 をインストールできますか？",
    "choices": [
      { "letter": "A", "text": "VM1 のみ" },
      { "letter": "B", "text": "VM3 のみ" },
      { "letter": "C", "text": "VM1 および VM2 のみ" },
      { "letter": "D", "text": "VM2 および VM3 のみ" },
      { "letter": "E", "text": "VM1, VM2, および VM3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image133.png", "analysis": "" }
    ]
  },
  {
    "id": 68,
    "question": "Microsoft Intune に登録された 1,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。\nIntune を使用して、複数のインストールファイルを含む App1 という名前のアプリケーションを展開する予定です。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Win32 コンテンツ準備ツール (Microsoft Win32 Content Prep Tool) を使用して、App1 のコンテンツを準備する。" },
      { "letter": "B", "text": "Android アプリケーションパッケージ (APK) を作成する。" },
      { "letter": "C", "text": "App1 のコンテンツを Intune にアップロードする。" },
      { "letter": "D", "text": "Microsoft 展開ツールキット (MDT) をインストールする。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 69,
    "question": "Microsoft 365 サブスクリプションがあります。すべてのデバイスは Windows 10 を実行しています。\nユーザーがデバイスを Windows Insider Program に登録できないようにする必要があります。\nMicrosoft Intune 管理センターから実行すべき 2 つの構成はどれですか？（それぞれの正解は完全なソリューションを提示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "デバイス制限のデバイス構成プロファイル" },
      { "letter": "B", "text": "アプリ構成ポリシー" },
      { "letter": "C", "text": "Windows 10 以降のセキュリティ ベースライン" },
      { "letter": "D", "text": "カスタム デバイス構成プロファイル" },
      { "letter": "E", "text": "Windows 10 以降の更新リング" }
    ],
    "answer": "AE",
    "images": []
  },
  {
    "id": 70,
    "question": "【ホットスポット】\ncontoso.com という名前の Azure AD テナントがあり、User1 という名前のユーザーが含まれています。User1 のユーザー プリンシパル名 (UPN) は user1@contoso.com です。\nClient1 という名前の Windows 11 デバイスを contoso.com に参加させます。\nUser1 を Client1 のローカル Administrators グループに追加する必要があります。\nコマンドをどのように完成させるべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image167.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image557.png", "analysis": "" }
    ]
  },
  {
    "id": 71,
    "question": "会社では Microsoft Intune を使用しています。\n500 台以上の Android および iOS デバイスが Intune テナントに登録されています。\n新しい Intune ポリシーを展開する予定です。デバイスにインストールされている Android または iOS のバージョンに応じて、異なるポリシーが適用されます。\nデバイスの Android または iOS のバージョンに基づいて、ポリシーがターゲットに適用されるようにする必要があります。\n最初に何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure AD での動的メンバーシップルールを持つグループ" },
      { "letter": "B", "text": "Intune でのデバイス カテゴリ" },
      { "letter": "C", "text": "Intune での企業デバイス識別子" },
      { "letter": "D", "text": "Azure AD でのデバイス設定" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 72,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft Intune に登録された 500 台の Windows 10 デバイスがあります。\nMicrosoft Intune の Exploit protection (エクスプロイト保護) を使用して、デバイスで次のシステム設定を有効にする予定です：\n・データ実行防止 (DEP)\n・イメージのランダム化を強制する (必須の ASLR)\nテンプレートファイルの作成に使用される Windows 10 デバイスを構成する必要があります。\nテンプレートファイルを作成する前に、Windows セキュリティアプリでデバイスのどの保護領域を構成すべきですか？回答するには、適切な保護領域を正しい設定にドラッグします。各保護領域は、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image154.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image155.png", "analysis": "" }
    ]
  },
  {
    "id": 73,
    "question": "【ホットスポット】\n次のデバイス コンプライアンス ポリシー設定を持つ Microsoft Intune サブスクリプションがあります：\n・コンプライアンス ポリシーが割り当てられていないデバイスを次のようにマークする：準拠 (Compliant)\n・コンプライアンス ステータスの有効期間 (日数)：14\n\n1月1日に、次の表に示すように Windows 10 デバイスを Intune に登録します。\n1月4日に、次の 2 つのデバイス コンプライアンス ポリシーを作成します：\n・名前：Policy1 / プラットフォーム：Windows 10 以降 / BitLocker を要求する：必須 / デバイスを非準拠としてマークする：非準拠になってから 5 日後 / スコープ (タグ)：Tag1\n・名前：Policy2 / プラットフォーム：Windows 10 以降 / ファイアウォール：必須 / デバイスを非準拠としてマークする：直ちに / スコープ (タグ)：Tag2\n\n1月5日に、Policy1 と Policy2 を Group1 に割り当てます。\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image158.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image159.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image160.png", "analysis": "" }
    ]
  },
  {
    "id": 74,
    "question": "【ホットスポット】\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の表に示す Windows 11 を実行するコンピューターがあります。\n次の表に示すグループがあります。\n次の表に示すコンプライアンス ポリシーを作成して割り当てます。\n翌日、コンピューターのコンプライアンス ステータスを確認します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image161.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image162.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image163.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image164.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image556.png", "analysis": "" }
    ]
  },
  {
    "id": 75,
    "question": "次の表に示すオブジェクトを含む Microsoft 365 テナントがあります。\nCompliance1 という名前のコンプライアンス ポリシーを作成しています。\n非準拠通知の追加の受信者として Compliance1 で指定できるオブジェクトはどれですか？",
    "choices": [
      { "letter": "A", "text": "Group3 および Group4 のみ" },
      { "letter": "B", "text": "Group3, Group4, および Admin1 のみ" },
      { "letter": "C", "text": "Group1, Group2, および Group3 のみ" },
      { "letter": "D", "text": "Group1, Group2, Group3, および Group4 のみ" },
      { "letter": "E", "text": "Group1, Group2, Group3, Group4, および Admin1" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image166.png", "analysis": "" }
    ]
  },
  {
    "id": 76,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\n次の表に示すデバイスがあります。\nサブスクリプションのライセンス認証 (Subscription Activation) を使用して Windows 11 Enterprise に変更できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device3 のみ" },
      { "letter": "B", "text": "Device2 および Device3 のみ" },
      { "letter": "C", "text": "Device1 および Device2 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image180.png", "analysis": "" }
    ]
  },
  {
    "id": 77,
    "question": "User1 という名前のユーザーを含む Microsoft 365 サブスクリプションがあります。User1 には Windows 10/11 Enterprise E3 ライセンスが割り当てられています。\nデバイスの管理に Microsoft Intune Suite を使用します。\nUser1 は次のデバイスのライセンス認証を行っています：\n・Device1: Windows 11 Enterprise\n・Device2: Windows 10 Enterprise\n・Device3: Windows 11 Enterprise\nUser1 はあと何台のデバイスのライセンス認証を行えますか？",
    "choices": [
      { "letter": "A", "text": "2" },
      { "letter": "B", "text": "3" },
      { "letter": "C", "text": "7" },
      { "letter": "D", "text": "8" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 78,
    "question": "会社では Azure AD、Microsoft 365、Microsoft Intune、および Azure Information Protection を実装しています。\n会社のセキュリティ ポリシーには次のことが記載されています：\n・個人用デバイスを Intune に登録する必要はない。\n・ユーザーは会社の電子メールデータにアクセスする前に PIN を使用して認証する必要がある。\n・ユーザーは個人用の iOS および Android デバイスを使用して、会社のクラウドサービスにアクセスできる。\n・ユーザーが会社の電子メールデータを Microsoft OneDrive for Business 以外のクラウドストレージサービスにコピーできないようにする必要がある。\nセキュリティ ポリシーを適用するソリューションを構成する必要があります。\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune 管理センターからのデバイス構成プロファイル" },
      { "letter": "B", "text": "Microsoft Purview コンプライアンス ポータルからのデータ損失防止 (DLP) ポリシー" },
      { "letter": "C", "text": "Microsoft Purview コンプライアンス ポータルからのインサイダー リスク管理ポリシー" },
      { "letter": "D", "text": "Microsoft Intune 管理センターからのアプリ保護ポリシー" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 79,
    "question": "Microsoft 365 E5 サブスクリプションと、Windows 10 を実行する 100 台のコンピューターがあります。\nMicrosoft 展開ツール (ODT) を使用して、Microsoft Office Professional Plus 2019 をコンピューターに展開する必要があります。\nODT 用のカスタマイズファイルを作成するには何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft 365 管理センター" },
      { "letter": "B", "text": "Microsoft Intune 管理センター" },
      { "letter": "C", "text": "Microsoft Purview コンプライアンス ポータル" },
      { "letter": "D", "text": "Microsoft 365 Apps 管理センター" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 80,
    "question": "Microsoft Intune に登録された 100 台の Windows 10 デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nエンドポイント分析 (Endpoint analytics) を使用する予定です。\nベースライン メトリックを作成する必要があります。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "ベースライン回帰のしきい値を変更する。" },
      { "letter": "B", "text": "10 台のデバイスをエンドポイント分析にオンボードする。" },
      { "letter": "C", "text": "Log Analytics ワークスペースを作成する。" },
      { "letter": "D", "text": "Azure Monitor ブックを作成する。" }
    ],
    "answer": "B",
    "images": []
  },
{
    "id": 81,
    "question": "Azure ADのハイブリッド展開があり、50 台の Windows 10 デバイスが含まれています。すべてのデバイスは Microsoft Intune に登録されています。\nグループポリシー設定が、Microsoft Intune ポリシーで構成された設定を上書きしていることがわかりました。\nMicrosoft Intune で構成された設定がグループポリシー設定を確実に上書きするようにする必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "グループ ポリシー管理エディターから、デフォルト ドメイン ポリシーの [コンピューターの構成] 設定を構成する。" },
      { "letter": "B", "text": "Microsoft Intune 管理センターから、カスタム デバイス プロファイルを作成する。" },
      { "letter": "C", "text": "Microsoft Intune 管理センターから、管理用テンプレート (Administrative Templates) デバイス プロファイルを作成する。" },
      { "letter": "D", "text": "グループ ポリシー管理エディターから、デフォルト ドメイン ポリシーの [ユーザーの構成] 設定を構成する。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 82,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nMicrosoft Intune を使用して Windows 11 デバイスを管理します。\nユーザーに数値の照合 (number matching) を要求するパスワードレス認証を実装する必要があります。\nどの認証方法を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Authenticator" },
      { "letter": "B", "text": "音声通話 (voice calls)" },
      { "letter": "C", "text": "FIDO2 セキュリティ キー" },
      { "letter": "D", "text": "テキスト メッセージ (text messages)" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 83,
    "question": "Microsoft 365 サブスクリプションがあります。\nユーザーにセキュリティの既定値群 (Security defaults) および条件付きアクセス ポリシーを作成する機能を提供する必要があります。このソリューションは、最小特権の原則を使用する必要があります。\nユーザーにどのロールを割り当てるべきですか？",
    "choices": [
      { "letter": "A", "text": "グローバル管理者" },
      { "letter": "B", "text": "条件付きアクセス管理者" },
      { "letter": "C", "text": "セキュリティ管理者" },
      { "letter": "D", "text": "Intune 管理者" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 84,
    "question": "Microsoft Intune を使用する Microsoft 365 サブスクリプションがあります。\n5 台の新しい Windows 11 Pro デバイスがあります。\nデバイスを企業で使用できるように準備する必要があります。ソリューションは次の要件を満たす必要があります：\n・各デバイスに Windows 11 Enterprise をインストールする。\n・App1 という名前の Windows インストーラー (MSI) パッケージを各デバイスにインストールする。\n・App1 で必要な Certificate1 という名前の証明書を追加する。\n・各デバイスを Azure AD に参加させる。\n使用できる 3 つのプロビジョニング オプションはどれですか？（それぞれの正解は完全なソリューションを提示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "サブスクリプションのライセンス認証 (subscription activation)" },
      { "letter": "B", "text": "カスタム Windows イメージ" },
      { "letter": "C", "text": "インプレース アップグレード" },
      { "letter": "D", "text": "Windows Autopilot" },
      { "letter": "E", "text": "プロビジョニング パッケージ" }
    ],
    "answer": "BDE",
    "images": []
  },
  {
    "id": 85,
    "question": "Windows 10 を実行し、Microsoft Intune を使用して管理されているコンピューターがあります。\nユーザーはファイルを D:\\Folder1 という名前のフォルダーに保存します。\n信頼されたアプリケーションのリストのみに D:\\Folder1 への書き込みアクセス権が付与されるようにする必要があります。\nデバイス構成プロファイルで何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Defender エクスプロイト ガード (Exploit Guard)" },
      { "letter": "B", "text": "Microsoft Defender Application Guard" },
      { "letter": "C", "text": "Microsoft Defender SmartScreen" },
      { "letter": "D", "text": "Microsoft Defender Application Control" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 86,
    "question": "【ホットスポット】\nMicrosoft Intune に登録された 100 台の Windows 10 デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\n次の要件を満たすエンドポイント セキュリティ ポリシーを作成する必要があります：\n・Windows セキュリティ アプリの [ファイアウォールとネットワーク保護] 領域を非表示にする。\n・デバイスでの Windows Hello for Business のプロビジョニングを無効にする。\nどの 2 つのポリシー タイプを使用すべきですか？回答するには、回答領域で適切なポリシーを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image195.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image196.png", "analysis": "" }
    ]
  },
  {
    "id": 87,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\nIntune の自動登録が構成されています。\nワークグループ内に 100 台の Windows 11 デバイスがあります。\nデバイスを企業のワイヤレス ネットワークに接続し、100 台の新しい Windows 11 デバイスを Intune に登録する必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "プロビジョニング パッケージ" },
      { "letter": "B", "text": "グループ ポリシー オブジェクト (GPO)" },
      { "letter": "C", "text": "モバイル デバイス管理 (MDM) の自動登録" },
      { "letter": "D", "text": "デバイス構成ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 88,
    "question": "次の表に示すデバイスを含む Azure AD テナントがあります。\nWindows 11 Enterprise E5 ライセンスを購入します。\nサブスクリプションのライセンス認証 (Subscription Activation) を使用して Windows 11 Enterprise にアップグレードできるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image191.png", "analysis": "" }
    ]
  },
  {
    "id": 89,
    "question": "ネットワークには Active Directory ドメインが含まれています。ドメインには Windows 11 を実行する Computer1 という名前のコンピューターが含まれています。\nComputer1 で Windows リモート管理 (WinRM) サービスを有効にし、次の構成を実行する必要があります：\n・WinRM サービスのスタートアップの種類を「自動」に設定する。\n・任意の IP アドレスからの要求を受け入れるリスナーを作成する。\n・WS-Management 通信のファイアウォール例外を有効にする。\nどの PowerShell コマンドレットを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Connect-WSMan" },
      { "letter": "B", "text": "Enable-PSRemoting" },
      { "letter": "C", "text": "Invoke-WSManAction" },
      { "letter": "D", "text": "Enable-PSSessionConfiguration" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 90,
    "question": "【ホットスポット】\nネットワークには、adatum.com という名前の Active Directory ドメイン、ワークグループ、および Windows 10 を実行するコンピューターが含まれています。コンピューターは次の表に示すように構成されています。\nComputer1、Computer2、および Computer3 のローカル管理者アカウントは、同じユーザー名とパスワードを持っています。\nComputer1 では、Windows Defender ファイアウォールが展示 (exhibit) に示すように構成されています。\nComputer1 のサービスは次の状態になっています。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image128.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image129.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image130.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image131.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image132.png", "analysis": "" }
    ]
  },
  {
    "id": 91,
    "question": "Windows 10 を実行するコンピューターに機能更新プログラム (feature update) をインストールします。\n更新プログラムをロールバックできる日数は何日ですか？",
    "choices": [
      { "letter": "A", "text": "5" },
      { "letter": "B", "text": "10" },
      { "letter": "C", "text": "14" },
      { "letter": "D", "text": "30" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 92,
    "question": "Azure Log Analytics ワークスペースを含む Microsoft Azure サブスクリプションがあります。\nWindows 10 を実行する Computer1 という名前の新しいコンピューターを展開します。Computer1 はワークグループ内にあります。\nLog Analytics を使用して Computer1 からのイベントをクエリできるようにする必要があります。\nComputer1 で何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure AD に参加させる。" },
      { "letter": "B", "text": "Windows Defender ファイアウォールを構成する。" },
      { "letter": "C", "text": "イベント サブスクリプションを作成する。" },
      { "letter": "D", "text": "Azure Monitor エージェントをインストールする。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 93,
    "question": "Microsoft 365 E5 サブスクリプションと、100 台の管理されていない iPad デバイスがあります。\n特定の iOS アップデートをデバイスに展開する必要があります。ユーザーが手動で新しいバージョンの iOS をインストールできないようにする必要があります。\n実行すべき 2 つのアクションはどれですか？（それぞれの正解はソリューションの一部を示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "デバイス構成プロファイルを作成する。" },
      { "letter": "B", "text": "Intune ポータル サイト (Company Portal) を使用して、デバイスを Microsoft Intune に登録する。" },
      { "letter": "C", "text": "コンプライアンス ポリシーを作成する。" },
      { "letter": "D", "text": "iOS アプリのプロビジョニング プロファイルを作成する。" },
      { "letter": "E", "text": "Apple Business Manager を使用して、デバイスを Microsoft Intune に登録する。" }
    ],
    "answer": "AE",
    "images": []
  },
  {
    "id": 94,
    "question": "【ドラッグ＆ドロップ】\nUser1 と User2 という名前の 2 人のユーザーを含む Microsoft 365 サブスクリプションがあります。\nユーザーが次のタスクを実行できるようにする必要があります：\n・User1 はグループを作成し、ユーザーを管理できる必要がある。\n・User2 は管理者以外のユーザーのパスワードをリセットできる必要がある。\nこのソリューションは、最小特権の原則を使用する必要があります。\n各ユーザーにどのロールを割り当てるべきですか？回答するには、適切なロールを正しいユーザーにドラッグします。各ロールは、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image156.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image157.png", "analysis": "" }
    ]
  },
  {
    "id": 95,
    "question": "【ホットスポット】\n次の表に示すユーザーを含む contoso.com という名前の Azure AD テナントがあります。\ncontoso.com の場合、モビリティ (MDM および MAM) 設定には次の構成があります：\n・MDM ユーザースコープ：Group1\n・MAM ユーザースコープ：Group2\n次の表に示すデバイスを購入します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image174.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image175.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image176.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image559.png", "analysis": "" }
    ]
  },
  {
    "id": 96,
    "question": "Windows 11 を実行する Computer1 という名前のコンピューターがあります。\nUser1 という名前のユーザーは、リモート デスクトップを使用して Computer1 に接続する予定です。\nリモート デスクトップ接続が確立され、サインイン ページが表示される前に、User1 のデバイスが認証されるようにする必要があります。\nComputer1 で何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "レピュテーション ベースの保護 (Reputation-based protection) をオンにする" },
      { "letter": "B", "text": "ネットワーク レベル認証 (NLA) を有効にする" },
      { "letter": "C", "text": "ネットワーク探索 (Network Discovery) をオンにする" },
      { "letter": "D", "text": "リモート デスクトップ構成サービスを構成する" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 97,
    "question": "【ドラッグ＆ドロップ】\n会社には Windows 10 を実行する Computer1 という名前のコンピューターがあります。\nComputer1 は会社を退職したユーザーによって使用されていました。\nComputer1 の用途を変更し、新しいユーザーに割り当てる予定です。\nWindows Autopilot を使用して Computer1 を再展開する必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image138.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image139.png", "analysis": "" }
    ]
  },
  {
    "id": 98,
    "question": "contoso.com という名前の Azure AD テナントがあります。\nWindows 11 を実行する Computer1 という名前のワークグループ コンピューターがあります。\nComputer1 を contoso.com に追加する必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "dsregcmd.exe" },
      { "letter": "B", "text": "コンピューターの管理" },
      { "letter": "C", "text": "netdom.exe" },
      { "letter": "D", "text": "設定アプリ" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 99,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の設定を含む UpdateRing1 という名前の更新リングがあります：\n・自動更新の動作：スケジュールされた時刻に自動インストールして再起動する\n・自動動作の頻度：月の第1週\n・スケジュールされたインストール日：火曜日\n・スケジュールされたインストール時刻：午前 3 時\nMicrosoft Intune 管理センターから、UpdateRing1 の機能更新プログラム (feature updates) について「アンインストール」を選択します。\nデバイスが機能更新プログラムの削除を開始するのはいつですか？",
    "choices": [
      { "letter": "A", "text": "ユーザーがアンインストールを承認したとき" },
      { "letter": "B", "text": "ポリシーを受信するとすぐ" },
      { "letter": "C", "text": "次の火曜日" },
      { "letter": "D", "text": "翌月の第1火曜日" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 100,
    "question": "Microsoft Intune サブスクリプションを使用して iOS デバイスを管理します。\nジェイルブレイクされた iOS デバイスをブロックするデバイス コンプライアンス ポリシーを構成します。\n強化されたジェイルブレイク検出 (Enhanced jailbreak detection) を有効にする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "コンプライアンス ポリシー設定" },
      { "letter": "B", "text": "デバイス コンプライアンス ポリシー" },
      { "letter": "C", "text": "ネットワークの場所" },
      { "letter": "D", "text": "構成プロファイル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 101,
    "question": "Windows 10 を実行する Computer1 と Computer2 という 2 台のコンピューターがあります。Computer2 ではリモート デスクトップが有効になっています。\nComputer1 からリモート デスクトップ接続を使用して Computer2 に接続します。\nリモート デスクトップ セッション内から Computer1 のローカル ドライブにアクセスできるようにする必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Computer2 から、リモート デスクトップの設定を構成する。" },
      { "letter": "B", "text": "Computer1 の Windows Defender ファイアウォールから、リモート デスクトップを許可する。" },
      { "letter": "C", "text": "Computer2 の Windows Defender ファイアウォールから、ファイルとプリンターの共有を許可する。" },
      { "letter": "D", "text": "Computer1 から、リモート デスクトップ接続の設定を構成する。" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 102,
    "question": "Windows 11 Pro を実行するコンピューターがあります。コンピューターは Azure AD に参加しており、Microsoft Intune に登録されています。\nコンピューターを Windows 11 Enterprise にアップグレードする必要があります。\nIntune で何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス コンプライアンス ポリシー" },
      { "letter": "B", "text": "デバイス クリーンアップ ルール" },
      { "letter": "C", "text": "デバイス登録ポリシー" },
      { "letter": "D", "text": "デバイス構成プロファイル" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 103,
    "question": "次の表に示すデバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nすべてのデバイスには Microsoft Edge がインストールされています。\nMicrosoft Intune 管理センターから、Edge1 という名前の Microsoft Edge ベースライン プロファイルを作成します。\nサポートされているすべてのデバイスに Edge1 を適用する必要があります。\nEdge1 をどのデバイスに適用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image202.png", "analysis": "" }
    ]
  },
  {
    "id": 104,
    "question": "【ホットスポット】\nWindows Autopilot 展開プロファイルを作成します。\n次の要件を満たすようにプロファイル設定を構成する必要があります：\n・エンドユーザーの認証を必要とせずに、新しいデバイスを自動的に登録し、システムアプリをプロビジョニングする。\n・コンピューター名にハードウェアのシリアル番号を含める。\nどの 2 つの設定を構成すべきですか？回答するには、回答領域で適切な設定を選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image178.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image179.png", "analysis": "" }
    ]
  },
  {
    "id": 105,
    "question": "Microsoft 365 サブスクリプションがあります。\nWindows Autopilot を使用して 25 台の Windows 11 デバイスをプロビジョニングする予定です。\nOut-of-box experience (OOBE) の設定を構成する必要があります。\nMicrosoft Intune 管理センターで何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "登録ステータス ページ (ESP)" },
      { "letter": "B", "text": "展開プロファイル" },
      { "letter": "C", "text": "コンプライアンス ポリシー" },
      { "letter": "D", "text": "PowerShell スクリプト" },
      { "letter": "E", "text": "構成プロファイル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 106,
    "question": "【ホットスポット】\nネットワークには adatum.com という名前の Active Directory ドメインが含まれています。ドメインには Windows 10 を実行する Computer1 と Computer2 という名前の 2 台のコンピューターが含まれています。Computer2 ではリモート デスクトップが有効になっています。\nドメインには、次の表に示すユーザー アカウントが含まれています。\nComputer2 には、次の表に示すローカル グループが含まれています。\nComputer2 の関連するユーザー権利の割り当て (user rights assignments) は、次の表に示されています。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image181.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image182.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image183.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image184.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image185.png", "analysis": "" }
    ]
  },
  {
    "id": 107,
    "question": "【ドラッグ＆ドロップ】\nオンプレミスのエンタープライズ証明機関 (CA) への PFX 証明書コネクタを使用するように構成された Microsoft Intune サブスクリプションがあります。\nIntune を使用して、公開キーペア (PKCS) 証明書を使用して Android デバイスの自動登録を構成する必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image152.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image153.png", "analysis": "" }
    ]
  },
  {
    "id": 108,
    "question": "【ホットスポット】\nMicrosoft Intune に、次の表に示すデバイス コンプライアンス ポリシーがあります。\nIntune のコンプライアンス ポリシー設定は、展示 (exhibit) に示すように構成されています。\n6月1日に、次の表に示すように Windows 10 デバイスを Intune に登録します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image169.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image170.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image171.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image172.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image558.png", "analysis": "" }
    ]
  },
  {
    "id": 109,
    "question": "Microsoft Intune を使用する Microsoft 365 サブスクリプションがあります。\n次の表に示すように、アプリを Intune に追加します。\nAndroid Enterprise プラットフォーム用の Policy1 という名前のアプリ構成ポリシーを作成する必要があります。\nPolicy1 を使用して管理できるアプリはどれですか？",
    "choices": [
      { "letter": "A", "text": "App2 のみ" },
      { "letter": "B", "text": "App3 のみ" },
      { "letter": "C", "text": "App1 および App3 のみ" },
      { "letter": "D", "text": "App2 および App3 のみ" },
      { "letter": "E", "text": "App1, App2, および App3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image192.png", "analysis": "" }
    ]
  },
  {
    "id": 110,
    "question": "【ホットスポット】\nWindows 10 を実行する 200 台のコンピューターがあります。コンピューターは Azure AD に参加しており、Microsoft Intune に登録されています。\nカスタム画像を壁紙およびサインイン画面として設定する必要があります。\nデバイス制限の構成プロファイルで構成すべき 2 つの設定はどれですか？回答するには、回答領域で適切な設定を選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image193.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image194.png", "analysis": "" }
    ]
  },
  {
    "id": 111,
    "question": "Microsoft Intune に登録された 1,000 台の Windows 11 デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nIntune と Microsoft Defender for Endpoint を統合する予定です。\nIntune と Defender for Endpoint の間にサービス間 (service-to-service) の接続を確立する必要があります。\nMicrosoft Intune 管理センターでどの設定を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "プレミアム アドオン" },
      { "letter": "B", "text": "コネクタとトークン" },
      { "letter": "C", "text": "テナントの登録" },
      { "letter": "D", "text": "Microsoft Tunnel ゲートウェイ" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 112,
    "question": "次の表に示す Windows 10 デバイスがあります。\nデバイスを Windows 11 Enterprise にアップグレードする予定です。\nWindows 11 Enterprise への直接インプレース アップグレードを実行できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device3 のみ" },
      { "letter": "B", "text": "Device3 および Device4 のみ" },
      { "letter": "C", "text": "Device2, Device3, および Device4 のみ" },
      { "letter": "D", "text": "Device1, Device3, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4 のみ" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image238.png", "analysis": "" }
    ]
  },
  {
    "id": 113,
    "question": "【ホットスポット】\nネットワークには、Azure AD に同期する contoso.com という名前のオンプレミス Active Directory ドメインが含まれています。\nUser1 という名前のユーザーは、次の表に示すドメイン参加済みデバイスを使用します。\nMicrosoft Entra 管理センターで、Windows 11 Enterprise E5 ライセンスを User1 に割り当てます。\nUser1 が次にデバイスにサインインしたときに何が起こるかを特定する必要があります。\n各デバイスについて何を特定すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image239.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image240.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image562.png", "analysis": "" }
    ]
  },
  {
    "id": 114,
    "question": "会社にはリモート デスクトップ ゲートウェイ (RD ゲートウェイ) があります。\nRD ゲートウェイを介してリモート デスクトップ サービス (RDS) を使用してアクセスできる Server1 という名前のサーバーがあります。\nゲートウェイを介して接続するようにリモート デスクトップ接続を構成する必要があります。\nどの設定を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "どこからでも接続 (Connect from anywhere)" },
      { "letter": "B", "text": "サーバー認証 (Server authentication)" },
      { "letter": "C", "text": "接続設定 (Connection settings)" },
      { "letter": "D", "text": "ローカル デバイスとリソース (Local devices and resources)" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 115,
    "question": "Microsoft Deployment Toolkit (MDT) の展開共有があります。\n標準クライアント タスク シーケンス (Standard Client Task Sequence) テンプレートを使用して Windows 11 を展開する予定です。\n次のアクションを実行するようにタスク シーケンスを変更する必要があります：\n・Unified Extensible Firmware Interface (UEFI) をサポートするようにディスクをフォーマットする。\n・回復パーティションを作成する。\nタスク シーケンスのどのフェーズを変更すべきですか？",
    "choices": [
      { "letter": "A", "text": "Preinstall" },
      { "letter": "B", "text": "PostInstall" },
      { "letter": "C", "text": "Install" },
      { "letter": "D", "text": "Initialization" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 116,
    "question": "【ドラッグ＆ドロップ】\nネットワークには Active Directory ドメインが含まれています。\nサーバーに Microsoft Deployment Toolkit (MDT) をインストールします。\nWindows 11 のカスタム イメージがあります。\nMDT を使用してイメージを 100 台のデバイスに展開する必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image247.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image248.png", "analysis": "" }
    ]
  },
  {
    "id": 117,
    "question": "ネットワークにはオンプレミスの Active Directory ドメインが含まれています。ドメインには Windows 10 を実行する Computer1 と Computer2 という名前の 2 台のコンピューターが含まれています。\nComputer1 に Windows Admin Center をインストールします。\nWindows Admin Center を使用して、Computer1 から Computer2 を管理する必要があります。\nComputer2 で何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "TrustedHosts リストを更新する。" },
      { "letter": "B", "text": "Enable-PSRemoting コマンドレットを実行する。" },
      { "letter": "C", "text": "Microsoft Defender ファイアウォールを通過する Windows リモート管理 (WinRM) を許可する。" },
      { "letter": "D", "text": "受信の Microsoft Defender ファイアウォール ルールを追加する。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 118,
    "question": "【ホットスポット】\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\nマーケティング部門および調査部門向けの Windows 11 デバイス ビルドを作成する予定です。ソリューションは次の要件を満たす必要があります：\n・マーケティング部門のデバイスは Windows Update for Business をサポートする必要がある。\n・調査部門のデバイスは、リリースから最大 36 か月間、機能更新プログラムのバージョンをサポートする必要がある。\n各部門に必要な最小限の Windows 11 エディションは何ですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image252.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image253.png", "analysis": "" }
    ]
  },
  {
    "id": 119,
    "question": "contoso.com という名前の Azure AD テナントがあります。\nWindows Autopilot を使用して、次の表に示す Windows 10 デバイスを構成する予定です。\nWindows Autopilot の自己展開 (self-deploying) モードを使用して構成できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device2 のみ" },
      { "letter": "B", "text": "Device3 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image254.png", "analysis": "" }
    ]
  },
  {
    "id": 120,
    "question": "Windows 11 を実行する個人用デバイスにモバイル デバイス管理 (MDM) を実装する必要があります。ソリューションは次の要件を満たす必要があります：\n・Microsoft Intune を使用して個人用デバイスを管理できるようにする。\n・ユーザーが自分の個人用デバイスからシームレスに企業データにアクセスできるようにする。\n・ユーザーが個人アカウントを使用してのみ個人用デバイスにサインインできるようにする。\nデバイスを Azure AD に追加するために何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure AD 登録済み (Azure AD registered)" },
      { "letter": "B", "text": "ハイブリッド Azure AD 参加済み (hybrid Azure AD join)" },
      { "letter": "C", "text": "Azure AD 参加済み (Azure AD joined)" }
    ],
    "answer": "A",
    "images": []
  },
{
    "id": 121,
    "question": "【ホットスポット】\n次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\nIntune には、次の表に示すデバイス コンプライアンス ポリシーが含まれています。\nデバイス コンプライアンス ポリシーには、次の表に示す割り当てがあります。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image265.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image266.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image267.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image268.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image269.png", "analysis": "" }
    ]
  },
  {
    "id": 122,
    "question": "contoso.com という名前の Azure AD テナントがあります。\nWindows 11 デバイスを contoso.com に参加させるときに、ユーザーが自動的にローカル Administrators グループに追加されないようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows Autopilot" },
      { "letter": "B", "text": "Windows 用プロビジョニング パッケージ" },
      { "letter": "C", "text": "Azure AD のセキュリティの既定値群" },
      { "letter": "D", "text": "Azure AD のデバイス設定" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 123,
    "question": "会社には、次の表に示すように Microsoft Intune に登録されたデバイスがあります。\nMicrosoft Intune 管理センターで、会社のネットワークを Location1 という名前の場所として定義します。\nネットワークの場所ベースのコンプライアンス ポリシーを使用できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device2 のみ" },
      { "letter": "D", "text": "Device2 および Device3 のみ" },
      { "letter": "E", "text": "Device1, Device2, および Device3" }
    ],
    "answer": "E",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image275.png", "analysis": "" }
    ]
  },
  {
    "id": 124,
    "question": "Azure サブスクリプションがあります。\nDevice1 という名前のオンプレミスの Windows 11 デバイスがあります。\nAzure Monitor を使用して Device1 を監視する予定です。\nサブスクリプションに DCR1 という名前のデータ収集ルール (DCR) を作成します。\nDCR1 を何に関連付けるべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure Network Watcher" },
      { "letter": "B", "text": "Device1" },
      { "letter": "C", "text": "Log Analytics ワークスペース" },
      { "letter": "D", "text": "監視対象オブジェクト (Monitored Object)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 125,
    "question": "Microsoft Intune に登録された 100 台の iOS デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\niOS 更新プログラムの通知が、更新プログラムのリリース後 30 日間延期されるようにする必要があります。\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "iOS アプリ プロビジョニング プロファイル" },
      { "letter": "B", "text": "デバイス機能テンプレートに基づくデバイス構成プロファイル" },
      { "letter": "C", "text": "iOS/iPadOS の更新ポリシー" },
      { "letter": "D", "text": "デバイス制限テンプレートに基づくデバイス構成プロファイル" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 126,
    "question": "次の表に示すオブジェクトを含む Microsoft 365 テナントがあります。\nMicrosoft Intune 管理センターで、App1 という名前の Microsoft 365 Apps アプリを作成しています。\nApp1 をどのオブジェクトに割り当てることができますか？",
    "choices": [
      { "letter": "A", "text": "Group3 および Group4 のみ" },
      { "letter": "B", "text": "Admin1, Group3, および Group4 のみ" },
      { "letter": "C", "text": "Group1, Group3, および Group4 のみ" },
      { "letter": "D", "text": "Group1, Group2, Group3, および Group4 のみ" },
      { "letter": "E", "text": "Admin1, Group1, Group2, Group3, および Group4" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image234.png", "analysis": "" }
    ]
  },
  {
    "id": 127,
    "question": "Windows 11 を実行し、パブリック ネットワークに接続する Client1 という名前のワークグループ コンピューターがあります。\nClient1 で PowerShell リモート管理を有効にする必要があります。このソリューションでは、PowerShell リモート接続がローカル サブネットからのみ受け入れられるようにする必要があります。\nどの PowerShell コマンドを実行すべきですか？",
    "choices": [
      { "letter": "A", "text": "Set-PSSessionConfiguration –AccessMode Local" },
      { "letter": "B", "text": "Enable-PSRemoting –SkipNetworkProfileCheck" },
      { "letter": "C", "text": "Enable-PSRemoting –Force" },
      { "letter": "D", "text": "Set-NetFirewallRule –Name “WINRM-HTTP-In-TCP-PUBLIC” –RemoteAddress Any" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 128,
    "question": "Microsoft Intune に登録されている Computer1 という名前の Windows 10 デバイスがあります。\nComputer1 を、顧客向けの単一の全画面アプリケーションを実行するパブリック ワークステーションとして構成する必要があります。\nMicrosoft Intune 管理センターでどの構成プロファイル タイプのテンプレートを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "共有マルチユーザー デバイス" },
      { "letter": "B", "text": "デバイス制限" },
      { "letter": "C", "text": "キオスク (Kiosk)" },
      { "letter": "D", "text": "エンドポイント保護" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 129,
    "question": "Microsoft Intune Suite を実装しています。\n次の表に示すように、デバイスを Intune に登録します。\nエンドポイント分析 (Endpoint analytics) を使用してパフォーマンスを分析できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image331.png", "analysis": "" }
    ]
  },
  {
    "id": 130,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。\nWindows Autopilot を使用して Windows 11 デバイスを展開する予定です。\nAutopilot のプロビジョニング中に次の要件を満たす必要があります：\n・アプリとプロファイルの構成の進行状況を表示する。\n・すべてのアプリとプロファイルがインストールされるまで、ユーザーがデバイスを使用できないようにブロックする。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "アプリ保護ポリシー" },
      { "letter": "C", "text": "登録デバイス プラットフォームの制限" },
      { "letter": "D", "text": "登録ステータス ページ (ESP)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 131,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nWindows デバイスの展開と管理に Microsoft Intune を使用します。\n退職したユーザーのデバイスが 100 台あります。\n以前のユーザーがインストールしたすべてのデータとアプリケーションを削除して、新しいユーザーのためにデバイスの用途を変更する必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "新しい構成プロファイルをデバイスに展開する。" },
      { "letter": "B", "text": "デバイスで Windows Autopilot リセットを実行する。" },
      { "letter": "C", "text": "デバイスでインプレース アップグレードを実行する。" },
      { "letter": "D", "text": "デバイスに Windows 11 のクリーン インストールを実行する。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 132,
    "question": "Microsoft Intune を使用して 1,000 台のデバイスを管理しています。\n[デバイスのコンプライアンスの傾向] レポートを確認します。\nレポートにはどのくらいの期間の傾向データが表示されますか？",
    "choices": [
      { "letter": "A", "text": "30 日" },
      { "letter": "B", "text": "60 日" },
      { "letter": "C", "text": "90 日" },
      { "letter": "D", "text": "365 日" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 133,
    "question": "Microsoft 365 Business Standard サブスクリプションと 100 台の Windows 10 Pro デバイスがあります。\nMicrosoft 365 E5 サブスクリプションを購入します。\nWindows 10 Pro デバイスを Windows 10 Enterprise にアップグレードする必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\nどのアップグレード方法を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows Autopilot" },
      { "letter": "B", "text": "Microsoft 展開ツールキット (MDT) のライトタッチ展開" },
      { "letter": "C", "text": "サブスクリプションのライセンス認証 (Subscription Activation)" },
      { "letter": "D", "text": "Windows インストール メディアを使用したインプレース アップグレード" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 134,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあります。サブスクリプションには、Windows 11 を実行し、Microsoft Intune に登録されている 1,000 台のコンピューターが含まれています。\n次のオプションが有効になっているコンプライアンス ポリシーを作成する予定です：\n・デバイスでセキュア ブートを有効にすることを要求する。\n・デバイスがマシンのリスク スコア以下であることを要求する。\nどの 2 つのコンプライアンス設定を構成すべきですか？回答するには、回答領域で適切な設定を選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image357.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image358.png", "analysis": "" }
    ]
  },
  {
    "id": 135,
    "question": "【ホットスポット】\n【ケーススタディ】\n（※問題文の前提はADatum Corporationのケーススタディと同じです）\n\n【問題】\nConnection1 および Connection2 に対して計画された変更を実装します。\nユーザーが Device1 および Device2 にサインインしたとき、User1 にはいくつの VPN 接続が表示されますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image222.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image223.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image224.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image225.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image226.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image227.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image228.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image231.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image232.png", "analysis": "" }
    ]
  },
  {
    "id": 136,
    "question": "【ホットスポット】\nWindows Autopilot を使用して構成され、Windows 10 を実行するコンピューターがあります。\nユーザーは Computer1 という名前のコンピューターで次のタスクを実行します：\n・企業ネットワークへの VPN 接続を作成する\n・App1 という名前の Microsoft Store アプリをインストールする\n・Wi-Fi ネットワークに接続する\nComputer1 で Windows Autopilot リセットを実行します。\nユーザーがサインインしたときのコンピューターの状態はどうなりますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image302.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image303.png", "analysis": "" }
    ]
  },
  {
    "id": 137,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあります。\nすべてのユーザーに対してパスワードレス認証を有効にする必要があります。このソリューションは、次の要件を満たす必要があります：\n・調査部門のユーザーはモバイル デバイスを使用できず、代替手段を使用して管理されていない Linux デバイスから認証する必要がある。\n・サービスにアクセスするには、営業部門のユーザーは携帯電話を使用して認証する必要がある。\n・管理作業は最小限に抑える必要がある。\n各部門にどの認証方法を使用すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image307.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image308.png", "analysis": "" }
    ]
  },
  {
    "id": 138,
    "question": "【ホットスポット】\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\n次の要件を満たす更新リングを構成する必要があります：\n・既存の Windows 機能の修正と改善は 14 日間延期できるが、その日付から 7 日後に自動的にインストールされる。\n・新しい Windows 機能のインストールは 90 日間延期できるが、その日付から 10 日後に自動的にインストールされる。\n・更新プログラムがインストールされてから 3 日後にデバイスが自動的に再起動する必要がある。\n更新リングをどのように構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image276.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image566.png", "analysis": "" }
    ]
  },
  {
    "id": 139,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあります。\nMicrosoft 365 Defender のデバイス オンボーディングを確認して実装する必要があります。このソリューションは、次の要件を満たす必要があります：\n・Chromium ベースのバージョンの Microsoft Edge がインストールされているオンボード デバイスを表示する。\n・Windows 11 デバイス用のオンボーディング パッケージをダウンロードする。\n・管理作業を最小限に抑える。\nMicrosoft 365 Defender ポータルでどの 2 つの設定を使用すべきですか？回答するには、回答領域で適切な設定を選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image278.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image279.png", "analysis": "" }
    ]
  },
  {
    "id": 140,
    "question": "【ホットスポット】\nMDM セキュリティ ベースライン プロファイルがあります。\nASR エンドポイント セキュリティ プロファイルがあります。\n両方のプロファイルを Microsoft Intune に登録されているデバイスに展開する予定です。\n次の設定がデバイスでどのように構成されるかを特定する必要があります：\n・Office アプリケーションによる実行可能コンテンツの作成をブロックする\n・Office マクロからの Win32 API 呼び出しをブロックする\n現在、これらの設定は各デバイスでローカルに無効になっています。\nデバイスでの有効な設定は何ですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image296.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image297.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image298.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image299.png", "analysis": "" }
    ]
  },
  {
    "id": 141,
    "question": "ネットワークには Active Directory ドメイン サービス (AD DS) ドメインが含まれています。ドメインには Windows 10 を実行する 100 台のクライアント コンピューターが含まれています。\n現在、会社には展開インフラストラクチャがありません。\n会社はボリューム ライセンス契約を通じて Windows 11 ライセンスを購入しています。\nコンピューターを Windows 11 にアップグレードする方法を推奨する必要があります。このソリューションは、ライセンス コストを最小限に抑える必要があります。\n推奨事項に何を含めるべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows Autopilot" },
      { "letter": "B", "text": "Configuration Manager" },
      { "letter": "C", "text": "サブスクリプションのライセンス認証 (subscription activation)" },
      { "letter": "D", "text": "Microsoft 展開ツールキット (MDT)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 142,
    "question": "【ホットスポット】\nMicrosoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、次の表に示すユーザーが含まれています。\nGroup2 と Group3 は Group1 のメンバーです。\nすべてのユーザーは Microsoft Excel を使用します。\nMicrosoft Intune 管理センターから、次の表に示すポリシーを作成します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image336.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image337.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image338.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image339.png", "analysis": "" }
    ]
  },
  {
    "id": 143,
    "question": "次の表に示すデバイスがあります。\nMicrosoft Defender for Endpoint を実装する予定です。\nMicrosoft Defender for Endpoint にオンボードできるデバイスを特定する必要があります。\n何を特定すべきですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "D",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image332.png", "analysis": "" }
    ]
  },
  {
    "id": 144,
    "question": "contoso.com という名前の Azure AD テナントがあります。\nWindows 11 を実行する 25 台のコンピューターを購入する予定です。コンピューターはユーザーに直接配送する予定です。\nOut-of-box experience (OOBE) 中に、ユーザーにサインインを求め、その後コンピューターが Microsoft Intune を使用するように構成されていることを確認する必要があります。\nどの 2 つのコンポーネントを構成すべきですか？それぞれの正解はソリューションの一部を示します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [
      { "letter": "A", "text": "プロビジョニング パッケージ" },
      { "letter": "B", "text": "自動登録" },
      { "letter": "C", "text": "unattend.xml 応答ファイル" },
      { "letter": "D", "text": "自己展開 (self-deploying) モードの Windows Autopilot 展開プロファイル" },
      { "letter": "E", "text": "ユーザー ドリブン (user-driven) モードの Windows Autopilot 展開プロファイル" }
    ],
    "answer": "BE",
    "images": []
  },
  {
    "id": 145,
    "question": "Windows Autopilot を使用して構成されているすべてのコンピューターに、同じ展開プロファイルを割り当てる必要があります。\n実行すべき 2 つのアクションはどれですか？それぞれの正解はソリューションの一部を示します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [
      { "letter": "A", "text": "動的メンバーシップ ルールを持ち、ZTDID タグを使用する Azure AD グループを作成する。" },
      { "letter": "B", "text": "動的メンバーシップ ルールを持ち、operatingSystem タグを使用する Azure AD グループを作成する。" },
      { "letter": "C", "text": "グループに Windows Autopilot 展開プロファイルを割り当てる。" },
      { "letter": "D", "text": "コンピューターを Azure AD に参加させる。" },
      { "letter": "E", "text": "ドメインにリンクされたグループ ポリシー オブジェクト (GPO) を作成する。" },
      { "letter": "F", "text": "コンピューターをオンプレミスの Active Directory ドメインに参加させる。" }
    ],
    "answer": "AC",
    "images": []
  },
  {
    "id": 146,
    "question": "ネットワークには Active Directory ドメインが含まれています。ドメインには Windows 10 を実行する 10 台のコンピューターが含まれています。財務部門のユーザーがコンピューターを使用しています。\nWindows 10 を実行する Computer1 という名前のコンピューターがあります。\nComputer1 から、財務部門のコンピューターで Windows PowerShell コマンドを実行するスクリプトを実行する予定です。\nComputer1 から財務部門のコンピューターで PowerShell コマンドを実行できるようにする必要があります。\n財務部門のコンピューターで何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows PowerShell から、Enable-MMAgent コマンドレットを実行する。" },
      { "letter": "B", "text": "ローカル グループ ポリシーから、[リモート シェル アクセスを許可する] 設定を有効にする。" },
      { "letter": "C", "text": "Windows PowerShell から、Enable-PSRemoting コマンドレットを実行する。" },
      { "letter": "D", "text": "ローカル グループ ポリシーから、[スクリプトの実行をオンにする] 設定を有効にする。" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 147,
    "question": "次の表に示すユーザーを含む Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft 365 Apps 管理センターで、Microsoft Office カスタマイズを作成します。\n管理センターから Office カスタマイズ ファイルをダウンロードできるユーザーは誰ですか？",
    "choices": [
      { "letter": "A", "text": "Admin3 のみ" },
      { "letter": "B", "text": "Admin1 および Admin3 のみ" },
      { "letter": "C", "text": "Admin3 および Admin4 のみ" },
      { "letter": "D", "text": "Admin1, Admin2, および Admin3 のみ" },
      { "letter": "E", "text": "Admin1, Admin2, Admin3, Admin4" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image233.png", "analysis": "" }
    ]
  },
  {
    "id": 148,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあります。\nすべてのコンピューターは Microsoft Intune に登録されています。\n次の表に示すように、Windows 11 環境をセキュリティで保護するためのビジネス要件があります。\n各要件を満たすために何を実装すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image260.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image261.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image262.png", "analysis": "" }
    ]
  },
  {
    "id": 149,
    "question": "【ホットスポット】\nMicrosoft Intune を使用し、次の表に示すデバイスを含む Microsoft 365 テナントがあります。\nMicrosoft Intune の Endpoint Security で、各デバイスのディスク暗号化ポリシーを構成する必要があります。\n各デバイスにどの暗号化タイプを使用すべきですか？また、暗号化キーを管理するために Intune のどのロールベースのアクセス制御 (RBAC) ロールを使用すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image317.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image318.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image319.png", "analysis": "" }
    ]
  },
  {
    "id": 150,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft Defender for Endpoint を使用する Microsoft 365 サブスクリプションがあります。\n次の種類のデバイスを Defender for Endpoint にオンボードする予定です：\n・macOS\n・Linux サーバー\n各デバイスをオンボードするには何を使用すべきですか？回答するには、適切なツールを正しいデバイスの種類にドラッグします。各ツールは、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image322.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image323.png", "analysis": "" }
    ]
  },
  {
    "id": 151,
    "question": "【ホットスポット】\nMicrosoft Intune を使用し、100 台の Windows 10 デバイスを含む Microsoft 365 サブスクリプションがあります。\nデバイスで次のアクションを実行するための Intune 構成プロファイルを作成する必要があります：\n・カスタムのスタート レイアウトを展開する。\n・ローカルの Administrator アカウントの名前を変更する。\n各アクションに対してどのプロファイル タイプ テンプレートを使用すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image288.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image567.png", "analysis": "" }
    ]
  },
  {
    "id": 152,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nWindows 11 デバイスの管理に Microsoft Intune を使用します。\nSet という名前の新しいポリシー セットを作成し、Windows 10 以降の 5 つのデバイス構成プロファイルを追加します。\nPolicy1 という名前のデバイス コンプライアンス ポリシーを作成します。\nユーザーに Set1 のデバイス構成プロファイルが割り当てられたときに、必ず Policy1 も割り当てられるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Policy1 の割り当て" },
      { "letter": "B", "text": "Policy1 の構成" },
      { "letter": "C", "text": "Set1 の割り当て" },
      { "letter": "D", "text": "Set1 の構成" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 153,
    "question": "次の表に示すデバイスを含む Microsoft 365 テナントがあります。\nデバイスは Microsoft Intune を使用して管理されています。\nPolicy1 という名前のコンプライアンス ポリシーを作成し、Policy1 を Group1 に割り当てます。Policy1 は、デバイスのセキュリティ設定がポリシーで指定された設定と一致する場合にのみ、デバイスを「準拠 (Compliant)」としてマークするように構成されています。\nGroup1 のメンバーではないデバイスが「準拠」として表示されていることがわかりました。\nコンプライアンス ポリシーが割り当てられているデバイスのみが「準拠」として表示されるようにする必要があります。他のすべてのデバイスは「非準拠 (Not compliant)」として表示される必要があります。\nMicrosoft Intune 管理センターから何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "[デバイスのコンプライアンス] から、[コンプライアンス ポリシー設定] を構成する。" },
      { "letter": "B", "text": "[エンドポイント セキュリティ] から、[条件付きアクセス] の設定を構成する。" },
      { "letter": "C", "text": "[テナント管理] から、[診断設定] を変更する。" },
      { "letter": "D", "text": "Policy1 から、非準拠に対するアクションを変更する。" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image342.png", "analysis": "" }
    ]
  },
  {
    "id": 154,
    "question": "ネットワークには contoso.com という名前の Active Directory ドメインが含まれています。ドメインには Windows 11 を実行する 25 台のコンピューターが含まれています。\nMicrosoft 365 サブスクリプションがあります。\ncontoso.com と同期する Azure AD テナントがあります。\nハイブリッド Azure AD 参加を構成したところ、一部のコンピューターの登録状態が「保留中 (Pending)」になっていることがわかりました。\nコンピューターが参加を正常に完了できるようにする必要があります。\n何を確実にすべきですか？",
    "choices": [
      { "letter": "A", "text": "すべてのコンピューターで Windows がライセンス認証されていること" },
      { "letter": "B", "text": "コンピューターのユーザーに Microsoft 365 ライセンスが割り当てられていること" },
      { "letter": "C", "text": "各コンピューターがドメイン コントローラーと通信可能であること" },
      { "letter": "D", "text": "コンピューターに最新の品質更新プログラムが含まれていること" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 155,
    "question": "【ホットスポット】\nDS1 という名前の Microsoft Deployment Toolkit (MDT) 展開共有を管理しています。DS1 には、Windows 11 x64 という名前の Out-of-Box Drivers フォルダーがあり、{メーカー名}\\{モデル名} の形式のサブフォルダーがあります。\nPnP 検出や選択プロファイルを使用せずに、コンピューターのメーカーとモデルに一致するフォルダー内のすべてのドライバーがインストールされるように、展開タスク シーケンスを変更する必要があります。\n何をすべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image347.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image569.png", "analysis": "" }
    ]
  },
  {
    "id": 156,
    "question": "【ホットスポット】\nMicrosoft Deployment Toolkit (MDT) を使用して Windows 11 を展開します。\n次の要件を満たすように展開共有を変更する必要があります：\n・インストールを実行するユーザーに、ローカルの Administrator パスワードを設定するように促す\n・展開時のコンピューターの命名規則を定義する。\nこのソリューションでは、既存の WinPE イメージを置き換えてはなりません。\n各要件に対してどのファイルを変更すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image349.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image350.png", "analysis": "" }
    ]
  },
  {
    "id": 157,
    "question": "【ホットスポット】\n会社では Microsoft Defender for Endpoint を使用しています。Microsoft Defender for Endpoint には、次の表に示すデバイス グループが含まれています。\n次の図に示すように、コンピューターを Microsoft Defender for Endpoint にオンボードします。\nMicrosoft Defender for Endpoint の構成による効果は何ですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image284.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image285.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image286.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image287.png", "analysis": "" }
    ]
  },
  {
    "id": 158,
    "question": "【ホットスポット】\nWindows 11 展開タスクの管理に使用される Microsoft Deployment Toolkit (MDT) ソリューションがあります。\nMDT には、次の表に示すオペレーティング システム イメージが含まれています。\nWindows 10 を実行する複数のコンピューターで、Windows 11 へのインプレース アップグレードを実行する必要があります。\nDeployment Workbench から、新しいタスク シーケンス ウィザードを開きます。\nタスク シーケンスに使用するタスク シーケンス テンプレートとオペレーティング システム イメージを特定する必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n何を特定すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image304.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image305.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image306.png", "analysis": "" }
    ]
  },
  {
    "id": 159,
    "question": "Microsoft 365 サブスクリプションがあります。\nアプリ保護ポリシーを使用して、Android デバイス上の企業データを保護します。\nAndroid デバイスから接続するすべてのユーザーが、モバイル アプリケーション管理 (MAM) をサポートするアプリから接続した場合にのみ企業データにアクセスできるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "条件付きアクセス ポリシー" },
      { "letter": "C", "text": "デバイス構成プロファイル" },
      { "letter": "D", "text": "デバイス コンプライアンス ポリシー" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 160,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Intune に登録されておらず、アプリ保護ポリシーが割り当てられているすべてのデバイスを一覧表示するレポートをダウンロードする必要があります。\nMicrosoft Intune 管理センターで何を選択すべきですか？",
    "choices": [
      { "letter": "A", "text": "[レポート]、次に [デバイスのコンプライアンス]" },
      { "letter": "B", "text": "[アプリ]、次に [アプリ保護ポリシー]" },
      { "letter": "C", "text": "[デバイス]、次に [モニター]" },
      { "letter": "D", "text": "[アプリ]、次に [モニター]" }
    ],
    "answer": "D",
    "images": []
  },
{
    "id": 161,
    "question": "【ドラッグ＆ドロップ】\n会社に Microsoft 365 E5 テナントがあります。\n会社のすべてのデバイスは Microsoft Intune に登録されています。\n生の Microsoft Intune データからのカスタム クエリと視覚化を使用して、高度なレポートを作成する必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image320.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image321.png", "analysis": "" }
    ]
  },
  {
    "id": 162,
    "question": "【ドラッグ＆ドロップ】\nAzure AD テナントに同期するオンプレミスの Active Directory ドメインがあります。\nテナントには、Windows 10 を実行するコンピューターが含まれています。コンピューターはハイブリッド Azure AD に参加しており、Microsoft Intune に登録されています。\nコンピューター上の Microsoft Office 設定は、グループ ポリシー オブジェクト (GPO) を使用して構成されています。\nGPO を Intune に移行する必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image300.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image301.png", "analysis": "" }
    ]
  },
  {
    "id": 163,
    "question": "【ホットスポット】\nネットワークには、次の表に示す場所を含むオンプレミスの Active Directory ドメインが含まれています。\nMicrosoft Intune に、次の表に示す Windows 10 デバイスを登録します。\nすべてのデバイスに配信の最適化 (Delivery Optimization) デバイス構成プロファイルが適用されています。プロファイルは次の図のように構成されています。\nDevice1 と Device2 はどのデバイスから更新プログラムを取得できますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image324.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image325.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image326.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image327.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image328.png", "analysis": "" }
    ]
  },
  {
    "id": 164,
    "question": "【ドラッグ＆ドロップ】\n次の表に示すデバイスを含む Microsoft 365 サブスクリプションがあります。\n各デバイスの Microsoft Edge 設定を構成する必要があります。\n何を使用すべきですか？回答するには、適切な Intune 機能を正しいデバイスにドラッグします。各機能は、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image333.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image334.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image335.png", "analysis": "" }
    ]
  },
  {
    "id": 165,
    "question": "contoso.com という名前の Azure AD テナントに関連付けられた Microsoft Intune サブスクリプションがあります。\nユーザーはテナントにサインインするときに、us.contoso.com、eu.contoso.com、または contoso.com の 3 つのサフィックスのいずれかを使用します。\nユーザーが登録プロセスの一部としてモバイル デバイス管理 (MDM) の登録 URL を指定する必要がないようにする必要があります。このソリューションは、変更の数を最小限に抑える必要があります。\nどの DNS レコードが必要ですか？",
    "choices": [
      { "letter": "A", "text": "1 つの TXT レコードのみ" },
      { "letter": "B", "text": "3 つの CNAME レコード" },
      { "letter": "C", "text": "3 つの TXT レコード" },
      { "letter": "D", "text": "1 つの CNAME レコードのみ" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 166,
    "question": "User1 という名前のユーザーが含まれ、Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nWindows 11 を実行するデバイスの管理に Microsoft Intune を使用します。\n登録されているすべてのデバイスのローカル Administrators グループから User1 を削除する必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス コンプライアンス ポリシー" },
      { "letter": "B", "text": "アカウント保護ポリシー" },
      { "letter": "C", "text": "アプリ構成ポリシー" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 167,
    "question": "【ドラッグ＆ドロップ】\nDS1 という名前の Microsoft Deployment Toolkit (MDT) 展開共有があります。\nWindows 11 イメージを DS1 にインポートします。\nApp1 という名前のアプリケーションの実行可能インストーラーがあります。\nイメージを展開するすべてのタスク シーケンスに対して App1 がインストールされるようにする必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image186.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image187.png", "analysis": "" }
    ]
  },
  {
    "id": 168,
    "question": "【ホットスポット】\n次の情報を含む Azure AD テナントがあります：\n・Azure AD に参加している Windows 11 デバイス\n・表示名が User1 で UPN が user1@contoso.com のユーザー\nWindows 11 デバイスでリモート デスクトップを有効にします。\nUser1 がリモート デスクトップを使用してデバイスに接続できるようにする必要があります。\n各デバイスで実行する必要があるコマンドをどのように完了すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image351.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image352.png", "analysis": "" }
    ]
  },
  {
    "id": 169,
    "question": "【ホットスポット】\nネットワークには Active Directory ドメインが含まれています。Active Directory は Azure AD と同期されています。\nWindows 10 を実行し、Microsoft Intune に登録されている Active Directory ドメイン参加済みのコンピューターが 500 台あります。\nMicrosoft Defender エクスプロイト ガード (Exploit Guard) を実装する予定です。\nカスタムの Microsoft Defender エクスプロイト ガード ポリシーを作成し、そのポリシーをすべてのコンピューターに配布する必要があります。\n何をすべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image312.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image313.png", "analysis": "" }
    ]
  },
  {
    "id": 170,
    "question": "次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\nIntune を使用して更新プログラムを管理できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device3, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "E",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image359.png", "analysis": "" }
    ]
  },
  {
    "id": 171,
    "question": "Windows 10 を実行する 500 台のコンピューターがあります。コンピューターは Azure AD に参加しており、Microsoft Intune に登録されています。\nSimple Certificate Enrollment Protocol (SCEP) を使用して、証明書をコンピューターに配布する予定です。\n次の表に示すサーバーがあります。\nNDES は下位 CA から証明書を発行します。\n図 (exhibit) に示すように、デバイス構成プロファイルを構成しています。\nSCEP プロファイルを完了する必要があります。\n必要なルート証明書はどのサーバーにありますか？",
    "choices": [
      { "letter": "A", "text": "Server1" },
      { "letter": "B", "text": "Server2" },
      { "letter": "C", "text": "Server3" },
      { "letter": "D", "text": "Server4" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image360.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image361.png", "analysis": "" }
    ]
  },
  {
    "id": 172,
    "question": "【ホットスポット】\n次の表に示すデバイスを含む Microsoft 365 サブスクリプションがあります。\nデバイスを Microsoft Intune に登録する予定です。\n各デバイスが Intune に登録された後、コンプライアンス ポリシーのチェックインはどのくらいの頻度で実行されますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image362.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image363.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image364.png", "analysis": "" }
    ]
  },
  {
    "id": 173,
    "question": "【ホットスポット】\n次の表に示すように、Microsoft Intune に登録されている 2 台の Windows 10 デバイスがあります。\nコンプライアンス ポリシー設定は、図に示すように構成されています。\n8月1日に、図に示すようにコンプライアンス ポリシーを作成します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image365.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image366.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image367.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image368.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image369.png", "analysis": "" }
    ]
  },
  {
    "id": 174,
    "question": "【ホットスポット】\n次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\n以下を特定する必要があります：\n・ワイプ (Wipe) アクションを使用して Intune から削除できるデバイス。\n・ワイプされたデバイスで登録状態と関連するユーザー アカウントを保持できるか。\n何を特定すべきですか？回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image372.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image373.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image374.png", "analysis": "" }
    ]
  },
  {
    "id": 175,
    "question": "【ホットスポット】\n次の表に示すデバイスを含む contoso.com という名前の Azure AD テナントがあります。\nテナントには、次の表に示す Azure AD グループが含まれています。\n次の図に示すように、Autopilot 展開プロファイルを追加します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image375.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image376.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image377.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image378.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image379.png", "analysis": "" }
    ]
  },
  {
    "id": 176,
    "question": "【ホットスポット】\n次の表に示すように、3 つのサイトに Microsoft Deployment Toolkit (MDT) がインストールされています。\n分散ファイル システム (DFS) レプリケーションを使用して、Production という名前の共有にイメージをレプリケートします。\nBootstrap.ini ファイルで次の設定を構成します。\n次の表に示すコンピューターに Windows 10 を展開する予定です。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image380.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image381.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image382.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image383.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image384.png", "analysis": "" }
    ]
  },
  {
    "id": 177,
    "question": "Microsoft Intune に登録された 1,000 台の Android デバイスを含む Microsoft 365 サブスクリプションがあります。\n次の設定を含むアプリ構成ポリシーを作成します：\n・デバイスの登録タイプ：マネージド デバイス (Managed devices)\n・プロファイル タイプ：すべてのプロファイル タイプ\n・プラットフォーム：Android Enterprise\nポリシーに関連付けることができる 2 つのアプリの種類はどれですか？（それぞれの正解は完全なソリューションを提示します。注：正しい選択はそれぞれ 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "Android Enterprise システム アプリ" },
      { "letter": "B", "text": "Web リンク" },
      { "letter": "C", "text": "Android ストア アプリ" },
      { "letter": "D", "text": "マネージド Google Play ストア アプリ" },
      { "letter": "E", "text": "組み込みの Android アプリ" }
    ],
    "answer": "AD",
    "images": []
  },
  {
    "id": 178,
    "question": "Microsoft 365 サブスクリプションがあります。\n次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\nIntune を使用してアプリを展開できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "D",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image385.png", "analysis": "" }
    ]
  },
  {
    "id": 179,
    "question": "【ホットスポット】\nMicrosoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、次の表に示すリソースが含まれています。\nUser1 は Device1 の所有者です。\n次の表に示すように、Microsoft 365 Apps for Windows 10 以降のアプリ タイプを Intune に展開します。\n翌日、アプリの展開結果を確認します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image386.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image387.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image388.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image389.png", "analysis": "" }
    ]
  },
  {
    "id": 180,
    "question": "【ドラッグ＆ドロップ】\nオンプレミス ネットワークには、Active Directory ドメイン サービス (AD DS) ドメインが含まれています。\nVNet1 という名前の仮想ネットワークを含む Azure サブスクリプションがあります。VNet1 には 5 つの仮想マシンが含まれており、オンプレミス ネットワークには接続されていません。\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nWindows 365 Enterprise ライセンスを購入します。\nCloud PC を展開する必要があります。このソリューションは、次の要件を満たす必要があります：\n・すべてのユーザーがいつでも制限なしに Cloud PC にアクセスできること。\n・ユーザーが VNet1 上の仮想マシンに接続できること。\nWindows 365 のプロビジョニング ポリシーをどのように構成すべきですか？回答するには、適切なオプションを正しい設定にドラッグします。各オプションは、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image392.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image393.png", "analysis": "" }
    ]
  },
  {
    "id": 181,
    "question": "Hyper-V ホストがあります。ホストには、次の表に示す Windows 10 を実行する仮想マシンが含まれています。\nWindows 11 にアップグレードできる仮想マシンはどれですか？",
    "choices": [
      { "letter": "A", "text": "VM1 のみ" },
      { "letter": "B", "text": "VM2 のみ" },
      { "letter": "C", "text": "VM2 および VM3 のみ" },
      { "letter": "D", "text": "VM1, VM2, および VM3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image396.png", "analysis": "" }
    ]
  },
  {
    "id": 182,
    "question": "【ホットスポット】\nネットワークには Active Directory ドメインが含まれています。\nドメインには、Windows 10 を実行する Computer1、Computer2、Computer3、Computer4 という 4 台のコンピューターが含まれています。\n次のアクションを実行します：\n・Computer1 で Windows Admin Center をインストールし、TCP ポート 80、443、および 6516 経由の受信通信を許可するように Windows Defender ファイアウォールを構成する。\n・Computer2 で Enable-PSRemoting コマンドレットを実行する。\n・Computer3 で Windows リモート管理 (WinRM) トラフィックを許可するように Windows Defender ファイアウォールを構成する。\n・Computer4 で winrm quickconfig コマンドを実行する。\nWindows Admin Center を使用してコンピューターをリモートで管理する必要があります。\nどのコンピューターから Windows Admin Center に接続でき、どのコンピューターを Windows Admin Center を使用して管理できますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image394.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image395.png", "analysis": "" }
    ]
  },
  {
    "id": 183,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft Intune を含む Microsoft 365 E5 サブスクリプションがあります。\nサブスクリプションには、Intune に登録されており、個人所有の仕事用プロファイルを持つ Android Enterprise デバイスが含まれています。すべての Android デバイスは Group1 という名前のグループのメンバーです。\nAndroid デバイスに最新のセキュリティ プロバイダーがない場合に、エンド ユーザーと Intune 管理者に電子メール メッセージが送信されるようにする必要があります。\nMicrosoft Intune 管理センターから順番に実行すべきアクションはどれですか？回答するには、適切なアクションを正しい順序でドラッグします。各アクションは、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image404.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image405.png", "analysis": "" }
    ]
  },
  {
    "id": 184,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあります。\nMicrosoft Intune を使用して管理する予定の 25 台の Microsoft Surface Hub デバイスがあります。\n次の要件を満たすようにデバイスを構成する必要があります：\n・Windows Hello for Business を有効にする。\n・ユーザーが未確認のファイルを実行するのをブロックするように Microsoft Defender SmartScreen を構成する。\n各要件に対してどのプロファイル タイプ テンプレートを使用すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image406.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image407.png", "analysis": "" }
    ]
  },
  {
    "id": 185,
    "question": "【ホットスポット】\n次の表に示すセキュリティ グループを含む Microsoft 365 E5 サブスクリプションがあります。\nサブスクリプションには、次の表に示すように、Windows 11、バージョン 21H2 を実行するデバイスが含まれています。\n次の表に示すように、Deployment1 という名前の機能更新プログラム (feature update) 展開プロファイルがあります。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image408.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image409.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image410.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image411.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image412.png", "analysis": "" }
    ]
  },
  {
    "id": 186,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nIntune を使用して Windows 11 デバイスを管理します。\nWindows ローカル管理者パスワード ソリューション (Windows LAPS) を実装する必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "構成プロファイル" },
      { "letter": "B", "text": "アカウント保護ポリシー" },
      { "letter": "C", "text": "アプリ保護ポリシー" },
      { "letter": "D", "text": "デバイス コンプライアンス ポリシー" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 187,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。\nカスタム アプリを Android デバイスに展開する必要があります。アプリは APK ファイル形式を使用します。\n展開にはどの種類のアプリを選択すべきですか？",
    "choices": [
      { "letter": "A", "text": "組み込み (built-in)" },
      { "letter": "B", "text": "Android ストア" },
      { "letter": "C", "text": "マネージド Google Play" },
      { "letter": "D", "text": "基幹業務 (LOB)" },
      { "letter": "E", "text": "Web リンク" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 188,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべてのデバイスの管理に Microsoft Intune を使用します。\nApp1.exe という名前の Win32 アプリを展開用に準備する必要があります。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune 管理センターから、アプリ構成ポリシーを作成する。" },
      { "letter": "B", "text": "App1.exe を INTUNEWIN 形式に変更する。" },
      { "letter": "C", "text": "Microsoft 365 Apps 管理センターから、展開構成を作成する。" },
      { "letter": "D", "text": "App1.exe を Azure Blob Storage にアップロードする。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 189,
    "question": "【ホットスポット】\nオンプレミス ネットワークには、contoso.com という名前の Active Directory ドメインが含まれています。ドメインには、Admin1 という名前のユーザー アカウントと、次の表に示すリソースが含まれています。\nMicrosoft 365 E5 サブスクリプションがあります。\ncontoso.com と同期する Microsoft Entra テナントがあります。\nAdmin1 は Windows Autopilot を使用して 100 台の Windows 11 デバイスを展開する予定です。展開は次の要件を満たす必要があります：\n・デバイスは展開中に Microsoft Entra ハイブリッド参加済みである必要がある。\n・コンピューター オブジェクトは OU1 に作成される必要がある。\n展開をサポートするように Server1 と Active Directory の委任を構成する必要があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image399.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image400.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image401.png", "analysis": "" }
    ]
  },
  {
    "id": 190,
    "question": "Windows 365 Enterprise ライセンスを持つ Microsoft 365 サブスクリプションがあります。\nCloud PC のテンプレートとしてカスタムの Windows 11 イメージを使用する予定です。\nWindows 11 を実行し、次の構成を持つ Hyper-V 仮想マシンがあります：\n・名前：VM1\n・ディスク サイズ：64 GB\n・ディスク形式：VHDX\n・ディスクの種類：固定サイズ\n・世代：第 2 世代 (Generation 2)\nVM1 をカスタム イメージのソースとして使用できることを確認する必要があります。\nVM1 で最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "ディスクの種類を「容量可変 (Dynamically expanding)」に変更する。" },
      { "letter": "B", "text": "ディスク形式を VHD に変更する。" },
      { "letter": "C", "text": "世代を第 1 世代 (Generation 1) に変更する。" },
      { "letter": "D", "text": "ディスク サイズを増やす。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 191,
    "question": "オンプレミス ネットワークには、contoso.com という名前の Active Directory ドメイン サービス (AD DS) ドメインが含まれています。\nドメインには dc1.contoso.com という名前のドメイン コントローラーが含まれています。\nMicrosoft Intune Suite を使用する Microsoft 365 E5 サブスクリプションがあります。\n次の表に示すリソースを含む Azure サブスクリプションがあります。\nサブスクリプションには、次の表に示す仮想ネットワークが含まれています。\nWindows 365 Enterprise Cloud PC を展開する予定です。\nMicrosoft Entra ハイブリッド参加を使用する Azure ネットワーク接続 (ANC) を作成する必要があります。\nANC に使用できる仮想ネットワークはどれですか？",
    "choices": [
      { "letter": "A", "text": "VNet1 のみ" },
      { "letter": "B", "text": "VNet2 のみ" },
      { "letter": "C", "text": "VNet3 のみ" },
      { "letter": "D", "text": "VNet1 および VNet2" },
      { "letter": "E", "text": "VNet1 および VNet3" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image402.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image403.png", "analysis": "" }
    ]
  },
  {
    "id": 192,
    "question": "【ホットスポット】\nMicrosoft Intune を含む Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには Group1 という名前のグループが含まれています。Group1 には Intune に登録されたデバイスが含まれています。\nIntune でリモート ヘルプを展開します。\nサポート管理者が Group1 のデバイスからのみリモート ヘルプ セッションに参加できるようにリモート ヘルプを構成する必要があります。\nどの種類の Microsoft Entra オブジェクトを作成し、どの種類のポリシーを構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image415.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image416.png", "analysis": "" }
    ]
  },
  {
    "id": 193,
    "question": "Microsoft Intune を含み、Admin1 という名前のユーザーが含まれる Microsoft 365 E5 サブスクリプションがあります。\nAdmin1 は Microsoft Intune 管理センターを使用して、次のタスクを実行する必要があります：\n・Intune を使用してアプリとポリシーを作成し、ユーザーとデバイスに割り当てる。\n・Windows 365 Cloud PC のプロビジョニング ポリシーを作成、割り当て、削除する。\n必要なロールを Admin1 に割り当てる必要があります。ソリューションは次の要件を満たす必要があります：\n・最小特権の原則に従う。\n・管理作業を最小限に抑える。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Admin1 にヘルプデスク オペレーター ロールを割り当てる。" },
      { "letter": "B", "text": "Admin1 に Cloud PC 閲覧者 ロールを割り当てる。" },
      { "letter": "C", "text": "Admin1 に Cloud PC 管理者 ロールを割り当てる。" },
      { "letter": "D", "text": "カスタムの Microsoft Entra ロールを作成し、そのロールを Admin1 に割り当てる。" },
      { "letter": "E", "text": "カスタムの Intune ロールを作成し、そのロールを Admin1 に割り当てる。" }
    ],
    "answer": "E",
    "images": []
  },
  {
    "id": 194,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。サブスクリプションには、Intune に登録された Windows 11 デバイスが含まれています。サブスクリプションには、Department1、Department2、および Department3 という名前の 3 つのグループが含まれています。\nMicrosoft 365 Apps を Windows 11 デバイスに展開する必要があります。ソリューションは次の要件を満たす必要があります：\n・Department1 および Department2 のユーザーは、Microsoft Project と Visio を含む完全な Microsoft 365 Apps スイートを受け取る必要がある。\n・Department3 のユーザーは、Microsoft Project を含む完全な Microsoft 365 Apps スイートを受け取る必要があるが、Visio は含まない。\n・その他のすべてのユーザーは、Microsoft Project または Visio を含まない完全な Microsoft 365 Apps スイートを受け取る必要がある。\n作成すべき展開の最小数はいくつですか？",
    "choices": [
      { "letter": "A", "text": "1" },
      { "letter": "B", "text": "2" },
      { "letter": "C", "text": "3" },
      { "letter": "D", "text": "4" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 195,
    "question": "Microsoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。\nログ データを Log Analytics に送信するように Intune を構成します。\nIntune への登録に失敗したデバイスに関するイベントを確認する必要があります。\n何を監視すべきですか？",
    "choices": [
      { "letter": "A", "text": "運用ログ (operational logs)" },
      { "letter": "B", "text": "監査ログ (audit logs)" },
      { "letter": "C", "text": "Intune デバイス ログ" },
      { "letter": "D", "text": "デバイス コンプライアンスの組織ログ" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 196,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。サブスクリプションには、企業所有の完全に管理された Android Enterprise デバイスが含まれています。\nProfile1 という名前のデバイス制限プロファイル タイプを持つ構成プロファイルを展開する予定です。Profile1 は、システム更新プログラムのメンテナンス ウィンドウを割り当てます。\nProfile1 の [構成設定] から何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス エクスペリエンス" },
      { "letter": "B", "text": "全般 (General)" },
      { "letter": "C", "text": "接続" },
      { "letter": "D", "text": "電源設定" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 197,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあります。\nMicrosoft Intune を使用して Windows 365 Cloud PC デバイスを管理します。\nWindows 365 セキュリティ ベースラインを Cloud PC デバイスに展開する必要があります。ソリューションは次の要件を満たす必要があります：\n・データ実行防止をブロックする。\n・仮想化ベースのセキュリティ (VBS) とセキュア ブートを有効にする。\nWindows 365 セキュリティ ベースライン プロファイルで何を構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image417.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image418.png", "analysis": "" }
    ]
  },
  {
    "id": 198,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows デバイスは Microsoft Intune に登録されています。\nPolicy1 という名前のアプリ保護ポリシーを作成し、デバイスに Policy1 を適用する必要があります。\nPolicy1 を使用して何を保護できますか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Outlook" },
      { "letter": "B", "text": "Microsoft OneDrive" },
      { "letter": "C", "text": "Microsoft Teams" },
      { "letter": "D", "text": "Microsoft Edge" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 199,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべてのデバイスは Microsoft Intune に登録されています。\n多要素認証 (MFA) を要求する Policy1 という名前の条件付きアクセス ポリシーを作成します。\nPolicy1 が非準拠としてマークされたデバイスにのみ適用されるようにする必要があります。\nPolicy1 のどの設定を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "[条件] の下の [デバイス プラットフォーム]" },
      { "letter": "B", "text": "[条件] の下の [デバイスのフィルター]" },
      { "letter": "C", "text": "ターゲット リソース" },
      { "letter": "D", "text": "付与 (Grant)" },
      { "letter": "E", "text": "セッション" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 200,
    "question": "【ホットスポット】\nMicrosoft Intune を使用して次の表に示すデバイスを管理する Microsoft 365 テナントがあります。\n次の要件を満たすコンプライアンス ソリューションを展開する必要があります：\n・コンプライアンス ポリシーを満たしていないデバイスを「非準拠」としてマークする\n・非準拠デバイスをリモートでロックする\n必要なコンプライアンス ポリシーの最小数はいくつですか？また、リモート ロック アクションをサポートするデバイスはどれですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image424.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image425.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image426.png", "analysis": "" }
    ]
  },
{
    "id": 201,
    "question": "【ホットスポット】\nネットワークには、オンプレミスの Active Directory Domain Services (AD DS) ドメインが含まれています。\nMicrosoft Intune を含み、AD DS ドメインと同期する Microsoft 365 E5 サブスクリプションがあります。\nWindows ローカル管理者パスワード ソリューション (Windows LAPS) が Microsoft Entra ID で有効になっています。\nサブスクリプションには、次の表に示すカスタム ロールがあります。\nMicrosoft Entra には、次の表に示すユーザーが含まれています。\n次の表に示すデバイスがあります。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image427.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image428.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image429.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image430.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image431.png", "analysis": "" }
    ]
  },
  {
    "id": 202,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、Microsoft Intune を使用しています。\n50 台の Windows デバイスを購入します。\nMicrosoft Entra 参加済みデバイスの Intune への自動登録を構成します。\nプロビジョニング パッケージを使用して、デバイスを Microsoft Entra に参加させる必要があります。\nプロビジョニング パッケージを作成するには何を使用すべきですか？また、一括登録にパッケージを使用できる最大期間はどれくらいですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image432.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image433.png", "analysis": "" }
    ]
  },
  {
    "id": 203,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nDevice1 という名前のデバイスに対する自動調査および対応 (AIR) の修復レベルを構成して、すべてのフォルダーで承認を必要とするようにする必要があります。\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "セキュリティ グループ" },
      { "letter": "B", "text": "デバイス グループ" },
      { "letter": "C", "text": "管理単位 (administrative unit)" },
      { "letter": "D", "text": "アクション グループ" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 204,
    "question": "Microsoft 365 E5 サブスクリプションがあり、次の表に示すデバイスが含まれています。\nすべてのデバイスは Microsoft Intune に登録されており、Microsoft 365 Apps for enterprise がインストールされています。\nMicrosoft 365 のクラウド ポリシー サービスを使用して Microsoft 365 Apps for enterprise を管理できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device2 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "E",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image448.png", "analysis": "" }
    ]
  },
  {
    "id": 205,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、Microsoft Intune を使用しています。サブスクリプションには、オンプレミスの Active Directory Domain Services (AD DS) ドメインと同期する Microsoft Entra テナントが含まれています。テナントでは Windows ローカル管理者パスワード ソリューション (Windows LAPS) が有効になっています。\n次の表に示す Windows デバイスがあります。\n次の表に示すように構成されたエンドポイント セキュリティ ポリシーがあります。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image441.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image442.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image443.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image444.png", "analysis": "" }
    ]
  },
  {
    "id": 206,
    "question": "【ホットスポット】\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\nMicrosoft Intune 管理センターから、次の表に示すアプリを追加します。\n次の要件を満たすようにアプリを構成する必要があります：\n・App1 は、マーケティング部門のすべてのユーザーに対して、Intune に登録されている Windows 11 デバイスに自動的にインストールされる必要があります。ユーザーが新しいデバイスを受け取った場合も、App1 は自動的にインストールされる必要があります。\n・App2 は、人事部門の任意のユーザーが、Intune に登録されていない個人の Android デバイスからダウンロードできるようにする必要があります。\n各アプリに対してどの割り当てを構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image445.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image446.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image447.png", "analysis": "" }
    ]
  },
  {
    "id": 207,
    "question": "Microsoft 365 サブスクリプションがあります。\nWindows 10 を実行し、Microsoft Intune に登録されている 10 台のコンピューターがあります。\nMicrosoft 365 Apps for enterprise スイートをすべてのコンピューターに展開する必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune 管理センターから、アプリを追加する。" },
      { "letter": "B", "text": "Microsoft Intune 管理センターから、Windows 10 以降のデバイス プロファイルを作成する。" },
      { "letter": "C", "text": "Microsoft Entra 管理センターから、エンタープライズ アプリケーションを追加する。" },
      { "letter": "D", "text": "Microsoft Entra 管理センターから、アプリの登録を追加する。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 208,
    "question": "contoso.com という名前の Microsoft Entra テナントがあります。\nWindows 11 を実行する Computer1 という名前のワークグループ コンピューターがあります。\nComputer1 を contoso.com に追加する必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "設定アプリ (Settings app)" },
      { "letter": "B", "text": "コンピューターの管理" },
      { "letter": "C", "text": "netdom.exe" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 209,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあります。すべてのデバイスは Microsoft Intune に登録されています。\n5 台の Windows 11 デバイスを含む Group1 という名前のデバイス グループがあります。\nGroup1 のデバイスが、Windows 11 の新しいビルドが一般公開される前に、その新しいビルドを自動的に受け取るようにする必要があります。\nIntune で何を構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image439.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image440.png", "analysis": "" }
    ]
  },
  {
    "id": 210,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Intune に登録されている企業所有の Android Enterprise デバイスのオペレーティング システムの更新を管理する必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "コンプライアンス ポリシー" },
      { "letter": "B", "text": "Android FOTA 展開" },
      { "letter": "C", "text": "エンドポイント セキュリティ ポリシー" },
      { "letter": "D", "text": "構成プロファイル" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 211,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows デバイスは Microsoft Intune に登録されています。\nすべてのデバイスに リモート ヘルプ (Remote Help) アプリを展開する必要があります。ソリューションは、管理作業を最小限に抑える必要があります。\nどの種類のアプリを展開すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows アプリ (Win32)" },
      { "letter": "B", "text": "基幹業務 (LOB)" },
      { "letter": "C", "text": "Microsoft 365" },
      { "letter": "D", "text": "Microsoft ストア" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 212,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft Intune に登録されている次のデバイスを含む Microsoft 365 サブスクリプションがあります：\n・Device1 という名前の企業所有の Windows デバイス\n・Device2 という名前の個人所有の Android デバイス\n各デバイスでリモート アクションを使用する必要があります。ソリューションは次の要件を満たす必要があります：\n・Device1 を工場出荷時のデフォルト設定に戻して、デバイスを再利用 (Repurpose) する。\n・Device2 から企業データのみを削除し、デバイスがチェックインしたときに Intune からデバイスを削除する。\n各デバイスでどのリモート アクションを使用すべきですか？回答するには、適切なリモート アクションを正しいデバイスにドラッグします。各リモート アクションは、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image460.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image461.png", "analysis": "" }
    ]
  },
  {
    "id": 213,
    "question": "【ホットスポット】\nMicrosoft Intune と Microsoft Defender for Endpoint を含む Microsoft 365 サブスクリプションがあります。\nユーザーは Windows 11 を実行するデバイスを持っています。\nDefender for Endpoint から Intune への接続を展開します。\nデバイスが Intune に登録されたときに、そのデバイスが Defender for Endpoint に自動的にオンボードされるようにする必要があります。\n何を構成すべきですか？また、どのポータルを使用すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image476.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image477.png", "analysis": "" }
    ]
  },
  {
    "id": 214,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft 365 サブスクリプションがあります。\nデバイスを Microsoft Intune に登録する予定です。\n次の要件を満たす必要があります：\n・特定の国際モバイル機器識別番号 (IMEI) を持つデバイスの登録のみを許可する。\n・最大 1,000 台のデバイスの登録と管理をサポートする。\n各要件に対してどの登録設定を構成すべきですか？回答するには、適切な設定を正しい要件にドラッグします。各設定は、1 回、複数回、またはまったく使用しない場合があります。ペイン間で分割バーをドラッグするか、コンテンツを表示するためにスクロールする必要がある場合があります。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image482.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image483.png", "analysis": "" }
    ]
  },
  {
    "id": 215,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、Microsoft Intune を使用しています。\n次の表に示すように、新しい Android デバイスを展開する必要があります。\n各デバイスにどの登録プロファイルを使用すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image469.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image470.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image471.png", "analysis": "" }
    ]
  },
  {
    "id": 216,
    "question": "Microsoft 365 サブスクリプションがあり、Microsoft Intune Suite を使用しています。\nサブスクリプションには、次の表に示すように Intune に登録されたデバイスが含まれています。\nデバイス クエリ (Device query) をサポートしているデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device2 のみ" },
      { "letter": "D", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image472.png", "analysis": "" }
    ]
  },
  {
    "id": 217,
    "question": "Microsoft Intune に登録されたデバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nデバイス クエリ (Device query) を使用して、デバイスの状態に関するオンデマンド情報を提供する予定です。このソリューションはコストを最小限に抑える必要があります。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "「診断の収集 (Collect diagnostics)」リモート アクションを使用する。" },
      { "letter": "B", "text": "Intune Advanced Analytics アドオンを購入する。" },
      { "letter": "C", "text": "Intune Suite アドオンを購入する。" },
      { "letter": "D", "text": "デバイスをエンドポイント分析にオンボードする。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 218,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、次の表に示すデバイスが含まれています。\nサブスクリプションには、次の表に示す動的デバイス グループが含まれています。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image478.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image479.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image480.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image481.png", "analysis": "" }
    ]
  },
  {
    "id": 219,
    "question": "【ホットスポット】\nMicrosoft Entra テナントとオンプレミスの Active Directory Domain Services (AD DS) ドメインを含むハイブリッド環境があります。環境には、次の表に示すデバイスが含まれています。\n各デバイスが使用できる Microsoft Entra 参加 (join) の種類はどれですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image484.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image485.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image486.png", "analysis": "" }
    ]
  },
  {
    "id": 220,
    "question": "Microsoft Entra テナントがあり、次の表に示すデバイスが含まれています。\nエンドポイント権限管理 (EPM: Endpoint Privilege Management) を実装できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device3, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image473.png", "analysis": "" }
    ]
  },
  {
    "id": 221,
    "question": "【ホットスポット】\nMicrosoft Intune に登録されている Windows デバイスを含む Microsoft 365 E5 テナントがあります。デバイスは次の表のとおりです。\nElevationSettings1 という名前のエンドポイント権限管理 (EPM) 昇格設定ポリシーを作成します。このポリシーには次の設定があります：\n・エンドポイント権限管理：有効\n・デフォルトの昇格の応答：ユーザーの確認を要求する\n・検証：ビジネス上の正当な理由 (Business justification)\n・割り当て：Group1\n\n各デバイスには、管理者のみが実行できる File1.exe という名前のファイルが含まれています。\n\nElevationRules1 という名前の EPM 昇格ルール ポリシーを作成します。このポリシーには次の設定があります：\n・ルール名：Rule1\n・昇格タイプ：自動 (Automatic)\n・ファイル名：File1.exe\n・ファイル ハッシュ：(指定されたハッシュ)\n・割り当て：Group2\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image490.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image491.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image492.png", "analysis": "" }
    ]
  },
  {
    "id": 222,
    "question": "Microsoft 365 サブスクリプションがあります。\nデバイスの管理に Microsoft Intune を使用します。\nApp1 と App2 という名前の 2 つのアプリをすべての Windows デバイスに展開する予定です。App1 は App2 の前にインストールされる必要があります。\nIntune 管理センターから、2 つの Windows アプリ (Win32) を作成して展開します。\nすべてのデバイスで App1 が App2 の前にインストールされるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "App1 の展開構成" },
      { "letter": "B", "text": "動的デバイス グループ" },
      { "letter": "C", "text": "App2 の展開構成" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 223,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nデバイス クエリ (Device query) を使用して、Microsoft Intune を使用して管理されているすべてのデバイスに関する情報を収集する必要があります。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows ライセンス認証 (license verification) を有効にする。" },
      { "letter": "B", "text": "デバイスを Microsoft Defender for Endpoint にオンボードする。" },
      { "letter": "C", "text": "デバイスをエンドポイント分析 (Endpoint analytics) にオンボードする。" },
      { "letter": "D", "text": "すべてのデバイスに対するコンプライアンス ポリシーを作成する。" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 224,
    "question": "Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune を使用しています。\nすべての Windows デバイスに個人用ユーザー証明書を展開する Microsoft Cloud PKI ソリューションを実装する予定です。\nソリューションをサポートするために必要な構成プロファイルの最小数はいくつですか？",
    "choices": [
      { "letter": "A", "text": "1" },
      { "letter": "B", "text": "2" },
      { "letter": "C", "text": "3" },
      { "letter": "D", "text": "4" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 225,
    "question": "contoso.com という名前の Microsoft Entra テナントがあり、Contoso Help Desk という名前のグループが含まれています。\nWindows デバイスが contoso.com に参加するたびに、Contoso Help Desk がローカルの Administrators グループに確実に追加されるようにする必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Contoso Help Desk にクラウド デバイス管理者 (Cloud Device Administrator) ロールを割り当てる。" },
      { "letter": "B", "text": "Contoso Help Desk に Microsoft Entra 参加済みデバイス ローカル管理者 (Microsoft Entra Joined Device Local Administrator) ロールを割り当てる。" },
      { "letter": "C", "text": "Enterprise State Roaming の設定を構成する。" },
      { "letter": "D", "text": "contoso.com で Microsoft Entra ローカル管理者パスワード ソリューション (LAPS) を有効にする。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 226,
    "question": "【ドラッグ＆ドロップ】\ncontoso.com という名前の Microsoft Entra テナントにリンクされた Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには User1 という名前のユーザーと、Device1 という名前の新しい Windows 11 デバイスが含まれています。\nUser1 は Device1 を Microsoft Intune に自動的に登録する必要があります。\n他のすべてのユーザーが自動登録を使用できないようにする必要があります。\n順番に実行すべき 3 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image464.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image465.png", "analysis": "" }
    ]
  },
  {
    "id": 227,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、Device1、Device2、および Device3 という名前の 3 台の Windows デバイスが含まれています。\n各デバイスには、App1 と App2 という名前の 2 つのアプリが含まれています。\nデバイスは Microsoft Intune を使用して管理されています。\nサブスクリプションには、次の表に示すグループが含まれています。\nPolicy1 という名前のエンドポイント権限管理 (EPM) 昇格設定ポリシーがあり、次の設定が構成されています：\n・エンドポイント権限管理：有効\n・デフォルトの昇格の応答：ユーザーの確認を要求する\n・検証：Windows 認証\n・割り当て：Group1, Group2\n\nRulesPolicy1 という名前のエンドポイント権限管理 昇格ルール ポリシーを作成し、次の設定を構成します：\n・ルール名：Rule1\n・昇格タイプ：自動 (Automatic)\n・子プロセスの動作：すべて拒否 (Deny all)\n・ファイル名：App1.exe\n・割り当て：Group1\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image466.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image467.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image468.png", "analysis": "" }
    ]
  },
  {
    "id": 228,
    "question": "Group1 という名前のグループを含む Microsoft 365 E5 サブスクリプションがあります。\nGroup1 のメンバーのみがデバイスを Microsoft Entra テナントに参加 (join) できるようにする必要があります。\nMicrosoft Entra 管理センターで何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス設定 (Device settings)" },
      { "letter": "B", "text": "モビリティ (Mobility)" },
      { "letter": "C", "text": "Enterprise State Roaming" },
      { "letter": "D", "text": "ユーザー設定 (User settings)" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 229,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、次の表に示すデバイスが含まれています。\nGroup1 と Group2 という名前の 2 つの動的デバイス グループを作成する必要があります。ソリューションは次の要件を満たす必要があります：\n・Group1 には Device1 と Device2 のみを含める必要があります。\n・Group2 には Device1 と Device3 のみを含める必要があります。\n各グループにどのデバイス メンバーシップ ルールを構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image487.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image488.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image489.png", "analysis": "" }
    ]
  },
  {
    "id": 230,
    "question": "contoso.com という名前の Microsoft Entra テナントがあり、Device1 という名前の Windows 11 デバイスと User1 という名前のユーザーが含まれています。\nUser1 は Device1 を contoso.com に登録 (register) します。\nDevice1 が contoso.com に登録された後、どの機能が利用可能になりますか？",
    "choices": [
      { "letter": "A", "text": "シングル サインオン (SSO) を使用したクラウド リソースへの認証" },
      { "letter": "B", "text": "コンプライアンス ポリシーの適用" },
      { "letter": "C", "text": "ソフトウェア更新プログラムの適用" },
      { "letter": "D", "text": "ハード ドライブ暗号化の適用" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 231,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\n名前に Marketing という単語が含まれるすべてのデバイスを含める動的デバイス グループを作成する必要があります。\nどのデバイス メンバーシップ ルールを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "(device.displayName -in \"Marketing\")" },
      { "letter": "B", "text": "(device.displayName -in \"*Marketing*\")" },
      { "letter": "C", "text": "(device.displayName -contains \"Marketing\")" },
      { "letter": "D", "text": "(device.displayName -contains \"*Marketing*\")" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 232,
    "question": "注：このセクションには、同じシナリオと問題を持つ1つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示しています。解決策が記載された目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決する可能性もあれば、セット内のどの解決策も問題を解決しない可能性もあります。\nこのセクションの質問に回答した後は、戻ることができません。その結果、これらの質問はレビュー画面に表示されません。\n\ncontoso.com という名前の Microsoft Entra テナントがあります。\nDevice1 という名前の Android デバイスを購入します。\nDevice1 を contoso.com に登録 (register) する必要があります。\n\n解決策：Microsoft Authenticator アプリを使用する。\n\nこれは目標を満たしていますか？",
    "choices": [
      { "letter": "A", "text": "はい" },
      { "letter": "B", "text": "いいえ" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 233,
    "question": "注：このセクションには、同じシナリオと問題を持つ1つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示しています。解決策が記載された目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決する可能性もあれば、セット内のどの解決策も問題を解決しない可能性もあります。\nこのセクションの質問に回答した後は、戻ることができません。その結果、これらの質問はレビュー画面に表示されません。\n\nMicrosoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加済みで Microsoft Intune に登録されているデバイスが含まれています。\nUser1 という名前のユーザーを作成します。\nUser1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。\n\n解決策：Microsoft Entra 管理センターから、User1 に ヘルプデスク管理者 (Helpdesk Administrator) ロールを割り当てる。\n\nこれは目標を満たしていますか？",
    "choices": [
      { "letter": "A", "text": "はい" },
      { "letter": "B", "text": "いいえ" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 234,
    "question": "注：このセクションには、同じシナリオと問題を持つ1つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示しています。解決策が記載された目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決する可能性もあれば、セット内のどの解決策も問題を解決しない可能性もあります。\nこのセクションの質問に回答した後は、戻ることができません。その結果、これらの質問はレビュー画面に表示されません。\n\nMicrosoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加済みで Microsoft Intune に登録されているデバイスが含まれています。\nUser1 という名前のユーザーを作成します。\nUser1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。\n\n解決策：Microsoft Intune 管理センターから、User1 に ヘルプデスク オペレーター (Help Desk Operator) ロールを割り当てる。\n\nこれは目標を満たしていますか？",
    "choices": [
      { "letter": "A", "text": "はい" },
      { "letter": "B", "text": "いいえ" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 235,
    "question": "注：このセクションには、同じシナリオと問題を持つ1つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示しています。解決策が記載された目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決する可能性もあれば、セット内のどの解決策も問題を解決しない可能性もあります。\nこのセクションの質問に回答した後は、戻ることができません。その結果、これらの質問はレビュー画面に表示されません。\n\nMicrosoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加済みで Microsoft Intune に登録されているデバイスが含まれています。\nUser1 という名前のユーザーを作成します。\nUser1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。\n\n解決策：Microsoft Intune 管理センターから、User1 に エンドポイント セキュリティ マネージャー (Endpoint Security Manager) ロールを割り当てる。\n\nこれは目標を満たしていますか？",
    "choices": [
      { "letter": "A", "text": "はい" },
      { "letter": "B", "text": "いいえ" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 236,
    "question": "Device1 という名前のデバイスを含む Microsoft Entra テナントがあります。Device1 は Microsoft Entra 参加済みです。\nDevice1 の Microsoft Entra ID プライマリ更新トークン (PRT: primary refresh token) を検証する必要があります。\nどのコマンドを実行すべきですか？",
    "choices": [
      { "letter": "A", "text": "klist tgt" },
      { "letter": "B", "text": "dsregcmd /status" },
      { "letter": "C", "text": "query session" },
      { "letter": "D", "text": "sc.exe query state=all" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 237,
    "question": "ネットワークには、contoso.com という名前の Microsoft Entra テナントと同期する、オンプレミスの Active Directory Domain Services (AD DS) ドメインが含まれています。\n100 台の Windows 11 デバイスを contoso.com に展開する必要があります。ソリューションは次の要件を満たす必要があります：\n・デバイスから、ユーザーが資格情報を求められることなくオンプレミスのファイル サーバーの共有にアクセスできるようにする。\n・デバイスの ID 管理におけるオンプレミス インフラストラクチャへの依存を最小限に抑える。\nどの参加 (join) の種類を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Active Directory ドメイン参加済み" },
      { "letter": "B", "text": "Microsoft Entra ハイブリッド参加済み" },
      { "letter": "C", "text": "Microsoft Entra 参加済み" },
      { "letter": "D", "text": "Microsoft Entra 登録済み" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 238,
    "question": "Microsoft 365 サブスクリプションがあり、次の表に示すように Microsoft Intune に登録されたデバイスが含まれています。\n一括デバイス アクションを使用してカスタム通知を送信する必要があります。\nどのデバイスにカスタム通知を送信できますか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device2 のみ" },
      { "letter": "C", "text": "Device3 のみ" },
      { "letter": "D", "text": "Device2 および Device3 のみ" },
      { "letter": "E", "text": "Device1, Device2, および Device3" }
    ],
    "answer": "D",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image505.png", "analysis": "" }
    ]
  },
  {
    "id": 239,
    "question": "【ホットスポット】\nMicrosoft Intune Suite を使用する Microsoft 365 E5 サブスクリプションがあります。\n次の要件を満たすソリューションを推奨する必要があります：\n・管理者は、ユーザーのデバイスでリモート タスクを実行するために、画面共有セッションでの安全な接続を使用する必要がある。\n・管理者は、ユーザーのデバイスでリモート タスクを実行するために昇格されたアクセス権を持つ必要がある。\n・ソリューションは最小特権の原則に従う必要がある。\n各要件の推奨事項に何を含めるべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image508.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image509.png", "analysis": "" }
    ]
  },
  {
    "id": 240,
    "question": "【ホットスポット】\ncontoso.com という名前の Microsoft Entra テナントがあり、次の表に示すユーザーが含まれています。\ncontoso.com に対して、次の Microsoft Entra 参加および登録設定を構成します：\n・ユーザーはデバイスを Microsoft Entra に参加させることができます：選択済み (Selected)\n　- 選択済み：Group1\n次の表に示すデバイスを購入します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image516.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image517.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image518.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image519.png", "analysis": "" }
    ]
  },
{
    "id": 241,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあり、次の表に示すように Microsoft Intune に登録されたデバイスが含まれています。\n次のリモート アクションをデバイスで使用する予定です：\n・診断の収集 (Collect diagnostics)\n・デバイスの検索 (Locate device)\n・リモート ロック (Remote lock)\n各デバイスはどのリモート アクションをサポートしていますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image510.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image511.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image512.png", "analysis": "" }
    ]
  },
  {
    "id": 242,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\n次の種類のデバイスを購入します：\n・Windows\n・Android\n・iOS\nデバイスを Microsoft Intune に登録する予定です。\n登録制限を構成する必要があります。\nデバイスの製造元 (device manufacturer) の制限を構成できるデバイスの種類はどれですか？",
    "choices": [
      { "letter": "A", "text": "Android のみ" },
      { "letter": "B", "text": "Windows のみ" },
      { "letter": "C", "text": "Android および iOS のみ" },
      { "letter": "D", "text": "Windows および iOS のみ" },
      { "letter": "E", "text": "Windows, Android, および iOS" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 243,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Cloud PKI を使用して、個人のユーザー証明書をすべての Windows デバイスに展開する必要があります。\n順番に実行すべき 4 つのアクションはどれですか？回答するには、適切なアクションをアクションのリストから回答領域に移動し、正しい順序で配置します。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image506.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image507.png", "analysis": "" }
    ]
  },
  {
    "id": 244,
    "question": "【ホットスポット】\nDevice1 という名前の Windows デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nDevice1 は、ローカル スクリプトを使用して Microsoft Defender for Endpoint にオンボードされました。\nDevice1 の管理には Microsoft Intune を使用します。\nコンプライアンス ポリシーでマシンのリスク スコアを使用する予定です。\nマシンのリスク スコアが Defender for Endpoint からのデータに基づいて評価されるようにする必要があります。\n何をすべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image520.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image521.png", "analysis": "" }
    ]
  },
  {
    "id": 245,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\n電子メール メッセージの署名と暗号化をサポートするために Microsoft Cloud PKI を使用する予定です。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "ルート証明機関 (CA) を作成する。" },
      { "letter": "B", "text": "デバイス コンプライアンス ポリシーを作成する。" },
      { "letter": "C", "text": "デバイス構成の SCEP 証明書プロファイルを作成する。" },
      { "letter": "D", "text": "デバイス構成の信頼された証明書プロファイルを作成する。" },
      { "letter": "E", "text": "発行元証明機関 (CA) を作成する。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 246,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあり、Microsoft Intune を使用しています。\n次の図に示す Endpoint Privilege Management (EPM) の昇格設定ポリシーがあります。\nEPM の昇格ルール ポリシーは構成されていません。\n図に示されている情報に基づいて、各ステートメントを完成させる回答の選択肢をドロップダウン メニューから選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image522.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image523.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image524.png", "analysis": "" }
    ]
  },
  {
    "id": 247,
    "question": "次の種類のデバイスを含む Microsoft 365 E5 サブスクリプションがあります：\n・Windows 11\n・Android\n・iOS\nすべてのデバイスは Microsoft Intune に登録されています。\nIntune を使用して、エンタープライズ アプリ カタログ (Enterprise App Catalog) からアプリを展開する必要があります。\nアプリを展開できるデバイスの種類はどれですか？",
    "choices": [
      { "letter": "A", "text": "Windows 11 のみ" },
      { "letter": "B", "text": "Windows 11 および Android のみ" },
      { "letter": "C", "text": "Windows 11 および iOS のみ" },
      { "letter": "D", "text": "Android および iOS のみ" },
      { "letter": "E", "text": "Windows 11, Android, および iOS" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 248,
    "question": "【ホットスポット】\nMicrosoft Intune に登録された 5,000 台の Windows デバイスを含む Microsoft 365 サブスクリプションがあります。\n「同期 (Sync)」および「診断の収集 (Collect diagnostics)」の一括デバイス アクションを使用する予定です。\n各アクションに含めることができるデバイスの最大数はいくつですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image525.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image526.png", "analysis": "" }
    ]
  },
  {
    "id": 249,
    "question": "【ホットスポット】\nMicrosoft Intune を使用してデバイスを管理します。Intune の自動登録は無効になっています。\nユーザーから、デバイスの登録中にモバイル デバイス管理 (MDM) サーバーのアドレスを入力する必要があると報告がありました。\nデバイス登録中のユーザーの操作を減らすために、次の CNAME DNS ホスト名レコードを作成する予定です：\n・EnterpriseEnrollment.contoso.com\n・EnterpriseRegistration.contoso.com\n登録要求を Intune サーバーにリダイレクトするために、各 CNAME レコードの完全修飾ドメイン名 (FQDN) を構成する必要があります。\n各 FQDN をどのように構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image527.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image528.png", "analysis": "" }
    ]
  },
  {
    "id": 250,
    "question": "Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune を使用しています。\nすべての企業所有の Windows デバイスに対して「同期 (Sync)」の一括デバイス アクションを使用する必要があります。\nアクションに含めることができるデバイスの最大数はいくつですか？",
    "choices": [
      { "letter": "A", "text": "25" },
      { "letter": "B", "text": "50" },
      { "letter": "C", "text": "100" },
      { "letter": "D", "text": "500" },
      { "letter": "E", "text": "1000" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 251,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 E5 サブスクリプションがあります。\nIntune を使用して修復スクリプト パッケージを実行する予定です。\nMicrosoft Intune 管理センターで最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "プロセッサ構成で Windows 診断データを有効にする。" },
      { "letter": "B", "text": "Windows ライセンス認証 (license verification) を有効にする。" },
      { "letter": "C", "text": "派生資格情報 (Derived Credential) の設定を構成する。" },
      { "letter": "D", "text": "Windows エンタープライズ証明書をアップロードする。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 252,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nAndroid Enterprise デバイス用に、次の設定を持つ Microsoft Intune 登録プロファイルがあります：\n・名前：Profile1\n・トークンの種類：企業所有のフル マネージド (Corporate-owned, fully managed)\nProfile1 を使用して、新しい Android デバイスを Intune に登録する必要があります。\nデバイスを登録するには何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "QR コード" },
      { "letter": "B", "text": "ポータル サイト (Company Portal) アプリ" },
      { "letter": "C", "text": "Microsoft Authenticator アプリ" },
      { "letter": "D", "text": "Intune アプリ" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 253,
    "question": "Microsoft Defender for Office 365 を使用しています。\n攻撃シミュレーション キャンペーンを自動化する予定です。\nシミュレーションに失敗したユーザーは、シミュレーション結果に基づいて追加のトレーニングを受ける必要があります。\nシミュレーション後、ユーザーがトレーニングを利用できる最大日数は何日ですか？",
    "choices": [
      { "letter": "A", "text": "7" },
      { "letter": "B", "text": "15" },
      { "letter": "C", "text": "30" },
      { "letter": "D", "text": "45" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 254,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあります。\nサブスクリプションには、Microsoft Defender for Endpoint にオンボードされたデバイスを持つユーザーが含まれています。Defender for Endpoint は、Microsoft Defender for Cloud Apps にシグナルを転送するように構成されています。\nCloud Discovery は、App1 という名前のリスクの高い Web アプリを識別します。\nユーザーが Microsoft Edge から App1 に接続するのをブロックする必要があります。ユーザーは制限をバイパスできる必要があります。\nDefender for Endpoint と Defender for Cloud Apps を統合するには、どの種類のアプリ タグを使用し、何を構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image537.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image538.png", "analysis": "" }
    ]
  },
  {
    "id": 255,
    "question": "【ホットスポット】\n次の表に示すように、Microsoft Intune に登録されたデバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nサブスクリプションには、次の表に示すユーザーが含まれています。\nリモート ヘルプの Tier1 ロールは、次の図に示すように構成されています。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image543.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image544.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image545.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image546.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image547.png", "analysis": "" }
    ]
  },
  {
    "id": 256,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあります。\nMicrosoft Graph PowerShell を使用して、user1@contoso.com という名前の新しいユーザーに Microsoft 365 E5 ライセンスを割り当てる必要があります。\nコマンドをどのように完成させるべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image539.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image540.png", "analysis": "" }
    ]
  },
  {
    "id": 257,
    "question": "Windows 11 デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nすべてのデバイスは Microsoft Defender for Endpoint にオンボードされています。\nデバイスの構成を業界標準のベンチマークと比較する必要があります。\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "攻撃面のマップ (Attack surface map)" },
      { "letter": "B", "text": "イベント (Events)" },
      { "letter": "C", "text": "セキュリティ ベースラインの評価 (Security baselines assessment)" },
      { "letter": "D", "text": "イニシアチブ (Initiatives)" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 258,
    "question": "【ホットスポット】\ncontoso.com という名前の Microsoft Entra テナントがあり、次の表に示すユーザーが含まれています。\nテナントには、Window 11 を実行する Computer1 という名前のスタンドアロン ワークグループ コンピューターが含まれています。Computer1 には、次の表に示すローカル ユーザーが含まれています。\nComputer1 を contoso.com に参加させる必要があります。\nComputer1 を contoso.com に参加させることができるローカル ユーザーは誰ですか？また、どのユーザーの Microsoft Entra 資格情報を使用できますか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image529.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image530.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image531.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image532.png", "analysis": "" }
    ]
  },
  {
    "id": 259,
    "question": "Microsoft 365 E5 サブスクリプションがあり、Microsoft Defender for Cloud Apps を使用しています。\nCloud Discovery によって検出されたすべてのアプリのセキュリティ監査を実行する予定です。\nどのアプリが監査されたかを追跡する必要があります。このソリューションでは、監査されたアプリのリストがクラウド アプリ カタログに表示されることを確認する必要があります。\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "各アプリにカスタム アプリ タグを適用する。" },
      { "letter": "B", "text": "条件付きアクセス アプリ制御 (Conditional Access App Control) を展開する。" },
      { "letter": "C", "text": "各アプリを重要な資産 (critical asset) として定義する。" },
      { "letter": "D", "text": "Cloud Discovery のスナップショット レポートを生成する。" },
      { "letter": "E", "text": "アプリ ガバナンスを有効にする。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 260,
    "question": "【ホットスポット】\ncontoso.com という名前の Microsoft Entra テナントがあり、次の表に示す動的メンバーシップ グループが含まれています。\n次の表に示すように、contoso.com にデバイスを追加します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image533.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image534.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image535.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image536.png", "analysis": "" }
    ]
  },
  {
    "id": 261,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあり、Microsoft Intune Suite を使用しています。\n次の表に示すデバイスがあります。\nモバイル アプリケーション管理 (MAM) 用の Microsoft Tunnel を実装する予定です。\nデバイスでサポートされているトンネルの種類はどれですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image570.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image571.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image572.png", "analysis": "" }
    ]
  },
  {
    "id": 262,
    "question": "【ホットスポット】\ncontoso.com という名前の Microsoft Entra テナントがあり、次の表に示すユーザーが含まれています。\n次の表に示すデバイスを購入します。\n管理者は次のアクションを実行します：\n・Admin1 の資格情報を使用して、Device1 を contoso.com に参加させます。\n・Admin2 の資格情報を使用して、Device2 を contoso.com に登録 (register) します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image573.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image574.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image575.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image576.png", "analysis": "" }
    ]
  },
  {
    "id": 263,
    "question": "【シミュレーション】\nユーザー名とパスワード\n必要に応じて、以下のログイン資格情報を使用してください：\nユーザー名を入力するには、[サインイン] ボックスにカーソルを置き、以下のユーザー名を選択します。\nパスワードを入力するには、[パスワードの入力] ボックスにカーソルを置き、以下のパスワードを選択します。\nMicrosoft 365 ユーザー名：admin@lod11111.onmicrosoft.com\nMicrosoft 365 パスワード：i7A4$3o^HGD3L~=c[9xuOhM%^4:s11Ai\nMicrosoft Edge ブラウザーまたは Microsoft 365 ポータルが正常に読み込まれない場合は、タスクバーから Microsoft Edge ブラウザーのアイコンを選択し、URL「https://portal.office.com」と入力して Enter キーを押します。\n以下の情報は、テクニカル サポートの目的のみに使用されます：\nラボ インスタンス：48262079\n\n【問題】\nMicrosoft Intune に登録されているすべての Windows 10 以降のデバイスで、BitLocker ドライブ暗号化 (BitLocker) が有効になっているかどうかを検証するコンプライアンス ポリシーを作成する必要があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image577.png", "analysis": "" }
    ]
  },
  {
    "id": 264,
    "question": "注：このセクションには、同じシナリオと問題を持つ 1 つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示しています。解決策が記載された目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決する可能性もあれば、セット内のどの解決策も問題を解決しない可能性もあります。\nこのセクションの質問に回答した後は、戻ることができません。その結果、これらの質問はレビュー画面に表示されません。\n\nMicrosoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加済みで Microsoft Intune に登録されているデバイスが含まれています。\nUser1 という名前のユーザーを作成します。\nUser1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。\n\n解決策：Microsoft Entra 管理センターから、User1 にクラウド デバイス管理者 (Cloud Device Administrator) ロールを割り当てる。\n\nこれは目標を満たしていますか？",
    "choices": [
      { "letter": "A", "text": "はい" },
      { "letter": "B", "text": "いいえ" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 265,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、Device1、Device2、および Device3 という名前の 3 台の Windows デバイスが含まれています。デバイスは Microsoft Intune を使用して管理されています。各デバイスには Script1.ps1 という名前のファイルが含まれています。\nユーザーはデバイスのローカル管理者権限を持っていません。\nサブスクリプションには、次の表に示すグループが含まれています。\n次の設定を持つ 2 つのエンドポイント権限管理 (EPM) 昇格設定ポリシーを作成します：\n・名前：Policy1\n　- エンドポイント権限管理：有効\n　- デフォルトの昇格の応答：すべての要求を拒否する\n　- 昇格の検出を許可する：いいえ\n　- レポート用に昇格データを送信する：いいえ\n　- 割り当て（含まれるグループ）：Group1\n・名前：Policy2\n　- エンドポイント権限管理：サポートの承認を要求する\n　- 昇格の検出を許可する：いいえ\n　- レポート用に昇格データを送信する：いいえ\n　- 割り当て（含まれるグループ）：Group3\n\n次の設定を持つ RulesPolicy1 という名前の EPM 昇格ルール ポリシーを作成します：\n・ルール名：Rule1\n　- 昇格タイプ：自動\n　- 子プロセスの動作：すべて拒否\n　- ファイル名：Script1.ps1\n　- ファイル ハッシュ：(指定されたハッシュ)\n　- 割り当て：Group1, Group2\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image588.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image589.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image590.png", "analysis": "" }
    ]
  },
  {
    "id": 266,
    "question": "【シミュレーション】\nユーザー名とパスワード\n必要に応じて、以下のログイン資格情報を使用してください：\nユーザー名を入力するには、[サインイン] ボックスにカーソルを置き、以下のユーザー名を選択します。\nパスワードを入力するには、[パスワードの入力] ボックスにカーソルを置き、以下のパスワードを選択します。\nMicrosoft 365 ユーザー名：admin@lod11111.onmicrosoft.com\nMicrosoft 365 パスワード：i7A4$3o^HGD3L~=c[9xuOhM%^4:s11Ai\nMicrosoft Edge ブラウザーまたは Microsoft 365 ポータルが正常に読み込まれない場合は、タスクバーから Microsoft Edge ブラウザーのアイコンを選択し、URL「https://portal.office.com」と入力して Enter キーを押します。\n以下の情報は、テクニカル サポートの目的のみに使用されます：\nラボ インスタンス：48262079\n\n【問題】\nsg-Engineering という名前のグループのメンバーが自分の Windows デバイスを Microsoft Entra に参加させるときに、そのデバイスが Microsoft Intune に自動的に登録されるようにする必要があります。このソリューションは、sg-Engineering グループのメンバーにのみ影響する必要があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image579.png", "analysis": "" }
    ]
  },
  {
    "id": 267,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあり、次の表に示すデバイスが含まれています。\nすべてのデバイスは Microsoft Intune に登録されています。\nデバイスには、次の表に示すようにアプリがインストールされています。\nIntune で、次の設定を持つ Policy1 という名前のアプリ構成ポリシーを作成します：\n・デバイスの登録タイプ：マネージド アプリ (Managed apps)\n・ポリシーのターゲット：すべての Microsoft アプリ (All Microsoft Apps)\n・割り当て\n　- 含まれるグループ：Group1\n　- 除外されるグループ：Group2\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image608.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image609.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image610.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image611.png", "analysis": "" }
    ]
  },
  {
    "id": 268,
    "question": "【ホットスポット】\nMicrosoft Intune に登録された 500 台の Windows デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Defender for Endpoint を展開します。\nデバイスを Defender for Endpoint にオンボードする必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n何をすべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image604.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image605.png", "analysis": "" }
    ]
  },
  {
    "id": 269,
    "question": "【ホットスポット】\n次の表に示すユーザーを含む Microsoft 365 サブスクリプションがあります。\n次の表に示すデバイスがあります。\nWindows の登録設定には、次の構成があります：\n・MDM ユーザースコープ：Group1\n・Windows 情報保護 (WIP) ユーザースコープ：Group2\n展示 (exhibit) に示すように、Microsoft Intune の登録制限を構成します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい (Yes)」を選択してください。それ以外の場合は「いいえ (No)」を選択します。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image592.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image593.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image594.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image595.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image596.png", "analysis": "" }
    ]
  },
  {
    "id": 270,
    "question": "【ホットスポット】\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\nユーザーは Microsoft Outlook を使用する iOS デバイスを持っています。\nOutlook を構成する必要があります。このソリューションは次の要件を満たす必要があります：\n・Outlook から他のアプリへのコピー＆ペースト操作を制限する。\n・Outlook の S/MIME を有効にする。\n各要件に対してどの種類のポリシーを構成すべきですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image606.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image607.png", "analysis": "" }
    ]
  },
  {
    "id": 271,
    "question": "Microsoft 365 サブスクリプションがあり、Microsoft Intune Suite を使用しています。\n次の表に示すデバイスがあります。\nすべてのデバイスは Intune に登録されています。\nデバイス クエリ (Device query) を使用してクエリできるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device4 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image591.png", "analysis": "" }
    ]
  },
  {
    "id": 272,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\n次の表に示すデバイスを購入します。\n自動登録を使用して Microsoft Intune に登録できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image600.png", "analysis": "" }
    ]
  },
  {
    "id": 273,
    "question": "Microsoft 365 サブスクリプションがあり、Microsoft Intune を使用しています。\n個人の Android デバイス用にモバイル アプリケーション管理 (MAM) 用 Microsoft Tunnel を実装する必要があります。\n次のアクションを実行します：\n・マネージド デバイス用に Microsoft Tunnel を構成する。\n・ユーザーのデバイスが Tunnel for MAM の前提条件を満たしていることを検証する。\n・Microsoft Defender と Microsoft Edge 用のアプリ構成ポリシーを作成する。\n次に何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ保護ポリシー" },
      { "letter": "B", "text": "Android Enterprise デバイス用のカスタム プロファイル" },
      { "letter": "C", "text": "条件付きアクセス ポリシー" },
      { "letter": "D", "text": "Android Enterprise デバイス用の VPN プロファイル" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 274,
    "question": "【ホットスポット】\nMicrosoft Entra テナントとオンプレミスの Active Directory Domain Services (AD DS) ドメインを含むハイブリッド環境があります。\n次の表に示すデバイスを購入します。\n各デバイスが使用できる Microsoft Entra 参加 (join) の種類はどれですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image601.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image602.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image603.png", "analysis": "" }
    ]
  },
  {
    "id": 275,
    "question": "【ホットスポット】\n500 台の Windows デバイスと、次の表に示すリソースを含む Microsoft 365 E5 サブスクリプションがあります。\n両方のデバイスに Microsoft 365 アプリがインストールされています。\nインターネットからの Office ファイルでマクロが実行されるのをブロックする Office アプリのポリシー (Polices for Office Apps) を作成して割り当てる必要があります。\nどのポータルを使用すべきですか？また、ポリシーのスコープは何ですか？回答するには、回答領域で適切なオプションを選択してください。\n注：正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image597.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image598.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image599.png", "analysis": "" }
    ]
  },
  {
    "id": 276,
    "question": "500 台の Android デバイスを含む Microsoft 365 サブスクリプションがあります。デバイスは Microsoft Intune を使用して管理されています。\nAndroid FOTA を使用して、デバイスのソフトウェア更新プログラムを管理できるようにする必要があります。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "コンプライアンス ポリシーを作成する。" },
      { "letter": "B", "text": "コンプライアンス パートナーを追加する。" },
      { "letter": "C", "text": "コネクタを構成する。" },
      { "letter": "D", "text": "派生資格情報 (derived credentials) を追加する。" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 277,
    "question": "【シミュレーション】\nユーザー名とパスワード\n必要に応じて、以下のログイン資格情報を使用してください：\nユーザー名を入力するには、[サインイン] ボックスにカーソルを置き、以下のユーザー名を選択します。\nパスワードを入力するには、[パスワードの入力] ボックスにカーソルを置き、以下のパスワードを選択します。\nMicrosoft 365 ユーザー名：admin@lod11111.onmicrosoft.com\nMicrosoft 365 パスワード：i7A4$3o^HGD3L~=c[9xuOhM%^4:s11Ai\nMicrosoft Edge ブラウザーまたは Microsoft 365 ポータルが正常に読み込まれない場合は、タスクバーから Microsoft Edge ブラウザーのアイコンを選択し、URL「https://portal.office.com」と入力して Enter キーを押します。\n以下の情報は、テクニカル サポートの目的のみに使用されます：\nラボ インスタンス：48262079\n\n【問題】\nsg-IT という名前のグループ内の Windows 10 以降のデバイスに対して、シングル アプリの全画面キオスク モードを有効にする構成プロファイルを作成する必要があります。このソリューションでは、KioskUser という名前のローカル ユーザーを自動的にサインインさせ、ホームページが https://bing.com である Microsoft Edge を表示する必要があります。",
    "choices": [],
    "answer": "",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image585.png", "analysis": "" }
    ]
  };
 