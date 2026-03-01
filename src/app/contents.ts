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
    "question": "Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune に登録された 100 台の iOS デバイスが含まれています。\n\nIntune を使用して、カスタムの基幹業務 (LOB) アプリをデバイスに展開する必要があります。\nアプリのパッケージファイルには、どの拡張子を選択する必要がありますか？",
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
    "question": "Microsoft 365 サブスクリプションがあります。\nWindows 10 を実行し、モバイルデバイス管理 (MDM) に登録されている 10 台のコンピュータがあります。\n\nMicrosoft 365 Apps for enterprise スイートをすべてのコンピュータに展開する必要があります。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune 管理センターから、Windows 10 デバイスプロファイルを作成する" },
      { "letter": "B", "text": "Azure AD から、アプリの登録を追加する" },
      { "letter": "C", "text": "Azure AD から、エンタープライズ アプリケーションを追加する" },
      { "letter": "D", "text": "Microsoft Intune 管理センターから、アプリを追加する" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 3,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあり、デバイスの管理に Intune を使用しています。\n\nIntune に登録されている Device1 という名前の Windows 11 デバイスがあります。Device1 は 30 日間オフラインになっています。\n\nDevice1 を Intune から直ちに削除する必要があります。このソリューションは、次の要件を満たす必要があります：\n・デバイスが再びチェックインしたときに、Intune によってプロビジョニングされたアプリとデータが削除されること。\n・ユーザーがインストールしたアプリ、個人データ、および OEM がインストールしたアプリは保持されること。\n\nどの操作を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "リタイア (Retire) アクション" },
      { "letter": "B", "text": "削除 (Delete) アクション" },
      { "letter": "C", "text": "ワイプ (Wipe) アクション" },
      { "letter": "D", "text": "Autopilot リセット アクション" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 4,
    "question": "Microsoft Intune に登録された 500 台の macOS デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\n\nMicrosoft Defender for Endpoint のウイルス対策ポリシーを macOS デバイスに適用できるようにする必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "macOS デバイスに Microsoft Defender for Endpoint を手動でインストールする" },
      { "letter": "B", "text": "Azure AD から、条件付きアクセスポリシーを作成する" },
      { "letter": "C", "text": "Microsoft Intune 管理センターから、デバイスコンプライアンスポリシーを作成する" },
      { "letter": "D", "text": "Microsoft Intune 管理センターから、構成プロファイルを作成する" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 5,
    "question": "ネットワークには、オンプレミスの Active Directory ドメインと Azure AD テナントが含まれています。\n\nデフォルトドメインポリシーのグループポリシーオブジェクト (GPO) には、図に示す設定が含まれています。\n既存のデフォルトドメインポリシー GPO 設定をデバイス構成プロファイルに移行する必要があります。\n\nどのデバイス構成プロファイルタイプのテンプレートを使用する必要がありますか？",
    "choices": [
      { "letter": "A", "text": "管理用テンプレート (Administrative Templates)" },
      { "letter": "B", "text": "デバイス制限 (Device restrictions)" },
      { "letter": "C", "text": "設定カタログ (Settings catalog)" },
      { "letter": "D", "text": "カスタム (Custom)" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image31.png", "analysis": "" }
    ]
  },
  {
    "id": 6,
    "question": "【ホットスポット】\nMicrosoft 365 E5 サブスクリプションがあります。\n\n次の図に示すように、Policy1 という名前の新しい更新リング (Update Rings) ポリシーを作成します。\n図に示されている情報に基づいて、各ステートメントを完成させる回答を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image25.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image26.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image549.png", "analysis": "" }
    ]
  },
  {
    "id": 7,
    "question": "150 台のハイブリッド Azure AD 参加済み Windows デバイスを含む Microsoft 365 E5 サブスクリプションがあります。すべてのデバイスは Microsoft Intune に登録されています。\n\n次の要件を満たすように、デバイスに配信最適化 (Delivery Optimization) を構成する必要があります：\n・インターネットおよびローカルネットワーク上の他のコンピュータからのダウンロードを許可する。\n・使用される帯域幅の割合を 50% に制限する。\n\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "配信最適化 (Delivery Optimization) プロファイル" },
      { "letter": "B", "text": "デバイス制限 (Device restrictions) プロファイル" },
      { "letter": "C", "text": "Windows 10 以降の更新リング (Update ring) プロファイル" },
      { "letter": "D", "text": "Windows 10 以降の機能更新プログラム (Feature updates) プロファイル" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 8,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。デバイスの管理に Intune を使用します。\n\nApp1 と App2 という名前の 2 つのアプリをすべての Windows デバイスに展開する予定です。App1 は App2 の前にインストールされる必要があります。\n\nIntune 管理センターから、2 つの Windows アプリ (Win32) を作成して展開します。すべてのデバイスで App1 が App2 の前にインストールされるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "App1 の展開構成" },
      { "letter": "B", "text": "動的デバイスグループ" },
      { "letter": "C", "text": "検出ルール (Detection rule)" },
      { "letter": "D", "text": "App2 の依存関係 (Dependency) 設定" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 9,
    "question": "【ケーススタディ：ADatum Corporation】\n\n■ 概要 (Overview)\nADatum Corporation は、モントリオールに本社を置き、シアトルとニューヨークに支店を持つコンサルティング会社です。ADatum は Microsoft 365 E5 サブスクリプションを保有しています。\n\n■ 環境 (Environment)\n・ネットワーク環境：adatum.com という名前のオンプレミス Active Directory ドメインが含まれています。ドメインには表に示すサーバーが含まれます。ADatum は adatum.com というハイブリッド Azure AD テナントを持っています。\n・ユーザーとグループ：テナントには表に示すユーザーが含まれます。すべてのユーザーに Office 365 と EMS E3 ライセンスが割り当てられています。Group1 と GroupA に対して Enterprise State Roaming が有効です。Group1 と Group2 は「割り当て済み」のメンバーシップタイプです。\n・デバイス：ADatum は表に示す Windows 10 デバイスを所有しています。デバイスは Azure AD に参加し、Intune に登録されています。すべての Azure AD 参加済みデバイスには C:\\AppA.exe という実行ファイルと D:\\Folder1 というフォルダがあります。\n・Intune 構成：コンプライアンスポリシーが設定されています。自動登録設定では、MDM ユーザースコープは GroupA、MAM ユーザースコープは GroupB です。「Protection1」というエンドポイント保護プロファイルがあり、フォルダ保護が有効で、D:\\Folder1 が保護対象、C:\\*\\AppA.exe がアクセス許可アプリに指定されています。このプロファイルは Group2 と GroupB に割り当てられています。\n・Windows Autopilot 構成：図に示すプロファイルがありますが、まだ Autopilot で展開されたデバイスはありません。Server1 には Intune Connector for AD がインストールされています。\n\n■ 計画されている変更 (Planned Changes)\n・Device6 という新しいデバイスを購入し、Intune に登録します。\n・新しいコンピュータは Windows Autopilot を使用して展開され、ハイブリッド Azure AD 参加となります。\n・Boundary1 というネットワーク境界プロファイルを展開します。\n・Connection1 (L2TP) と Connection2 (IKEv2) という VPN プロファイルを展開します。\n\n■ 技術要件\n・GroupA のユーザーが新しいコンピュータを展開できること。\n・管理作業を最小限に抑えること。\n\n【問題】\nEnterprise State Roaming を使用して、設定が Device1 からどのデバイスにコピーされるかを特定する必要があります。\n設定はどのデバイスにコピーされますか？",
    "choices": [
      { "letter": "A", "text": "Device2 のみ" },
      { "letter": "B", "text": "Device2 および Device3 のみ" },
      { "letter": "C", "text": "Device2 および Device4 のみ" },
      { "letter": "D", "text": "Device2, Device3, および Device4" }
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
    "id": 10,
    "question": "次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\n\nどのデバイスに対してアプリ構成ポリシー (App configuration policies) を適用できますか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image17.png", "analysis": "" }
    ]
  },
  {
    "id": 11,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。デバイスの管理に Intune を使用します。\n\nデバイスの起動時間と再起動の頻度を確認する必要があります。何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows プロバイダーのログ" },
      { "letter": "B", "text": "Intune データウェアハウス" },
      { "letter": "C", "text": "Azure 診断ログ" },
      { "letter": "D", "text": "エンドポイント分析 (Endpoint analytics)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 12,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の要件を満たす Microsoft Defender for Endpoint ソリューションを実装する必要があります：\n・条件付きアクセス (Conditional Access) を使用して Defender for Endpoint のコンプライアンスを適用する。\n・デバイスでの不審なスクリプトの実行を防止する。\n\n何を構成すべきですか？（適切な機能を正しい要件にドラッグしてください）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image29.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image30.png", "analysis": "" }
    ]
  },
  {
    "id": 13,
    "question": "【ドラッグ＆ドロップ】\nMicrosoft 365 サブスクリプションがあります。Windows 11 を実行し、Microsoft Intune に登録されているコンピュータが含まれています。\n\n次の要件を満たすコンプライアンスポリシーを作成する必要があります：\n・各デバイスで BitLocker ドライブ暗号化を必須にする。\n・最小オペレーティングシステムバージョンを必須にする。\n\n各要件に対して、コンプライアンスポリシーのどの設定を構成する必要がありますか？",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image44.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image45.png", "analysis": "" }
    ]
  },
  {
    "id": 14,
    "question": "【ケーススタディ：ADatum Corporation】\n（前提条件は問9と同じです。全文を再度記載します）\n\n■ 概要 (Overview)\nADatum Corporation はコンサルティング会社です。Microsoft 365 E5 サブスクリプションを保有しています。\n\n■ 環境 (Environment)\n・adatum.com というオンプレミスドメインとハイブリッド Azure AD テナントがあります。\n・Group1 と GroupA に対して Enterprise State Roaming が有効です。\n・ADatum は Windows 10 デバイスを所有し、すべて Intune に登録されています。\n・Microsoft Intune にはコンプライアンスポリシーが設定されています。\n・Windows Autopilot 展開プロファイルが図のように構成されています。\n\n■ 計画されている変更 (Planned Changes)\n・Device6 という新しいデバイスを購入し、Intune に登録します。\n・新しいコンピュータは Windows Autopilot を使用して展開され、ハイブリッド Azure AD 参加となります。\n\n■ 技術要件\n・GroupA のユーザーが新しいコンピュータを展開できること。\n\n【問題】\nWindows Autopilot 展開サービスを使用して登録されるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device6 のみ" },
      { "letter": "B", "text": "Device1, Device2, Device3, Device4, Device5 および Device6" },
      { "letter": "C", "text": "Device1, Device2, Device3, Device4 および Device5 のみ" },
      { "letter": "D", "text": "Device6 および Server1 のみ" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image1.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image8.png", "analysis": "" }
    ]
  },
  {
    "id": 15,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあります。デバイスの管理に Microsoft Intune Suite を使用します。\n\n次の図に示す iOS アプリ保護ポリシー (App protection policy) があります。\n図に示されている情報に基づいて、各ステートメントを完成させてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image12.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image13.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image14.png", "analysis": "" }
    ]
  },
  {
    "id": 16,
    "question": "【ホットスポット】\nケーススタディ：ADatum Corporation の環境に基づきます。\nUser1 と User2 が Intune に登録できるデバイスの最大数を特定する必要があります。\n\n図の情報に基づいて、各ユーザーが登録できる最大数を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image1.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image8.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image9.png", "analysis": "" }
    ]
  },
  {
    "id": 17,
    "question": "【ホットスポット】\nケーススタディ：ADatum Corporation の環境に基づきます。\nUser1 が Device1 を Azure AD に参加させたとき、および User2 が Device2 を Azure AD に参加させたときの、それぞれのデバイスのローカル Administrators グループのメンバーを特定する必要があります。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image1.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image10.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image11.png", "analysis": "" }
    ]
  },
  {
    "id": 18,
    "question": "Windows 10 を実行し、Azure Log Analytics ワークスペースに接続しているコンピュータがあります。\nワークスペースは、Windows イベントログから利用可能なすべてのイベントを収集するように構成されています。\n\nコンピュータには、図の表に示すログイベントがあります。\nLog Analytics ワークスペースによって収集されるイベントはどれですか？",
    "choices": [
      { "letter": "A", "text": "イベント 1 のみ" },
      { "letter": "B", "text": "イベント 2 および 3 のみ" },
      { "letter": "C", "text": "イベント 1, 2, および 3 のみ" },
      { "letter": "D", "text": "イベント 2, 3, および 4 のみ" },
      { "letter": "E", "text": "イベント 1, 2, 3, および 4" }
    ],
    "answer": "E",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image28.png", "analysis": "" }
    ]
  },
  {
    "id": 19,
    "question": "ネットワークには Active Directory ドメインが含まれています。ドメインには Admin1 という名前のユーザーが含まれています。すべてのコンピュータは Windows 10 を実行しています。\n\nコンピュータで Windows PowerShell リモート管理を有効にします。\nAdmin1 がコンピュータへのリモート PowerShell 接続を確立できるようにする必要があります。\n\nこのソリューションは、最小特権の原則を使用する必要があります。Admin1 をどのグループに追加すべきですか？",
    "choices": [
      { "letter": "A", "text": "Administrators" },
      { "letter": "B", "text": "Power Users" },
      { "letter": "C", "text": "Remote Desktop Users" },
      { "letter": "D", "text": "Remote Management Users" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 20,
    "question": "【ホットスポット】\n次の表に示すユーザーを含む Azure AD テナントがあります。\nまた、次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\n\nIntune から、カスタム通知 Notification1 を作成し、Group1 に送信します。\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image37.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image38.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image39.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image40.png", "analysis": "" }
    ]
  },
  {
    "id": 21,
    "question": "User1 というユーザーを含む Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune Suite を使用しています。Intune に登録されている Device1 というデバイスがあります。\n\nUser1 が Device1 に対して Intune 管理センターからリモートヘルプ (Remote Help) を使用できるようにする必要があります。\n\n実行すべき 3 つのアクションはどれですか？（それぞれの回答はソリューションの一部を示します）",
    "choices": [
      { "letter": "A", "text": "Intune でリモートヘルプを有効にする" },
      { "letter": "B", "text": "リモートヘルプアプリを Device1 にインストールする" },
      { "letter": "C", "text": "User1 にリモートヘルプロールを割り当てる" },
      { "letter": "D", "text": "Device1 に構成プロファイルを割り当てる" },
      { "letter": "E", "text": "User1 にグローバル管理者のロールを割り当てる" }
    ],
    "answer": "ABC",
    "images": []
  },
  {
    "id": 22,
    "question": "ネットワークには contoso.com という名前の Active Directory ドメインが含まれています。ドメインには Windows 10 を実行する Computer1 という名前のコンピュータが含まれています。\n\n図の表に示すグループがあります。Group4 に追加できるグループはどれですか？",
    "choices": [
      { "letter": "A", "text": "Group1, Group2, および Group3" },
      { "letter": "B", "text": "Group1 および Group2 のみ" },
      { "letter": "C", "text": "Group1 のみ" },
      { "letter": "D", "text": "Group2 のみ" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image43.png", "analysis": "" }
    ]
  },
  {
    "id": 23,
    "question": "【ドラッグ＆ドロップ】\nWindows 10 を実行し、User1 と User2 という名前の 2 人のローカルユーザーを含むコンピュータがあります。\n\n次のアクションを実行できるようにする必要があります：\n・User1 は日付と時刻を調整できること。\n・User2 は Windows ログを消去できること。\n\nこのソリューションは、最小特権の原則を使用する必要があります。各ユーザーをどのグループに追加すべきですか？",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image55.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image550.png", "analysis": "" }
    ]
  },
  {
    "id": 24,
    "question": "【ホットスポット】\n次の表に示すユーザーを含む contoso.com という名前の Azure AD テナントがあります。\nWindows 10 を実行する Computer1 というワークグループ内のコンピュータがあり、表に示すローカルユーザーがいます。\n\nUserA は Azure AD アカウントを使用して Computer1 を Azure AD に参加させます。\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image60.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image61.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image62.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image551.png", "analysis": "" }
    ]
  },
  {
    "id": 25,
    "question": "Azure AD テナントと、Microsoft Intune で管理されている 100 台の Windows 10 デバイスがあります。\n\nデバイス上で Microsoft Defender Firewall と Microsoft Defender Antivirus を構成する必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n\n実行すべき 2 つのアクションはどれですか？（それぞれの回答はソリューションの一部を示します）",
    "choices": [
      { "letter": "A", "text": "エンドポイントセキュリティ (Endpoint security) ポリシーを作成する" },
      { "letter": "B", "text": "デバイス構成プロファイルを作成する" },
      { "letter": "C", "text": "Microsoft Defender for Endpoint を使用してデバイスをオンボードする" },
      { "letter": "D", "text": "セキュリティベースライン (Security baselines) を使用する" }
    ],
    "answer": "AD",
    "images": []
  },
  {
    "id": 26,
    "question": "Group1 という名前の Azure AD グループがあります。Group1 には、Device1 と Device2 という名前の 2 台の Windows 10 デバイスが含まれています。\n\nProfile1 という名前のデバイス構成プロファイルを作成し、Group1 に割り当てます。Profile1 が Device1 にのみ適用されるようにする必要があります。\n\nProfile1 の何を修正すべきですか？",
    "choices": [
      { "letter": "A", "text": "適用規則 (Applicability Rules)" },
      { "letter": "B", "text": "割り当て (Assignments)" },
      { "letter": "C", "text": "構成設定 (Configuration settings)" },
      { "letter": "D", "text": "スコープタグ (Scope tags)" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 27,
    "question": "【ホットスポット】\nWindows 10 を実行する 100 台の Azure AD 参加済みのコンピュータがあります。サーバーはありません。\nコンピュータには異なる更新設定があり、一部は手動更新用に構成されています。\n\nWindows Update を構成する必要があります。このソリューションは、次の要件を満たす必要があります：\n・構成は中央の場所から管理されること。\n・インターネットトラフィックを最小限に抑えること。\n・コストを最小限に抑えること。\n\nWindows Update をどのように構成すべきですか？",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image41.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image42.png", "analysis": "" }
    ]
  },
  {
    "id": 28,
    "question": "Windows 10 を実行し、Azure Log Analytics ワークスペースに接続している 100 台のコンピュータがあります。\n\nLog Analytics を使用してコンピュータから収集できる 3 つのデータの種類はどれですか？（それぞれの回答は完全なソリューションを提示します）",
    "choices": [
      { "letter": "A", "text": "Azure Active Directory の監査ログ" },
      { "letter": "B", "text": "Microsoft Office のテレメトリデータ" },
      { "letter": "C", "text": "パフォーマンスカウンター" },
      { "letter": "D", "text": "Windows イベントログ" },
      { "letter": "E", "text": "テキストファイルとして保存されたサードパーティアプリケーションのログ" }
    ],
    "answer": "CDE",
    "images": []
  },
  {
    "id": 29,
    "question": "【ホットスポット】\nMicrosoft Intune サブスクリプションがあります。\n図に示すように、Profile1 という名前の Windows Autopilot 展開プロファイルを作成しています。\n\nProfile1 は Windows 10 デバイスに展開されます。図に示されている情報に基づいて、各ステートメントを完成させてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image64.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image65.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image66.png", "analysis": "" }
    ]
  },
  {
    "id": 30,
    "question": "会社ではすべてのユーザーに対して Windows 10 Enterprise を標準化しています。一部のユーザーは、Windows 10 Pro がインストールされたコンピュータを小売店から購入しています。\n\nコンピュータを Enterprise にアップグレードし、Azure AD に参加させ、標準アプリをインストールするソリューションを推奨する必要があります。このソリューションは、次の要件を満たす必要があります：\n・ユーザーによってインストールされたアプリケーションが保持されること。\n・ユーザーの介入を最小限に抑えること。\n\n目的を達成するための最良の推奨事項は何ですか？",
    "choices": [
      { "letter": "A", "text": "Windows 構成デザイナでプロビジョニングパッケージを作成する" },
      { "letter": "B", "text": "MDT を使用してカスタムイメージを展開する" },
      { "letter": "C", "text": "Windows Autopilot 自己展開モードを使用する" },
      { "letter": "D", "text": "Windows 展開サービス (WDS) を使用する" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 31,
    "question": "Device1 という 64 ビット版 Windows 10 Enterprise を実行しているデバイスがあります。\n図の表に示す Windows 11 Enterprise のイメージがあります。\n\nDevice1 のインプレースアップグレードを実行するために使用できるイメージはどれですか？",
    "choices": [
      { "letter": "A", "text": "イメージ 1 のみ" },
      { "letter": "B", "text": "イメージ 2 のみ" },
      { "letter": "C", "text": "イメージ 1 およびイメージ 2" },
      { "letter": "D", "text": "イメージ 1, イメージ 2, およびイメージ 3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image108.png", "analysis": "" }
    ]
  },
  {
    "id": 32,
    "question": "【ホットスポット】\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。デバイスの管理には Intune と Configuration Manager を使用します。\n\n新しい Windows 11 デバイスの展開プランを推奨する必要があります。このソリューションは、次の要件を満たす必要があります：\n・マーケティング部門：デバイスを AD ドメインのみに参加させる。構築時に複雑なアプリケーションを事前にインストールする。\n・営業部門：デバイスを Azure AD に参加させる。デバイスはメーカーからユーザーの自宅に直接配送される。\n・管理作業を最小限に抑えること。\n\n各部門に対してどの展開方法を推奨すべきですか？",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image109.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image110.png", "analysis": "" }
    ]
  },
  {
    "id": 33,
    "question": "【ホットスポット】\nMicrosoft 365 サブスクリプションがあり、デバイスの管理に Intune を使用します。\n図の表に示すデバイスがあり、Windows 11 へのアップグレードを準備しています。\n\nすべてのユーザー設定とアプリケーションを保持したまま、Windows 11 Pro を実装するための方法として「Windows Autopilot」と「インプレースアップグレード」を評価します。\n図の情報に基づいて、各方法でアップグレード可能なデバイスを回答してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image103.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image104.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image553.png", "analysis": "" }
    ]
  },
  {
    "id": 34,
    "question": "【ドラッグ＆ドロップ】\n100 台の Windows 10 コンピュータがあります。ワイプ・アンド・ロード (wipe and load) インストールを実行して Windows 11 を展開する予定です。\n\nユーザー設定とユーザーデータを保持する方法を推奨する必要があります。\n順番に実行すべき 3 つのアクションはどれですか？",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image106.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image107.png", "analysis": "" }
    ]
  },
  {
    "id": 35,
    "question": "Microsoft Intune に登録された、図の表に示すデバイスがあります。App1 というアプリが各デバイスにインストールされています。\n\nApp1 を管理するために必要なアプリ構成ポリシー (App configuration policies) の最小数はいくつですか？",
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
    "question": "10 台の企業所有の Android Enterprise デバイスが Intune に登録されています。\nキオスクモードで単一のアプリを実行するようにデバイスを構成する必要があります。\n\nデバイス制限プロファイルで、どの構成設定 (Configuration settings) を修正すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリの管理 (App management)" },
      { "letter": "B", "text": "接続性 (Connectivity)" },
      { "letter": "C", "text": "全般 (General)" },
      { "letter": "D", "text": "デバイスエクスペリエンス (Device experience)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 37,
    "question": "Microsoft 365 E5 サブスクリプションがあり、25 台のコンピュータが Intune に登録されています。\nデバイスを Microsoft Defender for Endpoint にオンボードする必要があります。\n\nMicrosoft Intune 管理センターで何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "コンプライアンスポリシー" },
      { "letter": "C", "text": "エンドポイント検出および応答 (EDR) ポリシー" },
      { "letter": "D", "text": "デバイス制限プロファイル" },
      { "letter": "E", "text": "ウイルス対策ポリシー" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 38,
    "question": "Microsoft 365 E5 サブスクリプションと 25 台の Apple iPad があります。\nApple Configurator 登録方法を使用して、iPad を Microsoft Intune に登録する必要があります。\n\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Apple MDM プッシュ証明書を取得する" },
      { "letter": "B", "text": "登録プロファイルを作成する" },
      { "letter": "C", "text": "Intune 登録プロファイルのエクスポートされた URL を取得する" },
      { "letter": "D", "text": "各 iPad のデバイス識別子を含むファイルをアップロードする" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 39,
    "question": "会社ではデバイスの管理に Intune を使用しています。\nAndroid 仕事用プロファイル (Work Profile) を使用するデバイスのみが登録できるようにする必要があります。\n\nデバイス登録制限 (Device enrollment restrictions) で実行すべき 2 つの構成はどれですか？（それぞれの回答はソリューションの一部を示します）",
    "choices": [
      { "letter": "A", "text": "プラットフォーム設定から、Android 仕事用プロファイルを「許可 (Allow)」に設定する" },
      { "letter": "B", "text": "プラットフォーム設定から、Android デバイス管理者を「ブロック (Block)」に設定する" },
      { "letter": "C", "text": "個人所有のデバイスをブロックする" },
      { "letter": "D", "text": "プラットフォーム設定から、Android デバイス管理者を「許可 (Allow)」に設定する" }
    ],
    "answer": "AB",
    "images": []
  },
  {
    "id": 40,
    "question": "【ホットスポット】\nMicrosoft Intune に登録された 100 台の Windows 10 デバイスがあります。\n\nインターネットおよびローカルネットワーク上の他のコンピュータから Windows 更新プログラムを取得するようにデバイスを構成する必要があります。\nどの配信最適化 (Delivery Optimization) 設定を構成し、どの種類の Intune オブジェクトを作成すべきですか？",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image35.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image36.png", "analysis": "" }
    ]
  },
  {
    "id": 41,
    "question": "【ドラッグ＆ドロップ】\n\nMDT1 という名前の Microsoft Deployment Toolkit (MDT) サーバーがあります。\n\nコンピュータが LiteTouchPE_x64.iso イメージから起動して MDT1 に接続すると、次の図に示すようにウェルカム画面が表示されます。\n\nコンピュータが MDT1 に接続した際に、このウェルカム画面が表示されないようにする必要があります。\n\n順番に実行すべき 3 つのアクションはどれですか？\n回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image91.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image92.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image552.png", "analysis": "" }
    ]
  },
  {
    "id": 42,
    "question": "Microsoft Intune と Intune Data Warehouse を使用しています。\n\nデータウェアハウスに保存されているデータを含むデバイスインベントリレポートを作成する必要があります。\n\nレポートの作成には何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Excel" },
      { "letter": "B", "text": "Intune 管理センターのダッシュボード" },
      { "letter": "C", "text": "Azure Monitor" },
      { "letter": "D", "text": "Microsoft Power BI" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 43,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 E5 サブスクリプションがあります。\n\n次の表に示す Windows 11 デバイスがあります。\n\n・Device1: バージョン 21H2, Azure AD 参加, BitLocker 有効\n・Device2: バージョン 22H2, Azure AD 登録, BitLocker 有効\n・Device3: バージョン 21H2, Azure AD 参加, BitLocker 無効\n\n次の図に示すデバイスコンプライアンスポリシーを展開します。\n\n図の情報に基づいて、各ステートメントについて、そのステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image46.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image47.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image48.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image49.png", "analysis": "" }
    ]
  },
  {
    "id": 44,
    "question": "【ドラッグ＆ドロップ】\n\n次の表に示すデバイスを含む Microsoft 365 サブスクリプションがあります。\n\n・Device1: Windows 11\n・Device2: iOS\n・Device3: Android\n\n信頼されたファームウェアまたはオペレーティングシステムビルドを実行しているデバイスのみが、ネットワークリソースにアクセスできるようにする必要があります。\n\n各デバイスに対して、どのコンプライアンスポリシー設定を構成すべきですか？\n回答するには、適切な設定を正しいデバイスにドラッグしてください。（各設定は、1回、複数回、またはまったく使用されない場合があります。コンテンツを表示するには、ペイン間で分割バーをドラッグするか、スクロールする必要がある場合があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image50.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image51.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image52.png", "analysis": "" }
    ]
  },
  {
    "id": 45,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune に登録された 1,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。\n\nデバイスの BIOS バージョンを検証するために使用するコンプライアンスポリシーを作成し、その結果を監視する予定です。\n\n順番に実行すべき 4 つのアクションはどれですか？\n回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image53.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image54.png", "analysis": "" }
    ]
  },
  {
    "id": 46,
    "question": "【ホットスポット】\n\ncontoso.com という名前の Azure AD テナントがあります。\n\n次の表に示すデバイスがあります。\n\n・Device1: Windows 10, 個人所有\n・Device2: Windows 11 Pro, ワークグループ、新規購入\n・Device3: Windows 11 Home, ワークグループ、新規購入\n\nどのデバイスを Azure AD (Microsoft Entra ID) に「参加 (Join)」させることができ、どのデバイスを「登録 (Register)」することができるかを特定してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image57.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image58.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image59.png", "analysis": "" }
    ]
  },
  {
    "id": 47,
    "question": "Windows 10 を実行するコンピュータをリモート管理するために Windows Admin Center を使用しています。\n\nWindows Admin Center に接続すると、図のように「このサイトは安全ではありません」というメッセージが表示されます。\n\nWindows Admin Center に接続したときにこのメッセージが表示されないようにする必要があります。\n\n証明書をどの証明書ストアにインポートすべきですか？",
    "choices": [
      { "letter": "A", "text": "信頼された発行元 (Trusted Publishers)" },
      { "letter": "B", "text": "クライアント認証 (Client Authentication)" },
      { "letter": "C", "text": "信頼されたルート証明機関 (Trusted Root Certification Authorities)" },
      { "letter": "D", "text": "中間証明機関 (Intermediate Certification Authorities)" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image94.png", "analysis": "" }
    ]
  },
  {
    "id": 48,
    "question": "【ホットスポット】\n\n次の表に示すデバイスとグループを含む contoso.com という名前の Azure AD テナントがあります。\n\n・Device1: Windows 10 Enterprise, 物理デバイス\n・Device2: Windows 10 Pro, 仮想マシン\n・Group1: Device1 を含む\n・Group2: Device2 を含む\n\n次の図に示すように構成された、Windows Autopilot 展開プロファイルを追加します。\n\n図の情報に基づいて、各ステートメントについて、そのステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
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
    "question": "MDT1 という名前の Microsoft Deployment Toolkit (MDT) 展開共有をホストする、Server1 という名前のサーバーがあります。\n\nMDT1 がマルチキャスト展開をサポートするようにする必要があります。\n\nServer1 に何をインストールすべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows 展開サービス (WDS)" },
      { "letter": "B", "text": "Windows 構成デザイナ" },
      { "letter": "C", "text": "Windows アセスメント & デプロイメント キット (Windows ADK)" },
      { "letter": "D", "text": "Windows Server Update Services (WSUS)" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 50,
    "question": "【ホットスポット】\n\nServer1 という名前のサーバーと、Windows 10 を実行するコンピュータがあります。Server1 には MDT がインストールされています。\n\nMDT 展開ウィザードを使用して、Windows 10 コンピュータを Windows 11 にアップグレードする予定です。\n\nServer1 に展開共有を作成する必要があります。\n\nServer1 で何をすべきですか？また、MDT 展開共有に追加すべき最小限のコンポーネントは何ですか？（回答するには、回答領域で適切なオプションを選択してください。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image89.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image90.png", "analysis": "" }
    ]
  },
  {
    "id": 51,
    "question": "【ホットスポット】\n\nすべてのユーザーに対して Microsoft 365 Apps が展開されています。\n\n次の要件を満たすように Microsoft 365 Apps を構成する必要があります：\n・WebView2 Runtime の自動インストールを有効にする。\n・ユーザーがフィードバックを送信できないようにする。\n\nMicrosoft 365 Apps 管理センターで、どの 2 つの設定を構成すべきですか？（回答するには、回答領域で適切な設定を選択してください。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image23.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image24.png", "analysis": "" }
    ]
  },
  {
    "id": 52,
    "question": "【ホットスポット】\n\nケーススタディ：Contoso, Ltd.\n\nContoso, Ltd. の環境に基づきます。\n\nUser1 と User2 が Intune に登録できるデバイスの最大数を特定する必要があります。\n\n図の情報（デバイスの制限設定）に基づいて、各ユーザーが登録できる最大数を選択してください。",
    "choices": [],
    "answer": "A",
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
    "question": "【ケーススタディ：Contoso, Ltd.】\n\niOS デバイスに関する技術要件を満たす必要があります。要件は以下の通りです：\n・診断および使用状況のテレメトリデータの送信をブロックする。\n\nIntune でどのオブジェクトを作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "アプリ保護ポリシー" },
      { "letter": "C", "text": "デバイス制限 (Device restrictions) を含む構成プロファイル" },
      { "letter": "D", "text": "コンプライアンスポリシー" }
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
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n\n次の表に示すユーザーとデバイスがあります。\n\n・User1: デバイスを Azure AD に参加させる権限あり\n・User2: デバイスを Azure AD に参加させる権限なし\n・Device1: Windows 10, 未参加\n・Device2: Windows 10, 未参加\n\nマーケティング部門のデバイスのハードウェア ID をキャプチャしてアップロードし、Windows Autopilot を構成しました。\n\n次の各ステートメントについて、そのステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image134.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image135.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image136.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image137.png", "analysis": "" }
    ]
  },
  {
    "id": 55,
    "question": "500 台の Android Enterprise デバイスを含む Microsoft 365 サブスクリプションがあります。すべてのデバイスは Microsoft Intune に登録されています。\n\nデバイス上の Chrome ブラウザにブックマークを配信する必要があります。\n\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Wi-Fi プロファイル" },
      { "letter": "B", "text": "デバイス制限プロファイル" },
      { "letter": "C", "text": "カスタム通知" },
      { "letter": "D", "text": "アプリ構成ポリシー (App configuration policy)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 56,
    "question": "次の表に示すデバイスを含む Azure AD テナントがあります。\n\n・Device1: Windows 10 Pro, Azure AD 参加済\n・Device2: Windows 11 Pro, Azure AD 参加済\n・Device3: Windows 10 Pro, ハイブリッド Azure AD 参加済\n・Device4: Windows 11 Pro, Azure AD 登録済\n\n「サブスクリプションのアクティブ化 (Subscription activation)」を使用して、ライセンスをアップグレードできるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 および Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "C",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image123.png", "analysis": "" }
    ]
  },
  {
    "id": 57,
    "question": "Windows 10 Pro を実行する 25 台のコンピュータがあります。\nMicrosoft Intune を含む Microsoft 365 E5 サブスクリプションがあります。\n\nインプレースアップグレードを使用して、コンピュータを Windows 11 Enterprise にアップグレードする必要があります。管理作業を最小限に抑える必要があります。\n\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows 構成デザイナ" },
      { "letter": "B", "text": "Windows Autopilot" },
      { "letter": "C", "text": "MDT (Microsoft Deployment Toolkit)" },
      { "letter": "D", "text": "サブスクリプションのアクティブ化 (Subscription Activation)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 58,
    "question": "Microsoft Intune Suite を含む Microsoft 365 サブスクリプションがあります。Windows 11 デバイスを管理するために Microsoft Intune を使用します。\n\n管理対象の Windows 11 デバイスの起動パフォーマンスがキャプチャされ、Intune 管理センターで確認できるようにする必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイスコンプライアンスポリシー" },
      { "letter": "B", "text": "デバイス制限プロファイル" },
      { "letter": "C", "text": "エンドポイントセキュリティポリシー" },
      { "letter": "D", "text": "Intune データ収集ポリシー (Intune data collection policy)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 59,
    "question": "次の表に示すリソースを含む Microsoft Intune 環境があります。\n\n・Conf1: 構成プロファイル (Windows 10 以降)\n・Comply1: コンプライアンスポリシー (Windows 10 以降)\n・Comply2: コンプライアンスポリシー (Android)\n・Office1: アプリ (Microsoft 365 Apps)\n・CA1: 条件付きアクセスポリシー\n\nSet1 という名前のポリシーセット (Policy set) を作成し、Comply1 を Set1 に追加します。\nSet1 に追加できる追加のリソースはどれですか？",
    "choices": [
      { "letter": "A", "text": "Conf1 のみ" },
      { "letter": "B", "text": "Conf1 および Office1 のみ" },
      { "letter": "C", "text": "Comply2, Conf1, および Office1 のみ" },
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
    "question": "Windows 10 を実行するコンピュータを保護するために Microsoft Defender for Endpoint を使用しています。\n\nMicrosoft Defender for Endpoint の現在の構成と、Microsoft が推奨する構成ベースラインとの違いを評価する必要があります。\n\nどのツールを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft 365 管理センター" },
      { "letter": "B", "text": "Microsoft Intune 管理センター" },
      { "letter": "C", "text": "Azure Active Directory 管理センター (Entra)" },
      { "letter": "D", "text": "Microsoft 365 Defender ポータル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 61,
    "question": "Microsoft Intune Suite を含む Microsoft 365 サブスクリプションがあります。Windows 11 を実行するデバイスを管理するために Microsoft Intune を使用します。\n\nUser1 は、マーケティング部門の 75 台のデバイスに対してリモートサポートを提供します。\n\nマーケティング部門の各デバイスの「Remote Desktop Users」グループに User1 を追加する必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ保護ポリシー" },
      { "letter": "B", "text": "デバイスコンプライアンスポリシー" },
      { "letter": "C", "text": "エンドポイントセキュリティ (Endpoint security) ポリシー" },
      { "letter": "D", "text": "デバイス構成プロファイル" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 62,
    "question": "Microsoft Intune を含む Microsoft 365 テナントがあります。登録済みのデバイスでアプリをインストールするために、ポータルサイト (Company Portal) アプリを使用します。\n\nMicrosoft Intune 管理センターから、Microsoft Store アプリを追加します。\n\nポータルサイトで表示可能な 2 つのアプリ情報タイプはどれですか？（それぞれの回答は完全なソリューションを提示します）",
    "choices": [
      { "letter": "A", "text": "説明 (Description)" },
      { "letter": "B", "text": "パブリッシャー (Publisher)" },
      { "letter": "C", "text": "アプリのバージョン" },
      { "letter": "D", "text": "所有者 (Owner)" }
    ],
    "answer": "AB",
    "images": []
  },
  {
    "id": 63,
    "question": "Microsoft Intune に登録された 100 台のデバイスを含む Microsoft 365 サブスクリプションがあります。\n\nスタートアッププロセスと、各デバイスが再起動する頻度を確認する必要があります。\n\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "エンドポイント分析 (Endpoint analytics)" },
      { "letter": "B", "text": "Windows プロバイダーのログ" },
      { "letter": "C", "text": "Azure 診断ログ" },
      { "letter": "D", "text": "Intune データウェアハウス" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 64,
    "question": "Microsoft Intune に登録されたデバイスがあります。Group1 というグループに Policy1 という名前の条件付きアクセス (Conditional Access) ポリシーを割り当てます。Policy1 は、非準拠 (Noncompliant) とマークされたデバイスが OneDrive for Business にアクセスすることを制限します。\n\nどの非準拠デバイスが OneDrive へのアクセスを試みたかを特定する必要があります。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure AD (Microsoft Entra) 管理センターから、サインインログを確認する" },
      { "letter": "B", "text": "Microsoft Intune 管理センターから、デバイスコンプライアンスレポートを確認する" },
      { "letter": "C", "text": "Microsoft 365 Defender ポータルから、アラートを確認する" },
      { "letter": "D", "text": "Microsoft Intune 管理センターから、設定準拠レポートを確認する" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 65,
    "question": "ネットワークには、Windows 10 を実行する 2,000 台のコンピュータが含まれています。ハイブリッド Azure AD 参加 (Hybrid Azure AD join) と Microsoft Intune を実装します。\n\n既存のすべてのコンピュータを Azure AD および Intune に「自動的に」登録する必要があります。このソリューションは、管理作業を最小限に抑える必要があります。\n\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "プロビジョニングパッケージ" },
      { "letter": "B", "text": "グループポリシー (Group Policy)" },
      { "letter": "C", "text": "MDT (Microsoft Deployment Toolkit)" },
      { "letter": "D", "text": "Windows Autopilot 展開プロファイル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 66,
    "question": "【ホットスポット】\n\nオンプレミスの Active Directory ドメインが Azure AD と同期しているネットワークがあります。\n\nテナントには、次の表に示すユーザーが含まれています。\n\n・User1: デバイスを Azure AD に参加させる権限あり\n・User2: ライセンス割り当てなし、参加権限あり\n・User3: ライセンス割り当てあり、参加権限なし\n\nGroup1 と User2 に Windows 10/11 Enterprise E5 ライセンスを割り当てます。次の表に示すデバイスを展開します。\n\n各ステートメントについて、そのステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image124.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image125.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image126.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image555.png", "analysis": "" }
    ]
  },
  {
    "id": 67,
    "question": "次の表に示す仮想マシンを含む Hyper-V ホストがあります。\n\n・VM1: 第1世代, Windows 10, セキュリティ設定なし\n・VM2: 第2世代, Windows 8.1, セキュリティ設定なし\n・VM3: 第2世代, Windows 10, TPM 有効, セキュアブート有効\n・VM4: 第1世代, Windows 11, セキュリティ設定なし\n\nWindows 11 をインストールできる仮想マシンはどれですか？",
    "choices": [
      { "letter": "A", "text": "VM1 のみ" },
      { "letter": "B", "text": "VM1 および VM3 のみ" },
      { "letter": "C", "text": "VM2 および VM3 のみ" },
      { "letter": "D", "text": "VM1, VM2, および VM3 のみ" },
      { "letter": "E", "text": "VM1, VM2, VM3, および VM4" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image133.png", "analysis": "" }
    ]
  },
  {
    "id": 68,
    "question": "Microsoft Intune に登録された 1,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。\n\n複数のインストールファイルを含む App1 というアプリケーションを展開するために、Intune を使用する予定です。\n\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "App1 のファイルを .intunewin 形式に準備する" },
      { "letter": "B", "text": "App1 を Microsoft エクスペリエンスセンターにアップロードする" },
      { "letter": "C", "text": "App1 を Azure Blob ストレージにアップロードする" },
      { "letter": "D", "text": "Microsoft Deployment Toolkit (MDT) をインストールする" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 69,
    "question": "Microsoft 365 サブスクリプションがあり、すべてのデバイスは Windows 10 を実行しています。\n\nユーザーが Windows Insider Program にデバイスを登録できないようにする必要があります。\n\nMicrosoft Intune 管理センターから実行すべき 2 つの構成はどれですか？（それぞれの回答は完全なソリューションを提示します）",
    "choices": [
      { "letter": "A", "text": "デバイス制限 (Device restrictions) プロファイル" },
      { "letter": "B", "text": "アプリ構成ポリシー" },
      { "letter": "C", "text": "デバイスコンプライアンスポリシー" },
      { "letter": "D", "text": "条件付きアクセスポリシー" },
      { "letter": "E", "text": "Windows 10 以降の更新リング (Update ring)" }
    ],
    "answer": "AE",
    "images": []
  },
  {
    "id": 70,
    "question": "【ホットスポット】\n\ncontoso.com という名前の Azure AD テナントに User1 というユーザーがいます。\n\nClient1 という名前の Windows 11 デバイスを contoso.com に参加させます。\n\nUser1 を Client1 のローカル Administrators グループに追加する必要があります。PowerShell コマンドをどのように完成させるべきですか？（回答するには、回答領域で適切なオプションを選択してください。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image167.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image557.png", "analysis": "" }
    ]
  },
  {
    "id": 71,
    "question": "500 台以上の Android および iOS デバイスが Intune テナントに登録されています。\n\n新しい Intune ポリシーを展開する予定です。デバイスにインストールされている OS のバージョンに応じて、異なるポリシーを適用する必要があります。\n\nOS バージョンに基づいてポリシーをデバイスにターゲットできるようにする必要があります。最初に何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune のフィルター (Filters)" },
      { "letter": "B", "text": "Azure AD (Entra) の動的デバイスグループ" },
      { "letter": "C", "text": "Intune のスコープタグ (Scope tags)" },
      { "letter": "D", "text": "Azure AD (Entra) のデバイス設定" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 72,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune に登録された 500 台の Windows 10 デバイスがあります。Intune の「Exploit protection」を使用して、デバイス上で特定のシステム設定を有効にする予定です。\n\nテンプレートファイルの作成に使用する Windows 10 デバイスを構成する必要があります。\n\nテンプレートファイルを作成する前に、Windows セキュリティアプリでデバイスのどの保護領域を構成すべきですか？（回答するには、適切な領域を回答領域にドラッグしてください。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image154.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image155.png", "analysis": "" }
    ]
  },
  {
    "id": 73,
    "question": "【ホットスポット】\n\n次の設定を持つ Microsoft Intune サブスクリプションがあります：\n・準拠ポリシーが割り当てられていないデバイスを「準拠」としてマークする: はい\n・準拠ステータスの有効期間 (日数): 14 日\n\n1月1日に、次の表に示すデバイスを登録します。\n\n・Device1: Windows 10\n・Device2: Windows 11\n\n1月4日に、Policy1 (Windows 10) と Policy2 (Windows 11) を作成し、1月5日に Group1 (両デバイスを含む) に割り当てます。図の情報に基づいて、各ステートメントを完成させてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image158.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image159.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image160.png", "analysis": "" }
    ]
  },
  {
    "id": 74,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n\n次の表に示す Windows 11 コンピュータ、グループ、およびコンプライアンスポリシーがあります。\n\n・Computer1: Group1, Group2 所属\n・Computer2: Group2 所属\n・Policy1: Windows 11, Group1 割り当て\n・Policy2: Windows 11, Group2 割り当て\n\n翌日、コンピュータの準拠ステータスを確認します。図の情報に基づいて、各ステートメントを完成させてください。",
    "choices": [],
    "answer": "A",
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
    "question": "次の表に示すオブジェクトを含む Microsoft 365 テナントがあります。\n\n・Group1: セキュリティグループ\n・Group2: Microsoft 365 グループ\n・Group3: 配布リスト\n・Group4: メールが有効なセキュリティグループ\n・Admin1: ユーザー\n\nCompliance1 という名前のコンプライアンスポリシーを作成しています。\n\n非準拠通知の「追加の受信者」として、Compliance1 で指定できるオブジェクトはどれですか？",
    "choices": [
      { "letter": "A", "text": "Group1 および Group2 のみ" },
      { "letter": "B", "text": "Group1, Group2, および Group3 のみ" },
      { "letter": "C", "text": "Group1, Group2, および Group4 のみ" },
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
    "question": "次の表に示すデバイスが Intune に登録されています。\n\n・Device1: Windows 11 Pro, Azure AD 参加\n・Device2: Windows 11 Home, Azure AD 参加\n・Device3: Windows 10 Pro, ハイブリッド Azure AD 参加\n\n「サブスクリプションのアクティブ化 (Subscription activation)」を使用して、エディションを Windows 11 Enterprise に変更できるデバイスはどれですか？",
    "choices": [
      { "letter": "A", "text": "Device1 および Device2 のみ" },
      { "letter": "B", "text": "Device1 および Device3 のみ" },
      { "letter": "C", "text": "Device2 および Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image180.png", "analysis": "" }
    ]
  },
  {
    "id": 77,
    "question": "User1 というユーザーに Windows 10/11 Enterprise E3 ライセンスが割り当てられています。\n\nUser1 は、次のデバイスで既にライセンスをアクティブ化しています：\n・Device1 (Windows 11 Enterprise)\n・Device2 (Windows 10 Enterprise)\n・Device3 (Windows 11 Enterprise)\n\nUser1 は、あと最大で何台の追加デバイスをアクティブ化できますか？",
    "choices": [
      { "letter": "A", "text": "2" },
      { "letter": "B", "text": "3" },
      { "letter": "C", "text": "5" },
      { "letter": "D", "text": "8" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 78,
    "question": "会社のセキュリティポリシーには、次のように記載されています：\n・個人のデバイスを Intune に登録する必要はない。\n・会社のメールにアクセスする前に PIN 認証が必要。\n・ユーザーは個人の iOS および Android デバイスから会社のクラウドサービスにアクセスできる。\n・メールデータを OneDrive 以外のクラウドストレージサービスにコピーすることを禁止する。\n\nこれらのポリシーを適用するために、何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイスコンプライアンスポリシー" },
      { "letter": "B", "text": "条件付きアクセスポリシー" },
      { "letter": "C", "text": "デバイス制限プロファイル" },
      { "letter": "D", "text": "アプリ保護ポリシー (App protection policy)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 79,
    "question": "Windows 10 を実行する 100 台のコンピュータがあります。\n\nOffice 展開ツール (ODT) を使用して、Office Professional Plus 2019 をコンピュータに展開する必要があります。\n\nODT 用の「カスタマイズファイル (XML)」を作成するために、何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft 365 管理センター" },
      { "letter": "B", "text": "Microsoft Intune 管理センター" },
      { "letter": "C", "text": "Azure Active Directory (Entra) 管理センター" },
      { "letter": "D", "text": "Microsoft 365 Apps 管理センター (config.office.com)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 80,
    "question": "Microsoft Intune に登録された 100 台の Windows 10 デバイスを含む Microsoft 365 E5 サブスクリプションがあります。エンドポイント分析 (Endpoint analytics) を使用する予定です。\n\nベースラインメトリクスを作成する必要があります。最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure Monitor ブックを作成する" },
      { "letter": "B", "text": "デバイスをエンドポイント分析にオンボードする" },
      { "letter": "C", "text": "デバイス制限プロファイルを作成する" },
      { "letter": "D", "text": "Intune データ収集ポリシーを作成する" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 81,
    "question": "50台のWindows 10デバイスを含むAzure ADのハイブリッド展開があります。すべてのデバイスはMicrosoft Intuneに登録されています。\n\nグループポリシー（GPO）の設定が、Microsoft Intuneポリシーで構成された設定を上書きしていることが判明しました。\n\nMicrosoft Intuneで構成された設定が、グループポリシーの設定を優先して上書きするようにする必要があります。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "グループポリシー管理エディターから、デフォルトドメインポリシーの「コンピューターの構成」設定を構成する。" },
      { "letter": "B", "text": "Microsoft Intune管理センターから、カスタムデバイスプロファイルを作成する。" },
      { "letter": "C", "text": "Microsoft Intune管理センターから、「管理用テンプレート」デバイスプロファイルを作成する。" },
      { "letter": "D", "text": "グループポリシー管理エディターから、デフォルトドメインポリシーの「ユーザーの構成」設定を構成する。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 82,
    "question": "Microsoft Intune Suiteを使用するMicrosoft 365サブスクリプションがあります。Microsoft Intuneを使用してWindows 11デバイスを管理しています。\n\nユーザーに「数値の一致（number matching）」を要求するパスワードレス認証を実装する必要があります。\n\nどの認証方法を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Authenticator" },
      { "letter": "B", "text": "音声通話" },
      { "letter": "C", "text": "FIDO2 セキュリティキー" },
      { "letter": "D", "text": "テキストメッセージ（SMS）" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 83,
    "question": "Microsoft 365サブスクリプションがあります。\n\nユーザーに対して、「セキュリティの既定値（Security defaults）」の管理と「条件付きアクセス（Conditional Access）」ポリシーの作成を行う権限を付与する必要があります。このソリューションは、最小特権の原則を使用する必要があります。\n\nユーザーにどのロールを割り当てるべきですか？",
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
    "question": "Microsoft Intuneを使用するMicrosoft 365サブスクリプションがあります。5台の新しいWindows 11 Proデバイスがあります。\n\nデバイスを企業での使用に合わせて準備する必要があります。このソリューションは、次の要件を満たす必要があります：\n・各デバイスにWindows 11 Enterpriseをインストールする。\n・App1という名前のWindowsインストーラー（MSI）パッケージを各デバイスにインストールする。\n・App1に必要なCertificate1という名前の証明書を追加する。\n・各デバイスをAzure ADに参加させる。\n\nどの3つのプロビジョニングオプションを使用できますか？（正解はそれぞれ完全なソリューションを提示します。注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "サブスクリプションのアクティブ化（subscription activation）" },
      { "letter": "B", "text": "カスタムWindowsイメージ" },
      { "letter": "C", "text": "インプレースアップグレード" },
      { "letter": "D", "text": "Windows Autopilot" },
      { "letter": "E", "text": "プロビジョニングパッケージ（provisioning packages）" }
    ],
    "answer": "BDE",
    "images": []
  },
  {
    "id": 85,
    "question": "Windows 10を実行し、Microsoft Intuneによって管理されているコンピューターがあります。ユーザーはD:\\Folder1という名前のフォルダーにファイルを保存します。\n\n信頼されたアプリケーションのリストにのみ、D:\\Folder1への書き込みアクセスを許可する必要があります。\n\nデバイス構成プロファイルで何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Defender Exploit Guard" },
      { "letter": "B", "text": "Microsoft Defender Application Guard" },
      { "letter": "C", "text": "Microsoft Defender SmartScreen" },
      { "letter": "D", "text": "Microsoft Defender Application Control" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 86,
    "question": "【ホットスポット】\n\nMicrosoft Intuneに登録された100台のWindows 10デバイスを含むMicrosoft 365 E5サブスクリプションがあります。\n\n次の要件を満たすエンドポイントセキュリティポリシーを作成する必要があります：\n・Windowsセキュリティアプリ内の「ファイアウォールとネットワーク保護」領域を非表示にする。\n・デバイスでのWindows Hello for Businessのプロビジョニングを無効にする。\n\nどの2つのポリシータイプを使用すべきですか？回答するには、回答領域で適切なポリシーを選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image195.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image196.png", "analysis": "" }
    ]
  },
  {
    "id": 87,
    "question": "Microsoft Intune Suiteを使用するMicrosoft 365サブスクリプションがあります。Microsoft Intuneを使用してデバイスを管理しています。\n\nIntuneへの自動登録（Auto-enrollment）が構成されています。\n\n現在ワークグループに属している100台のWindows 11デバイスがあります。\nそれらのデバイスを企業のワイヤレスネットワークに接続し、100台の新しいWindows 11デバイスをIntuneに登録する必要があります。\n\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "プロビジョニングパッケージ（provisioning package）" },
      { "letter": "B", "text": "グループポリシーオブジェクト（GPO）" },
      { "letter": "C", "text": "モバイルデバイス管理（MDM）自動登録" },
      { "letter": "D", "text": "デバイス構成ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 88,
    "question": "次の表に示すデバイスを含むAzure ADテナントがあります。\n\n・Device1: Windows 10 Pro, Azure AD参加済\n・Device2: Windows 11 Pro, Azure AD参加済\n・Device3: Windows 10 Pro, ハイブリッドAzure AD参加済\n・Device4: Windows 11 Pro, Azure AD登録済\n\nWindows 11 Enterprise E5ライセンスを購入しました。\n\nどのデバイスで「サブスクリプションのアクティブ化（Subscription Activation）」を使用してWindows 11 Enterpriseにアップグレードできますか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 と Device2 のみ" },
      { "letter": "C", "text": "Device1 と Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image191.png", "analysis": "" }
    ]
  },
  {
    "id": 89,
    "question": "ネットワークにActive Directoryドメインが含まれています。ドメインにはWindows 11を実行するComputer1という名前のコンピューターが含まれています。\n\nComputer1でWindowsリモート管理（WinRM）サービスを有効にし、次の構成を実行する必要があります：\n・WinRMサービスのスタートアップの種類を「自動」に設定する。\n・任意のIPアドレスからの要求を受け入れるリスナーを作成する。\n・WS-Management通信用のファイアウォールの例外を有効にする。\n\nどのPowerShellコマンドレットを使用すべきですか？",
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
    "question": "【ホットスポット】\n\nadatum.comという名前のActive Directoryドメイン、ワークグループ、およびWindows 10を実行するコンピューターを含むネットワークがあります。コンピューターは次の表のように構成されています。\n\n・Computer1: adatum.comドメイン所属\n・Computer2: adatum.comドメイン所属\n・Computer3: ワークグループ所属\n\nComputer1、Computer2、およびComputer3のローカルAdministratorアカウントは、同じユーザー名とパスワードを持っています。\nComputer1では、Windows Defenderファイアウォールが図のように構成されています。Computer1の各サービスの状態も図に示されています。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
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
    "question": "Windows 10を実行するコンピューターに「機能更新プログラム（feature update）」をインストールしました。\n\n更新プログラムをロールバックできる期間は何日間ですか？",
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
    "question": "Azure Log Analyticsワークスペースを含むMicrosoft Azureサブスクリプションがあります。\n\nWindows 10を実行するComputer1という名前の新しいコンピューターを展開します。Computer1はワークグループ内にあります。\n\nLog Analyticsを使用してComputer1からのイベントを照会（クエリ）できるようにする必要があります。\n\nComputer1で何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure ADに参加させる。" },
      { "letter": "B", "text": "Windows Defenderファイアウォールを構成する。" },
      { "letter": "C", "text": "イベントサブスクリプションを作成する。" },
      { "letter": "D", "text": "Azure Monitorエージェントをインストールする。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 93,
    "question": "Microsoft 365 E5サブスクリプションと、100台の管理されていないiPadデバイスがあります。\n\nデバイスに特定のiOS更新プログラムを展開する必要があります。ユーザーが手動でより新しいバージョンのiOSをインストールできないようにする必要があります。\n\nどの2つのアクションを実行すべきですか？（正解はそれぞれソリューションの一部を示します。注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "デバイス構成プロファイルを作成する。" },
      { "letter": "B", "text": "Intuneポータルサイトを使用してデバイスをMicrosoft Intuneに登録する。" },
      { "letter": "C", "text": "コンプライアンスポリシーを作成する。" },
      { "letter": "D", "text": "iOSアプリプロビジョニングプロファイルを作成する。" },
      { "letter": "E", "text": "Apple Business Managerを使用してデバイスをMicrosoft Intuneに登録する。" }
    ],
    "answer": "AE",
    "images": []
  },
  {
    "id": 94,
    "question": "【ドラッグ＆ドロップ】\n\nUser1とUser2という名前の2人のユーザーを含むMicrosoft 365サブスクリプションがあります。\n\nユーザーが次のタスクを実行できるようにする必要があります：\n・User1は、グループの作成とユーザーの管理ができる必要がある。\n・User2は、管理者以外のユーザーのパスワードをリセットできる必要がある。\n\nこのソリューションは、最小特権の原則を使用する必要があります。各ユーザーにどのロールを割り当てるべきですか？回答するには、適切なロールを正しいユーザーにドラッグしてください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image156.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image157.png", "analysis": "" }
    ]
  },
  {
    "id": 95,
    "question": "【ホットスポット】\n\n次の表に示すユーザーを含む、contoso.comという名前のAzure ADテナントがあります。\n\n・User1: Group1所属\n・User2: Group1, Group2所属\n\ncontoso.comのモビリティ（MDMおよびMAM）設定には、次の構成があります：\n・MDMユーザースコープ：Group1\n・MAMユーザースコープ：Group2\n\n次の表に示すデバイスを購入しました：\n・Device1: Windows 10, Group1のUser1が所有\n・Device2: Windows 10, Group2のUser2が所有\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image174.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image175.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image176.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image559.png", "analysis": "" }
    ]
  },
  {
    "id": 96,
    "question": "Windows 11を実行するComputer1という名前のコンピューターがあります。\nUser1という名前のユーザーが、リモートデスクトップを使用してComputer1に接続する予定です。\n\nリモートデスクトップ接続が確立されサインインページが表示される前に、User1のデバイスが認証されるようにする必要があります。\n\nComputer1で何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "評価ベースの保護（Reputation-based protection）をオンにする。" },
      { "letter": "B", "text": "ネットワークレベル認証（NLA）を有効にする。" },
      { "letter": "C", "text": "ネットワーク探索をオンにする。" },
      { "letter": "D", "text": "リモートデスクトップ構成サービスを構成する。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 97,
    "question": "【ドラッグ＆ドロップ】\n\n会社にはWindows 10を実行するComputer1という名前のコンピューターがあります。Computer1は、退職したユーザーによって使用されていました。\n\nComputer1を再利用し、新しいユーザーに割り当てる予定です。Windows Autopilotを使用してComputer1を再展開（Redeploy）する必要があります。\n\n順番に実行すべき3つのアクションはどれですか？回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image138.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image139.png", "analysis": "" }
    ]
  },
  {
    "id": 98,
    "question": "contoso.comという名前のAzure ADテナントがあります。\nWindows 11を実行するワークグループコンピューターであるComputer1があります。\n\nComputer1をcontoso.comに追加する必要があります。\n\n何を使用すべきですか？",
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
    "question": "Microsoft Intuneを含むMicrosoft 365サブスクリプションがあります。\n次の設定を含むUpdateRing1という名前の更新リングがあります：\n・自動更新の動作：スケジュールされた時刻に自動インストールして再起動する。\n・自動動作の頻度：月の第1週\n・スケジュールされたインストール日：火曜日\n・スケジュールされたインストール時間：午前3時\n\nMicrosoft Intune管理センターから、UpdateRing1の機能更新プログラムに対して「アンインストール（Uninstall）」を選択しました。\n\nデバイスが機能更新プログラムの削除を開始するのはいつですか？",
    "choices": [
      { "letter": "A", "text": "ユーザーがアンインストールを承認したとき。" },
      { "letter": "B", "text": "ポリシーが受信されると同時。" },
      { "letter": "C", "text": "次の火曜日。" },
      { "letter": "D", "text": "翌月の第1火曜日。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 100,
    "question": "iOSデバイスを管理するためにMicrosoft Intuneサブスクリプションを使用しています。脱獄（jailbroken）したiOSデバイスをブロックするデバイスコンプライアンスポリシーを構成しました。\n\n追加で「拡張脱獄検出（Enhanced jailbreak detection）」を有効にする必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "コンプライアンスポリシーの設定（Compliance policy settings）" },
      { "letter": "B", "text": "デバイスコンプライアンスポリシー" },
      { "letter": "C", "text": "ネットワークの場所（network location）" },
      { "letter": "D", "text": "構成プロファイル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 101,
    "question": "Windows 10を実行するComputer1とComputer2という2台のコンピューターがあります。Computer2ではリモートデスクトップが有効になっています。\n\nComputer1から、リモートデスクトップ接続を使用してComputer2に接続します。\nリモートデスクトップセッション内からComputer1のローカルドライブにアクセスできるようにする必要があります。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Computer2から、リモートデスクトップ設定を構成する。" },
      { "letter": "B", "text": "Computer1のWindows Defenderファイアウォールから、リモートデスクトップを許可する。" },
      { "letter": "C", "text": "Computer2のWindows Defenderファイアウォールから、ファイルとプリンターの共有を許可する。" },
      { "letter": "D", "text": "Computer1から、リモートデスクトップ接続の設定を構成する。" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 102,
    "question": "Windows 11 Proを実行するコンピューターがあります。コンピューターはAzure ADに参加しており、Microsoft Intuneに登録されています。\n\nコンピューターをWindows 11 Enterpriseにアップグレードする必要があります。\n\nIntuneで何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイスコンプライアンスポリシー" },
      { "letter": "B", "text": "デバイスクリーンアップルール" },
      { "letter": "C", "text": "デバイス登録ポリシー" },
      { "letter": "D", "text": "デバイス構成プロファイル" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 103,
    "question": "次の表に示すデバイスを含むMicrosoft 365 E5サブスクリプションがあります。\n\n・Device1: Windows 10 Enterprise, BitLocker有効\n・Device2: Windows 11 Enterprise, BitLocker有効\n・Device3: Windows 10 Pro, BitLocker有効\n・Device4: Windows 11 Pro, BitLocker有効\n\nすべてのデバイスにMicrosoft Edgeがインストールされています。\nMicrosoft Intune管理センターから、Edge1という名前のMicrosoft Edgeセキュリティベースラインプロファイルを作成しました。\n\nEdge1を、サポートされているすべてのデバイスに適用する必要があります。どのデバイスにEdge1を適用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device1 と Device2 のみ" },
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
    "question": "【ホットスポット】\n\nWindows Autopilot展開プロファイルを作成します。\n次の要件を満たすようにプロファイル設定を構成する必要があります：\n・エンドユーザーの認証を必要とせずに、新しいデバイスを自動的に登録し、システムアプリをプロビジョニングする。\n・コンピューター名にハードウェアのシリアル番号を含める。\n\nどの2つの設定を構成すべきですか？回答するには、回答領域で適切な設定を選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image178.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image179.png", "analysis": "" }
    ]
  },
  {
    "id": 105,
    "question": "Microsoft 365サブスクリプションがあります。Windows Autopilotを使用して25台のWindows 11デバイスをプロビジョニングする予定です。\n\nOut-of-box experience（OOBE）設定を構成する必要があります。\n\nMicrosoft Intune管理センターで何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "登録ステータスページ（ESP）" },
      { "letter": "B", "text": "展開プロファイル（deployment profile）" },
      { "letter": "C", "text": "コンプライアンスポリシー" },
      { "letter": "D", "text": "PowerShell スクリプト" },
      { "letter": "E", "text": "構成プロファイル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 106,
    "question": "【ホットスポット】\n\nネットワークに、adatum.comという名前のActive Directoryドメインが含まれています。ドメインには、Windows 10を実行するComputer1とComputer2の2台のコンピューターが含まれています。Computer2ではリモートデスクトップが有効になっています。\n\nドメインには次の表に示すユーザーアカウントが含まれています：\n・Admin1: ドメイン管理者\n・User1: 標準ユーザー\n\nComputer2には次の表に示すローカルグループが含まれています：\n・Administrators\n・Remote Desktop Users\n\nComputer2に関する関連するユーザー権利の割り当て（User rights assignments）が図の表に示されています。\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
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
    "question": "【ドラッグ＆ドロップ】\n\nオンプレミスのエンタープライズ証明機関（CA）へのPFX証明書コネクタを使用するように構成されたMicrosoft Intuneサブスクリプションがあります。\n\nIntuneを使用して、公開鍵ペア（PKCS）証明書を使用したAndroidデバイスの自動登録（autoenrollment）を構成する必要があります。\n\n順番に実行すべき3つのアクションはどれですか？回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image152.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image153.png", "analysis": "" }
    ]
  },
  {
    "id": 108,
    "question": "【ホットスポット】\n\nMicrosoft Intuneに、図の表に示すデバイスコンプライアンスポリシーがあります。\nIntuneのコンプライアンスポリシー設定が、展示（Exhibit）に示されているように構成されています。\n\n6月1日に、次の表に示すWindows 10デバイスをIntuneに登録します：\n・Device1: Group1所属\n・Device2: Group1所属\n・Device3: 所属なし\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
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
    "question": "Microsoft Intuneを使用するMicrosoft 365サブスクリプションがあります。\n次の表に示すように、Intuneにアプリを追加しました：\n・App1: Microsoft Edge (Windows 10以降)\n・App2: Outlook (iOS/iPadOS)\n・App3: Managed Google Playストアアプリ (Android Enterprise)\n\nAndroid Enterpriseプラットフォーム用のPolicy1という名前のアプリ構成ポリシーを作成する必要があります。\n\nPolicy1を使用して管理できるアプリはどれですか？",
    "choices": [
      { "letter": "A", "text": "App2 のみ" },
      { "letter": "B", "text": "App3 のみ" },
      { "letter": "C", "text": "App1 と App3 のみ" },
      { "letter": "D", "text": "App2 と App3 のみ" },
      { "letter": "E", "text": "App1, App2, および App3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image192.png", "analysis": "" }
    ]
  },
  {
    "id": 110,
    "question": "【ホットスポット】\n\nWindows 10を実行する200台のコンピューターがあります。コンピューターはAzure ADに参加しており、Microsoft Intuneに登録されています。\n\nカスタムイメージを壁紙およびサインイン画面として設定する必要があります。\n\n「デバイス制限（Device restrictions）」構成プロファイルで、どの2つの設定を構成すべきですか？回答するには、回答領域で適切な設定を選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image193.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image194.png", "analysis": "" }
    ]
  },
  {
    "id": 111,
    "question": "1,000台のWindows 11デバイスを含むMicrosoft 365 E5サブスクリプションがあります。すべてのデバイスはMicrosoft Intuneに登録されています。\n\nIntuneとMicrosoft Defender for Endpointを統合する予定です。\nIntuneとDefender for Endpointの間に「サービス間接続（service-to-service connection）」を確立する必要があります。\n\nMicrosoft Intune管理センターでどの設定を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "プレミアム アドオン" },
      { "letter": "B", "text": "コネクタとトークン" },
      { "letter": "C", "text": "テナントの登録" },
      { "letter": "D", "text": "Microsoft Tunnel Gateway" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 112,
    "question": "次の表に示すWindows 10デバイスがあります。\n\n・Device1: Windows 10 Home\n・Device2: Windows 10 Pro\n・Device3: Windows 10 Enterprise (64-bit)\n・Device4: Windows 10 Enterprise (32-bit)\n\nデバイスをWindows 11 Enterpriseにアップグレードする予定です。\nどのデバイスで、Windows 11 Enterpriseへの直接的な「インプレースアップグレード（in-place upgrade）」を実行できますか？",
    "choices": [
      { "letter": "A", "text": "Device3 のみ" },
      { "letter": "B", "text": "Device3 と Device4 のみ" },
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
    "question": "【ホットスポット】\n\nオンプレミスのActive Directoryドメイン（contoso.com）がAzure ADと同期しているネットワークがあります。\nUser1という名前のユーザーが、図の表に示すドメイン参加済みデバイスを使用しています。\n\n・Device1: Windows 11 Pro\n・Device2: Windows 10 Pro\n・Device3: Windows 11 Enterprise\n\nMicrosoft Entra管理センターで、User1に「Windows 11 Enterprise E5」ライセンスを割り当てます。\nUser1が次に各デバイスにサインインした際に何が発生するかを特定する必要があります。回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image239.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image240.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image562.png", "analysis": "" }
    ]
  },
  {
    "id": 114,
    "question": "会社にはリモートデスクトップゲートウェイ（RD Gateway）があります。\nRD Gateway経由でリモートデスクトップサービス（RDS）によってアクセス可能なServer1という名前のサーバーがあります。\n\nゲートウェイ経由で接続するようにリモートデスクトップ接続（MSTSC）を構成する必要があります。\n\nどの設定を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "どこからでも接続する（Connect from anywhere）" },
      { "letter": "B", "text": "サーバー認証" },
      { "letter": "C", "text": "接続設定" },
      { "letter": "D", "text": "ローカルデバイスとリソース" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 115,
    "question": "Microsoft Deployment Toolkit（MDT）の展開共有（deployment share）があります。\nStandard Client Task Sequenceテンプレートを使用してWindows 11を展開する予定です。\n\n次のアクションを実行するために、タスクシーケンスを修正する必要があります：\n・Unified Extensible Firmware Interface（UEFI）をサポートするようにディスクをフォーマットする。\n・回復パーティションを作成する。\n\nタスクシーケンスのどのフェーズを修正すべきですか？",
    "choices": [
      { "letter": "A", "text": "Preinstall（プレインストール）" },
      { "letter": "B", "text": "PostInstall（ポストインストール）" },
      { "letter": "C", "text": "Install（インストール）" },
      { "letter": "D", "text": "Initialization（初期化）" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 116,
    "question": "【ドラッグ＆ドロップ】\n\nネットワークにActive Directoryドメインがあります。\nサーバーにMicrosoft Deployment Toolkit（MDT）をインストールしました。\nWindows 11のカスタムイメージがあります。\n\nMDTを使用して、このイメージを100台のデバイスに展開する必要があります。\n\n順番に実行すべき3つのアクションはどれですか？回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image247.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image248.png", "analysis": "" }
    ]
  },
  {
    "id": 117,
    "question": "ネットワークにはオンプレミスのActive Directoryドメインが含まれています。ドメインには、Windows 10を実行するComputer1とComputer2という2台のコンピューターが含まれています。\n\nComputer1にWindows Admin Centerをインストールしました。\nWindows Admin Centerを使用して、Computer1からComputer2を管理する必要があります。\n\nComputer2で何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "TrustedHostsリストを更新する。" },
      { "letter": "B", "text": "Enable-PSRemotingコマンドレットを実行する。" },
      { "letter": "C", "text": "Microsoft Defenderファイアウォールを介してWindowsリモート管理（WinRM）を許可する。" },
      { "letter": "D", "text": "インバウンドのMicrosoft Defenderファイアウォールルールを追加する。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 118,
    "question": "【ホットスポット】\n\nMicrosoft Intune Suiteを使用するMicrosoft 365サブスクリプションがあります。Microsoft Intuneを使用してデバイスを管理しています。\n\nマーケティング部門と研究部門向けに、Windows 11デバイスのビルドを作成する予定です。このソリューションは、以下の要件を満たす必要があります：\n・マーケティング部門のデバイスは、Windows Update for Businessをサポートする必要がある。\n・研究部門のデバイスは、機能更新プログラムのバージョンに対してリリースから最大36か月間のサポートを受ける必要がある。\n\n各部門に必要な最小限のWindows 11エディションは何ですか？回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに1ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image252.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image253.png", "analysis": "" }
    ]
  },
  {
    "id": 119,
    "question": "contoso.comという名前のAzure ADテナントがあります。\nWindows Autopilotを使用して、次の表に示すWindows 10デバイスを構成する予定です：\n\n・Device1: TPM 1.2, 有線イーサネット接続\n・Device2: TPM 2.0, 有線イーサネット接続\n・Device3: TPM 2.0, Wi-Fi接続\n\nどのデバイスを「Windows Autopilot 自己展開モード（self-deploying mode）」を使用して構成できますか？",
    "choices": [
      { "letter": "A", "text": "Device2 のみ" },
      { "letter": "B", "text": "Device3 のみ" },
      { "letter": "C", "text": "Device1 と Device3 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image254.png", "analysis": "" }
    ]
  },
  {
    "id": 120,
    "question": "Windows 11を実行する個人のデバイスに対して、モバイルデバイス管理（MDM）を実装する必要があります。このソリューションは、次の要件を満たす必要があります：\n\n・Microsoft Intuneを使用して個人用デバイスを管理できること。\n・ユーザーが個人用デバイスからシームレスに企業データにアクセスできること。\n・ユーザーが個人用アカウントを使用してのみ、個人用デバイスにサインインできるようにすること。\n\nデバイスをAzure ADに追加するために何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Azure AD 登録（Azure AD registered）" },
      { "letter": "B", "text": "ハイブリッド Azure AD 参加（hybrid Azure AD join）" },
      { "letter": "C", "text": "Azure AD 参加（Azure AD joined）" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 121,
    "question": "【ドラッグ＆ドロップ】\n\nDS1 という名前の Microsoft Deployment Toolkit (MDT) 展開共有があります。\nDS1 に Windows 11 のイメージをインポートしました。\nApp1.exe という名前のアプリケーションの実行可能インストーラーがあります。\n\nこのイメージを展開するすべてのタスクシーケンスで、App1 がインストールされるようにする必要があります。\n\n順番に実行すべき 3 つのアクションはどれですか？\n回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image186.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image187.png", "analysis": "" }
    ]
  },
  {
    "id": 122,
    "question": "【ホットスポット】\n\nAzure AD テナントに次のものが含まれています：\n・Azure AD に参加している Windows 11 デバイス。\n・表示名が User1、UPN が user1@contoso.com のユーザー。\n\nWindows 11 デバイスでリモートデスクトップを有効にします。\nUser1 がリモートデスクトップを使用してデバイスに接続できるようにする必要があります。\n\n各デバイスで実行する必要があるコマンドをどのように完成させるべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image351.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image352.png", "analysis": "" }
    ]
  },
  {
    "id": 123,
    "question": "【ホットスポット】\n\nネットワークには Active Directory ドメインが含まれています。Active Directory は Azure AD と同期されています。\nWindows 10 を実行し、Microsoft Intune に登録されている 500 台の Active Directory ドメイン参加済みコンピューターがあります。\n\nMicrosoft Defender Exploit Guard を実装する予定です。\nカスタムの Microsoft Defender Exploit Guard ポリシーを作成し、それをすべてのコンピューターに配布する必要があります。\n\n何をすべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image312.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image313.png", "analysis": "" }
    ]
  },
  {
    "id": 124,
    "question": "次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\n\n・Device1: Windows 11 Pro\n・Device2: Windows 10 Pro\n・Device3: Windows 11 Enterprise\n・Device4: Windows 10 Enterprise\n\nどのデバイスの更新プログラムを Intune を使用して管理できますか？",
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
    "id": 125,
    "question": "Windows 10 を実行する 500 台のコンピューターがあります。コンピューターは Azure AD に参加しており、Microsoft Intune に登録されています。\n\nSimple Certificate Enrollment Protocol (SCEP) を使用して、コンピューターに証明書を配布する予定です。\n次の表に示すサーバーがあります。\n\n・Server1: CA サーバー (ルート)\n・Server2: CA サーバー (サブ)\n・Server3: NDES サーバー\n・Server4: Intune 証明書コネクタ サーバー\n\nNDES はサブ発行元 CA から証明書を発行します。\n図の展示（Exhibit）に示すようにデバイス構成プロファイルを構成しています。\nSCEP プロファイルを完成させる必要があります。\n必要な「ルート証明書」はどのサーバーにありますか？",
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
    "id": 126,
    "question": "【ホットスポット】\n\n次の表に示すデバイスを含む Microsoft 365 サブスクリプションがあります。\n\n・Device1: Windows 11\n・Device2: iOS\n・Device3: Android\n\nデバイスを Microsoft Intune に登録する予定です。\n各デバイスが Intune に登録された後、コンプライアンス ポリシーのチェックインはどのくらいの頻度で実行されますか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image362.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image363.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image364.png", "analysis": "" }
    ]
  },
  {
    "id": 127,
    "question": "【ホットスポット】\n\n次の表に示すように、Microsoft Intune に登録された 2 台の Windows 10 デバイスがあります。\n\n・Device1: 登録日 7月1日\n・Device2: 登録日 7月1日\n\nコンプライアンス ポリシー設定が図のように構成されています。\n8月1日に、図のようにコンプライアンス ポリシーを作成します。\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image365.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image366.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image367.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image368.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image369.png", "analysis": "" }
    ]
  },
  {
    "id": 128,
    "question": "【ホットスポット】\n\n次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\n\n・Device1: Windows 11 Enterprise\n・Device2: Windows 11 Enterprise (個人所有)\n・Device3: Android Enterprise (専用デバイス)\n・Device4: iOS/iPadOS (ADE)\n\n次の項目を特定する必要があります：\n・「ワイプ (Wipe)」アクションを使用して Intune から削除できるデバイス。\n・ワイプされたデバイスで、登録状態と関連するユーザー アカウントを保持できるかどうか。\n\n何を特定すべきですか？回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image372.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image373.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image374.png", "analysis": "" }
    ]
  },
  {
    "id": 129,
    "question": "【ホットスポット】\n\n次の表に示すデバイスを含む contoso.com という名前の Azure AD テナントがあります。\n\n・Device1: Windows 10 Enterprise\n・Device2: Windows 10 Pro\n・Device3: Windows 10 Enterprise\n\nテナントには、次の表に示す Azure AD グループが含まれています：\n・Group1, Group2, Group3\n\n図に示すように Autopilot 展開プロファイルを追加します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image375.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image376.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image377.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image378.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image379.png", "analysis": "" }
    ]
  },
  {
    "id": 130,
    "question": "【ホットスポット】\n\n次の表に示すように、3 つのサイトに Microsoft Deployment Toolkit (MDT) がインストールされています。\n\n・Site1, Site2, Site3\n\n分散ファイル システム (DFS) レプリケーションを使用して、「Production」という共有内のイメージをレプリケートします。\nBootstrap.ini ファイルに次の図のような設定を構成します。\n\n次の表に示すコンピューターに Windows 10 を展開する予定です：\n・Computer1 (Site1), Computer2 (Site2), Computer3 (Site3)\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image380.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image381.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image382.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image383.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image384.png", "analysis": "" }
    ]
  },
  {
    "id": 131,
    "question": "Microsoft Intune に登録された 1,000 台の Android デバイスを含む Microsoft 365 サブスクリプションがあります。\n\n次の設定を含むアプリ構成ポリシーを作成します：\n・デバイス登録タイプ：管理対象デバイス\n・プロファイル タイプ：すべてのプロファイル タイプ\n・プラットフォーム：Android Enterprise\n\nどの 2 つのタイプのアプリをこのポリシーに関連付けることができますか？\n（注：正解はそれぞれ完全なソリューションを提示します。正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "Android Enterprise システム アプリ" },
      { "letter": "B", "text": "Web リンク" },
      { "letter": "C", "text": "Android ストア アプリ" },
      { "letter": "D", "text": "管理対象 Google Play ストア アプリ" },
      { "letter": "E", "text": "組み込み Android アプリ" }
    ],
    "answer": "AD",
    "images": []
  },
  {
    "id": 132,
    "question": "Microsoft 365 サブスクリプションがあります。\n次の表に示すように、Microsoft Intune に登録されたデバイスがあります。\n\n・Device1: Windows 10 Pro\n・Device2: Windows 10 Pro (個人所有)\n・Device3: Windows 10 Pro (ハイブリッド参加)\n・Device4: Windows 10 Pro (Azure AD参加のみ、Intune未登録)\n\nどのデバイスに Intune を使用してアプリを展開できますか？",
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
    "id": 133,
    "question": "【ホットスポット】\n\nMicrosoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、次の表に示すリソースが含まれています。\n\n・User1 (Device1 の所有者)\n・Group1, Group2, Group3\n\n次の表に示すように、Microsoft 365 Apps を Intune に展開します：\n・App1: Group1 に「必須 (Required)」で割り当て\n・App2: Group2 に「利用可能 (Available)」で割り当て\n\n翌日、アプリの展開結果を確認します。\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image386.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image387.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image388.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image389.png", "analysis": "" }
    ]
  },
  {
    "id": 134,
    "question": "【ドラッグ＆ドロップ】\n\nオンプレミス ネットワークに Active Directory ドメイン サービス (AD DS) ドメインがあります。\nVNet1 という名前の仮想ネットワークを含む Azure サブスクリプションがあります。VNet1 には 5 台の仮想マシンがあり、オンプレミス ネットワークには接続されていません。\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nWindows 365 Enterprise ライセンスを購入しました。\n\nクラウド PC (Cloud PC) を展開する必要があります。ソリューションは次の要件を満たす必要があります：\n・すべてのユーザーがいつでも制限なくクラウド PC にアクセスできること。\n・ユーザーが VNet1 上の仮想マシンに接続できること。\n\nWindows 365 のプロビジョニング ポリシーをどのように構成すべきですか？\n回答するには、適切なオプションを正しい設定にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image392.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image393.png", "analysis": "" }
    ]
  },
  {
    "id": 135,
    "question": "Hyper-V ホストがあります。ホストには、次の表に示す Windows 10 を実行する仮想マシンが含まれています。\n\n・VM1: 第1世代, Windows 10, セキュリティ設定なし\n・VM2: 第2世代, Windows 10, TPM 有効, セキュアブート有効\n・VM3: 第2世代, Windows 10, TPM 無効, セキュアブート有効\n\nどの仮想マシンを Windows 11 にアップグレードできますか？",
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
    "id": 136,
    "question": "【ホットスポット】\n\nネットワークには Active Directory ドメインが含まれています。\nドメインには、Windows 10 を実行する Computer1, Computer2, Computer3, Computer4 という 4 台のコンピューターが含まれています。\n\n次の操作を実行しました：\n・Computer1：Windows Admin Center をインストールし、TCP 80, 443, 6516 の受信通信を許可するようにファイアウォールを構成した。\n・Computer2：Enable-PSRemoting コマンドレットを実行した。\n・Computer3：WinRM トラフィックを許可するようにファイアウォールを構成した。\n・Computer4：winrm quickconfig コマンドを実行した。\n\nWindows Admin Center を使用してコンピューターをリモート管理する必要があります。\nどのコンピューターから Windows Admin Center に接続でき、どのコンピューターを Windows Admin Center で管理できますか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image394.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image395.png", "analysis": "" }
    ]
  },
  {
    "id": 137,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 E5 サブスクリプションがあります。\nサブスクリプションには、Intune に登録されており、個人所有の仕事用プロファイル (Personally-owned work profile) を持つ Android Enterprise デバイスが含まれています。すべてのデバイスは Group1 というグループのメンバーです。\n\nAndroid デバイスのセキュリティ プロバイダーが最新でない場合に、エンド ユーザーと Intune 管理者が電子メール メッセージを受信するようにする必要があります。\n\nIntune 管理センターから、順番に実行すべきアクションはどれですか？\n回答するには、適切なアクションを正しい順序にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image404.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image405.png", "analysis": "" }
    ]
  },
  {
    "id": 138,
    "question": "【ホットスポット】\n\nMicrosoft 365 サブスクリプションがあります。\nMicrosoft Intune を使用して管理する予定の 25 台の Microsoft Surface Hub デバイスがあります。\n\nデバイスを次の要件を満たすように構成する必要があります：\n・Windows Hello for Business を有効にする。\n・Microsoft Defender SmartScreen を構成して、検証されていないファイルの実行をブロックする。\n\n各要件に対してどのプロファイル タイプ テンプレートを使用すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image406.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image407.png", "analysis": "" }
    ]
  },
  {
    "id": 139,
    "question": "【ホットスポット】\n\n次の表に示すセキュリティ グループを含む Microsoft 365 E5 サブスクリプションがあります：\n・Group1, Group2, Group3\n\nサブスクリプションには、次の表に示す Windows 11 バージョン 21H2 デバイスが含まれています：\n・Device1 (Group1), Device2 (Group2), Device3 (Group3)\n\n次の表に示す Deployment1 という名前の機能更新プログラム展開プロファイルがあります：\n・展開対象：Windows 11 バージョン 22H2\n・割り当て：Group1, Group2\n・除外：Group3\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image408.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image409.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image410.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image411.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image412.png", "analysis": "" }
    ]
  },
  {
    "id": 140,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nIntune を使用して Windows 11 デバイスを管理しています。\n\nWindows Local Administrator Password Solution (Windows LAPS) を実装する必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "構成プロファイル (Configuration profile)" },
      { "letter": "B", "text": "アカウント保護 (Account protection) ポリシー" },
      { "letter": "C", "text": "アプリ保護 (App protection) ポリシー" },
      { "letter": "D", "text": "デバイス コンプライアンス ポリシー" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 141,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。\nAPK ファイル形式を使用するカスタム アプリを Android デバイスに展開する必要があります。\n\n展開のためにどの種類のアプリを選択すべきですか？",
    "choices": [
      { "letter": "A", "text": "組み込み (Built-in)" },
      { "letter": "B", "text": "Android ストア" },
      { "letter": "C", "text": "管理対象 Google Play" },
      { "letter": "D", "text": "基幹業務 (LOB) アプリ" },
      { "letter": "E", "text": "Web リンク" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 142,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Intune を使用してすべてのデバイスを管理しています。\n\nApp1.exe という名前の Win32 アプリを展開するために準備する必要があります。\n最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune 管理センターから、アプリ構成ポリシーを作成する。" },
      { "letter": "B", "text": "App1.exe を INTUNEWIN 形式に変換する。" },
      { "letter": "C", "text": "Microsoft 365 Apps 管理センターから、展開構成を作成する。" },
      { "letter": "D", "text": "App1.exe を Azure Blob ストレージにアップロードする。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 143,
    "question": "【ホットスポット】\n\nオンプレミス ネットワークに contoso.com という名前の Active Directory ドメインが含まれています。ドメインには Admin1 という名前のユーザー アカウントと、次の表に示すリソースが含まれています：\n・Server1 (AD 参加), Group1, OU1\n\nMicrosoft 365 E5 サブスクリプションがあります。contoso.com と同期する Microsoft Entra テナントがあります。\nAdmin1 は、Windows Autopilot を使用して 100 台の Windows 11 デバイスを展開する予定です。展開は次の要件を満たす必要があります：\n・展開中にデバイスが Microsoft Entra ハイブリッド参加されること。\n・コンピューター オブジェクトが OU1 に作成されること。\n\n展開をサポートするために、Server1 と Active Directory の権限委任をどのように構成すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image399.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image400.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image401.png", "analysis": "" }
    ]
  },
  {
    "id": 144,
    "question": "Windows 365 Enterprise ライセンスを持つ Microsoft 365 サブスクリプションがあります。\nカスタムの Windows 11 イメージをクラウド PC のテンプレートとして使用する予定です。\n\n次の構成を持つ Windows 11 仮想マシン (VM1) が Hyper-V 上にあります：\n・名前：VM1\n・ディスク サイズ：64 GB\n・ディスク形式：VHDX\n・ディスク タイプ：固定サイズ\n・世代：第2世代\n\nVM1 をカスタム イメージのソースとして使用できるようにする必要があります。\nVM1 で最初に何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "ディスク タイプを「容量可変 (Dynamically expanding)」に変更する。" },
      { "letter": "B", "text": "ディスク形式を VHD に変更する。" },
      { "letter": "C", "text": "世代を第1世代に変更する。" },
      { "letter": "D", "text": "ディスク サイズを増やす。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 145,
    "question": "オンプレミス ネットワークに contoso.com という名前の Active Directory ドメイン サービス (AD DS) ドメインがあります。ドメインには dc1.contoso.com という名前のドメイン コントローラーが含まれています。\nMicrosoft Intune Suite を使用する Microsoft 365 E5 サブスクリプションがあります。\n次の表に示すリソースを含む Azure サブスクリプションがあります：\n・VNet1 (dc1 への接続なし), VNet2 (dc1 への VPN 接続あり), VNet3 (dc1 への接続なし)\n\nWindows 365 Enterprise クラウド PC を展開する予定です。\nMicrosoft Entra ハイブリッド参加を使用する Azure ネットワーク接続 (ANC) を作成する必要があります。\nANC に使用できる仮想ネットワークはどれですか？",
    "choices": [
      { "letter": "A", "text": "VNet2 のみ" },
      { "letter": "B", "text": "VNet1 および VNet2 のみ" },
      { "letter": "C", "text": "VNet2 および VNet3 のみ" },
      { "letter": "D", "text": "VNet1, VNet2, および VNet3" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image402.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image403.png", "analysis": "" }
    ]
  },
  {
    "id": 146,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには Group1 という名前のグループが含まれています。Group1 には Intune に登録されたデバイスが含まれています。\nIntune でリモート ヘルプ (Remote Help) を展開します。\n\nサポート管理者が Group1 のデバイスからのみリモート ヘルプ セッションに参加できるように構成する必要があります。\n\nどの種類の Microsoft Entra オブジェクトを作成し、どの種類のポリシーを構成すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image415.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image416.png", "analysis": "" }
    ]
  },
  {
    "id": 147,
    "question": "Microsoft Intune を含み、Admin1 という名前のユーザーを含む Microsoft 365 E5 サブスクリプションがあります。\nAdmin1 は、Microsoft Intune 管理センターを使用して次のタスクを実行する必要があります：\n・Intune を使用して、ユーザーやデバイスにアプリやポリシーを作成および割り当てる。\n・Windows 365 クラウド PC プロビジョニング ポリシーを作成、割り当て、削除する。\n\nAdmin1 に必要なロールを割り当てる必要があります。ソリューションは次の要件を満たす必要があります：\n・最小特権の原則に従うこと。\n・管理作業を最小限に抑えること。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Admin1 に「ヘルプデスク オペレーター」ロールを割り当てる。" },
      { "letter": "B", "text": "Admin1 に「クラウド PC リーダー」ロールを割り当てる。" },
      { "letter": "C", "text": "Admin1 に「クラウド PC 管理者」ロールを割り当てる。" },
      { "letter": "D", "text": "カスタムの Microsoft Entra ロールを作成し、Admin1 に割り当てる。" },
      { "letter": "E", "text": "カスタムの Intune ロールを作成し、Admin1 に割り当てる。" }
    ],
    "answer": "E",
    "images": []
  },
  {
    "id": 148,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。サブスクリプションには Intune に登録された Windows 11 デバイスと、Department1, Department2, Department3 という名前の 3 つのグループが含まれています。\n\nMicrosoft 365 Apps を Windows 11 デバイスに展開する必要があります。ソリューションは次の要件を満たす必要があります：\n・Department1 と Department2 のユーザー：Project および Visio を含むフルスイートを受信すること。\n・Department3 のユーザー：Project は含むが、Visio は含まないフルスイートを受信すること。\n・その他のすべてのユーザー：Project も Visio も含まないフルスイートを受信すること。\n\n作成する必要がある展開 (Deployments) の最小数はいくつですか？",
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
    "id": 149,
    "question": "Microsoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。\nIntune から Log Analytics にログ データを送信するように構成します。\n\nIntune への登録に失敗したデバイスに関連するイベントを確認する必要があります。\n何を監視すべきですか？",
    "choices": [
      { "letter": "A", "text": "オペレーショナル ログ (Operational logs)" },
      { "letter": "B", "text": "監査ログ (Audit logs)" },
      { "letter": "C", "text": "Intune デバイス ログ" },
      { "letter": "D", "text": "デバイス コンプライアンス組織ログ" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 150,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。サブスクリプションには、企業所有で完全に管理された Android Enterprise デバイスが含まれています。\n\nProfile1 という名前の「デバイス制限」プロファイル タイプを持つ構成プロファイルを展開する予定です。Profile1 は、システム更新用のメンテナンス ウィンドウを割り当てます。\n\nProfile1 の構成設定から何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス エクスペリエンス" },
      { "letter": "B", "text": "全般 (General)" },
      { "letter": "C", "text": "接続性 (Connectivity)" },
      { "letter": "D", "text": "電源設定" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 151,
    "question": "【ホットスポット】\n\nMicrosoft 365 E5 サブスクリプションがあります。\nMicrosoft Intune を使用して Windows 365 クラウド PC デバイスを管理しています。\n\nクラウド PC デバイスに「Windows 365 セキュリティ ベースライン」を展開する必要があります。ソリューションは次の要件を満たす必要があります：\n・データ実行防止 (DEP) をブロックする。\n・仮想化ベースのセキュリティ (VBS) とセキュア ブートを有効にする。\n\nWindows 365 セキュリティ ベースライン プロファイルで何を構成すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image417.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image418.png", "analysis": "" }
    ]
  },
  {
    "id": 152,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows デバイスは Microsoft Intune に登録されています。\n\nPolicy1 という名前のアプリ保護ポリシーを作成し、デバイスに適用する必要があります。\nPolicy1 を使用して何を保護できますか？",
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
    "id": 153,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべてのデバイスは Microsoft Intune に登録されています。\n\n多要素認証 (MFA) を要求する Policy1 という名前の条件付きアクセス ポリシーを作成します。\nPolicy1 が「非準拠」とマークされたデバイスにのみ適用されるようにする必要があります。\n\nPolicy1 のどの設定を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "「条件」の下の「デバイス プラットフォーム」" },
      { "letter": "B", "text": "「条件」の下の「デバイスのフィルター」" },
      { "letter": "C", "text": "ターゲット リソース" },
      { "letter": "D", "text": "制御の許可 (Grant)" },
      { "letter": "E", "text": "セッション" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 154,
    "question": "【ホットスポット】\n\n次の表に示すデバイスを管理するために Microsoft Intune を使用する Microsoft 365 テナントがあります：\n・Device1 (Windows 11), Device2 (macOS), Device3 (Android Enterprise), Device4 (iOS/iPadOS)\n\n次の要件を満たすコンプライアンス ソリューションを展開する必要があります：\n・コンプライアンス ポリシーを満たさないデバイスを「非準拠」としてマークする。\n・非準拠デバイスをリモートでロックする。\n\n必要なコンプライアンス ポリシーの最小数はいくつか、またリモート ロック アクションをサポートするデバイスはどれですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image424.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image425.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image426.png", "analysis": "" }
    ]
  },
  {
    "id": 155,
    "question": "【ホットスポット】\n\nオンプレミス Active Directory (AD DS) ドメインを含むネットワークがあります。\nMicrosoft Intune を含み AD DS ドメインと同期する Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Entra ID で Windows Local Administrator Password Solution (Windows LAPS) が有効になっています。\nサブスクリプションには、次の表に示すカスタム ロールがあります：\n・Role1 (デバイス：読み取り、LAPS：読み取り)\n・Role2 (デバイス：読み取り、LAPS：パスワードの読み取り)\n\nMicrosoft Entra には、次の表に示すユーザーが含まれています：\n・User1 (Role1 割り当て), User2 (Role2 割り当て)\n\n次の表に示すデバイスがあります：\n・Device1 (Azure AD 参加), Device2 (ハイブリッド参加)\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image427.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image428.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image429.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image430.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image431.png", "analysis": "" }
    ]
  },
  {
    "id": 156,
    "question": "【ホットスポット】\n\nMicrosoft 365 E5 サブスクリプションがあり、Microsoft Intune を使用しています。\n50 台の Windows デバイスを購入しました。\nMicrosoft Entra 参加済みデバイスに対して Intune への自動登録を構成します。\n\nプロビジョニング パッケージを使用してデバイスを Microsoft Entra に参加させる必要があります。\n\nプロビジョニング パッケージの作成には何を使用すべきですか？また、一括登録にパッケージを使用できる最大期間はどれくらいですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image432.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image433.png", "analysis": "" }
    ]
  },
  {
    "id": 157,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\n\nDevice1 という名前のデバイスに対して、自動調査および応答 (AIR) の修復レベルを「すべてのフォルダーに対して承認が必要」に構成する必要があります。\n\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "セキュリティ グループ" },
      { "letter": "B", "text": "デバイス グループ" },
      { "letter": "C", "text": "管理単位 (Administrative unit)" },
      { "letter": "D", "text": "アクション グループ" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 158,
    "question": "次の表に示すデバイスを含む Microsoft 365 E5 サブスクリプションがあります。\n\n・Device1 (Windows 11 Pro)\n・Device2 (Windows 11 Pro 10.0.19041 以上)\n・Device3 (macOS 12)\n・Device4 (iOS 15)\n\nすべてのデバイスは Microsoft Intune に登録されており、Microsoft 365 Apps for enterprise がインストールされています。\nどのデバイスで「Microsoft 365 用クラウド ポリシー サービス」を使用して Microsoft 365 Apps for enterprise を管理できますか？",
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
    "id": 159,
    "question": "【ホットスポット】\n\nMicrosoft 365 E5 サブスクリプションがあり、Microsoft Intune を使用しています。サブスクリプションには、オンプレミス AD DS ドメインと同期する Microsoft Entra テナントが含まれています。テナントでは Windows Local Administrator Password Solution (Windows LAPS) が有効になっています。\n\n次の表に示す Windows デバイスがあります：\n・Device1 (Windows 11, Azure AD参加), Device2 (Windows 10, ハイブリッド参加)\n\n図の表に示すように構成されたエンドポイント セキュリティ ポリシーがあります。\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image441.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image442.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image443.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image444.png", "analysis": "" }
    ]
  },
  {
    "id": 160,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\nIntune 管理センターから、次の表に示すアプリを追加します：\n・App1 (Windows app Win32), App2 (Android ストア アプリ)\n\nアプリを次の要件を満たすように構成する必要があります：\n・App1：マーケティング部門の全ユーザーに対して、Intune に登録されたすべての Windows 11 デバイスに自動的にインストールされること。ユーザーが新しいデバイスを受け取った場合も自動インストールされること。\n・App2：人事 (HR) 部門の全ユーザーに対して、Intune に登録されていない個人の Android デバイスからダウンロード可能であること。\n\n各アプリに対してどの割り当て (Assignment) を構成すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image445.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image446.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image447.png", "analysis": "" }
    ]
  },
  {
    "id": 161,
    "question": "Microsoft Entra テナント（contoso.com）があります。\nWindows 11 デバイスを contoso.com に参加させる際、ユーザーがローカルの Administrators グループに「自動的に追加されない」ようにする必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows Autopilot" },
      { "letter": "B", "text": "Windows 用プロビジョニング パッケージ" },
      { "letter": "C", "text": "Microsoft Entra ID のセキュリティの既定値（Security defaults）" },
      { "letter": "D", "text": "Microsoft Entra ID のデバイス設定" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 162,
    "question": "会社には、次の表に示すように Microsoft Intune に登録されたデバイスがあります。\n\n・Device1: Windows 11, Workgroup\n・Device2: Windows 11, Azure AD 参加\n・Device3: Windows 10, ハイブリッド Azure AD 参加\n\nMicrosoft Intune 管理センターで、会社のネットワークを「Location1」という名前の場所として定義します。\nネットワークの場所（network location）に基づいたコンプライアンス ポリシーを使用できるデバイスはどれですか？",
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
    "id": 163,
    "question": "Azure サブスクリプションがあります。\nオンプレミスの Windows 11 デバイスである Device1 があります。\nAzure Monitor を使用して Device1 を監視する予定です。\n\nサブスクリプション内に DCR1 という名前のデータ収集ルール（DCR）を作成します。\nDCR1 は何に関連付ける必要がありますか？",
    "choices": [
      { "letter": "A", "text": "Azure Network Watcher" },
      { "letter": "B", "text": "Device1" },
      { "letter": "C", "text": "Log Analytics ワークスペース" },
      { "letter": "D", "text": "監視対象オブジェクト（Monitored Object）" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 164,
    "question": "Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune に登録された 100 台の iOS デバイスが含まれています。\niOS の更新通知を、更新プログラムがリリースされてから 30 日間延期するようにする必要があります。\n\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "iOS アプリ プロビジョニング プロファイル" },
      { "letter": "B", "text": "「デバイス機能」テンプレートに基づいたデバイス構成プロファイル" },
      { "letter": "C", "text": "iOS/iPadOS 用の更新ポリシー" },
      { "letter": "D", "text": "「デバイス制限」テンプレートに基づいたデバイス構成プロファイル" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 165,
    "question": "次の表に示すオブジェクトを含む Microsoft 365 テナントがあります。\n\n・Admin1 (ユーザー), Group1 (セキュリティ), Group2 (M365), Group3 (配布リスト), Group4 (メール有効セキュリティ)\n\nMicrosoft Intune 管理センターで、App1 という名前の Microsoft 365 Apps アプリを作成しています。\nApp1 はどのオブジェクトに割り当てることができますか？",
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
    "id": 166,
    "question": "Windows 11 を実行し、パブリック ネットワークに接続されているワークグループ コンピューター Client1 があります。\nClient1 で PowerShell リモート管理（Remoting）を有効にする必要があります。ソリューションは、PowerShell リモート管理の接続をローカル サブネットからのみ受け入れるようにする必要があります。\n\nどの PowerShell コマンドを実行すべきですか？",
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
    "id": 167,
    "question": "Microsoft Intune に登録された Computer1 という Windows 10 デバイスがあります。\nComputer1 を、単一の顧客向けフルスクリーン アプリケーションを実行するパブリック ワークステーションとして構成する必要があります。\n\nMicrosoft Intune 管理センターでどの構成プロファイル タイプ テンプレートを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "共有マルチユーザー デバイス (Shared multi-user device)" },
      { "letter": "B", "text": "デバイス制限 (Device restrictions)" },
      { "letter": "C", "text": "キオスク (Kiosk)" },
      { "letter": "D", "text": "エンドポイント保護 (Endpoint protection)" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 168,
    "question": "Microsoft Intune Suite を実装しています。\n次の表に示すように、Intune にデバイスを登録しました。\n\n・Device1: Windows 11 Enterprise (E5)\n・Device2: Windows 11 Pro (E5)\n・Device3: Windows 11 Enterprise (E3)\n・Device4: Windows 10 Pro (E3)\n\nどのデバイスのパフォーマンスを「エンドポイント分析 (Endpoint analytics)」を使用して分析できますか？",
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
    "id": 169,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。\nWindows Autopilot を使用して Windows 11 デバイスを展開する予定です。\n\nAutopilot プロビジョニング中に次の要件を満たす必要があります：\n・アプリとプロファイルの構成進行状況を表示する。\n・すべてのアプリとプロファイルがインストールされるまで、ユーザーによるデバイスの使用をブロックする。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "アプリ保護ポリシー" },
      { "letter": "C", "text": "登録デバイス プラットフォーム制限" },
      { "letter": "D", "text": "登録ステータス ページ (ESP)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 170,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nMicrosoft Intune を使用して Windows デバイスを展開および管理しています。\n退職したユーザーが使用していた 100 台のデバイスがあります。\n\n以前のユーザーによってインストールされたすべてのデータとアプリケーションを削除し、これらのデバイスを新しいユーザー向けに再利用する必要があります。ソリューションは管理作業を最小限に抑える必要があります。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイスに新しい構成プロファイルを展開する。" },
      { "letter": "B", "text": "デバイスで Windows Autopilot リセットを実行する。" },
      { "letter": "C", "text": "デバイスでインプレース アップグレードを実行する。" },
      { "letter": "D", "text": "デバイスに Windows 11 をクリーン インストールする。" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 171,
    "question": "Microsoft Intune を使用して 1,000 台のデバイスを管理しています。\n「デバイス コンプライアンス トレンド (Device compliance trends)」レポートを確認します。\nこのレポートには、何日間のトレンド データが表示されますか？",
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
    "id": 172,
    "question": "Microsoft 365 Business Standard サブスクリプションと 100 台の Windows 10 Pro デバイスがあります。\nMicrosoft 365 E5 サブスクリプションを購入しました。\n\nWindows 10 Pro デバイスを Windows 10 Enterprise にアップグレードする必要があります。ソリューションは管理作業を最小限に抑える必要があります。\n\nどのアップグレード方法を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows Autopilot" },
      { "letter": "B", "text": "Microsoft Deployment Toolkit (MDT) による Lite-Touch 展開" },
      { "letter": "C", "text": "サブスクリプションのアクティブ化 (Subscription Activation)" },
      { "letter": "D", "text": "Windows インストール メディアを使用したインプレース アップグレード" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 173,
    "question": "【ホットスポット】\n\nMicrosoft 365 サブスクリプションがあります。サブスクリプションには、Microsoft Intune に登録された Windows 11 を実行する 1,000 台のコンピューターが含まれています。\n\n次のオプションを有効にしたコンプライアンス ポリシーを作成する予定です：\n・デバイスでセキュア ブート（Secure Boot）が有効であることを必須にする。\n・デバイスが指定された「マシン リスク スコア」以下であることを必須にする。\n\nどの 2 つのコンプライアンス設定を構成すべきですか？\n回答するには、回答領域で適切な設定を選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image357.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image358.png", "analysis": "" }
    ]
  },
  {
    "id": 174,
    "question": "【ホットスポット】\n\nケーススタディ：ADatum Corporation\n（これまでの ADatum Corporation シナリオに基づきます。VPN プロファイルの計画された変更が含まれます。）\n\n計画されている変更に基づいて、Connection1 (L2TP) と Connection2 (IKEv2) を実装します。\nUser1 が Device1 および Device2 にサインインした際、いくつの VPN 接続が表示されますか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
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
    "id": 175,
    "question": "【ホットスポット】\n\nWindows Autopilot を使用して構成された、Windows 10 を実行するコンピューターがあります。\nユーザーが Computer1 というコンピューターで次のタスクを実行します：\n・社内ネットワークへの VPN 接続を作成する。\n・App1 という名前の Microsoft Store アプリをインストールする。\n・Wi-Fi ネットワークに接続する。\n\nComputer1 で「Windows Autopilot リセット」を実行します。\nユーザーがサインインした際、コンピューターの状態はどうなっていますか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image302.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image303.png", "analysis": "" }
    ]
  },
  {
    "id": 176,
    "question": "【ホットスポット】\n\nMicrosoft 365 サブスクリプションがあります。\nすべてのユーザーに対してパスワードレス認証を有効にする必要があります。ソリューションは次の要件を満たす必要があります：\n・研究部門のユーザー：モバイル デバイスを使用できず、管理されていない Linux デバイスから代替方法を使用して認証する必要がある。\n・営業部門のユーザー：サービスにアクセスするために携帯電話を使用して認証する必要がある。\n・管理作業を最小限に抑えること。\n\n各部門に対してどの認証方法を使用すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image307.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image308.png", "analysis": "" }
    ]
  },
  {
    "id": 177,
    "question": "【ホットスポット】\n\nMicrosoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。Microsoft Intune を使用してデバイスを管理しています。\n\n次の要件を満たす更新リング（Update ring）を構成する必要があります：\n・既存の Windows 機能の修正と改善は 14 日間延期できるが、その 7 日後には自動的にインストールされる必要がある。\n・新しい Windows 機能のインストールは 90 日間延期できるが、その 10 日後には自動的にインストールされる必要がある。\n・更新プログラムがインストールされた 3 日後に、デバイスを自動的に再起動させる必要がある。\n\n更新リングをどのように構成すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image276.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image566.png", "analysis": "" }
    ]
  },
  {
    "id": 178,
    "question": "【ホットスポット】\n\nMicrosoft 365 E5 サブスクリプションがあります。\nMicrosoft 365 Defender のデバイス オンボーディングを確認および実装する必要があります。ソリューションは次の要件を満たす必要があります：\n・Chromium ベースの Microsoft Edge がインストールされているオンボード済みのデバイスを表示する。\n・Windows 11 デバイス用のオンボーディング パッケージをダウンロードする。\n・管理作業を最小限に抑えること。\n\nMicrosoft 365 Defender ポータルでどの 2 つの設定を使用すべきですか？\n回答するには、回答領域で適切な設定を選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image278.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image279.png", "analysis": "" }
    ]
  },
  {
    "id": 179,
    "question": "【ホットスポット】\n\nMDM 展示（Exhibit）に示す「MDM セキュリティ ベースライン」プロファイルがあります。\nASR 展示（Exhibit）に示す「ASR エンドポイント セキュリティ」プロファイルがあります。\n\n両方のプロファイルを Microsoft Intune に登録されたデバイスに展開する予定です。\nデバイス上で次の設定がどのように構成されるかを特定する必要があります：\n・Office アプリケーションによる実行可能コンテンツの作成をブロックする。\n・Office マクロからの Win32 API 呼び出しをブロックする。\n\n現在、これらの設定は各デバイスでローカルに無効になっています。デバイス上の有効な設定（Effective settings）はどうなりますか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image296.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image297.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image298.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image299.png", "analysis": "" }
    ]
  },
  {
    "id": 180,
    "question": "ネットワークには Active Directory ドメイン（AD DS）が含まれています。ドメインには、Windows 10 を実行する 100 台のクライアント コンピューターが含まれています。\n現在、会社には展開インフラストラクチャ（MDT や Configuration Manager 等）がありません。\nボリューム ライセンス契約を通じて Windows 11 ライセンスを購入しました。\n\nコンピューターを Windows 11 にアップグレードする方法を推奨する必要があります。ソリューションはライセンス コストを最小限に抑える必要があります。\n推奨事項には何を含めるべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows Autopilot" },
      { "letter": "B", "text": "Configuration Manager" },
      { "letter": "C", "text": "サブスクリプションのアクティブ化 (Subscription activation)" },
      { "letter": "D", "text": "Microsoft Deployment Toolkit (MDT)" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 181,
    "question": "【ホットスポット】\n\nMicrosoft Intune を使用する Microsoft 365 E5 サブスクリプションがあります。次の表に示すユーザーが含まれています：\n・User1, User2, User3\nGroup2 と Group3 は Group1 のメンバーです。すべてのユーザーが Microsoft Excel を使用しています。\n\nMicrosoft Intune 管理センターから、図の表に示すポリシーを作成しました。\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image336.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image337.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image338.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image339.png", "analysis": "" }
    ]
  },
  {
    "id": 182,
    "question": "次の表に示すデバイスがあります。\n\n・Device1 (Win 11 Pro), Device2 (Win 10 Pro), Device3 (macOS), Device4 (Android)\n\nMicrosoft Defender for Endpoint を実装する予定です。\nどのデバイスを Microsoft Defender for Endpoint にオンボードできるかを特定する必要があります。\nどのデバイスが対象ですか？",
    "choices": [
      { "letter": "A", "text": "Device1 のみ" },
      { "letter": "B", "text": "Device2 のみ" },
      { "letter": "C", "text": "Device1, Device2 のみ" },
      { "letter": "D", "text": "Device1, Device2, および Device3 のみ" },
      { "letter": "E", "text": "Device1, Device2, Device3, および Device4" }
    ],
    "answer": "E",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image332.png", "analysis": "" }
    ]
  },
  {
    "id": 183,
    "question": "Microsoft Entra テナント（contoso.com）があります。\nWindows 11 を実行する 25 台のコンピューターを購入する予定です。コンピューターをユーザーに直接配送する予定です。\n\n初期セットアップ（OOBE）中に、ユーザーにサインインを促し、その後コンピューターが Microsoft Intune を使用するように構成されるようにする必要があります。\nどの 2 つのコンポーネントを構成すべきですか？\n（注：正解はそれぞれソリューションの一部を示します。正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "プロビジョニング パッケージ" },
      { "letter": "B", "text": "自動登録（Automatic enrollment）" },
      { "letter": "C", "text": "unattend.xml 応答ファイル" },
      { "letter": "D", "text": "「自己展開モード」の Windows Autopilot 展開プロファイル" },
      { "letter": "E", "text": "「ユーザー主導モード」の Windows Autopilot 展開プロファイル" }
    ],
    "answer": "BE",
    "images": []
  },
  {
    "id": 184,
    "question": "Windows Autopilot を使用して構成されたすべてのコンピューターに対して、同じ展開プロファイルを割り当てる必要があります。\nどの 2 つのアクションを実行すべきですか？\n（注：正解はそれぞれソリューションの一部を示します。正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [
      { "letter": "A", "text": "動的メンバーシップ ルールを持ち、ZTDID タグを使用する Microsoft Entra グループを作成する。" },
      { "letter": "B", "text": "動的メンバーシップ ルールを持ち、operatingSystem タグを使用する Microsoft Entra グループを作成する。" },
      { "letter": "C", "text": "Windows Autopilot 展開プロファイルをグループに割り当てる。" },
      { "letter": "D", "text": "コンピューターを Microsoft Entra ID に参加させる。" },
      { "letter": "E", "text": "ドメインにリンクされたグループ ポリシー オブジェクト（GPO）を作成する。" }
    ],
    "answer": "AC",
    "images": []
  },
  {
    "id": 185,
    "question": "ネットワークには Active Directory ドメインが含まれています。ドメインには Windows 10 を実行する 10 台のコンピューターが含まれています。財務部門のユーザーがこれらのコンピューターを使用しています。\nWindows 10 を実行する Computer1 というコンピューターがあります。\nComputer1 から、財務部門のコンピューター上で Windows PowerShell コマンドを実行するスクリプトを実行する予定です。\n\nComputer1 から財務部門のコンピューター上で PowerShell コマンドを実行できるようにする必要があります。\n財務部門のコンピューターで何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows PowerShell から、Enable-MMAgent コマンドレットを実行する。" },
      { "letter": "B", "text": "ローカル グループ ポリシーから、「リモート シェル アクセスを許可する」設定を有効にする。" },
      { "letter": "C", "text": "Windows PowerShell から、Enable-PSRemoting コマンドレットを実行する。" },
      { "letter": "D", "text": "ローカル グループ ポリシーから、「スクリプトの実行を有効にする」設定を有効にする。" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 186,
    "question": "次の表に示すユーザーを含む Microsoft 365 E5 サブスクリプションがあります。\n\n・Admin1 (Global Admin), Admin2 (Intune Admin), Admin3 (M365 Apps Admin), Admin4 (Security Admin)\n\nMicrosoft 365 Apps 管理センターで、Microsoft Office のカスタマイズを作成します。\nどのユーザーが管理センターから Office カスタマイズ ファイルをダウンロードできますか？",
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
    "id": 187,
    "question": "【ホットスポット】\n\nMicrosoft 365 サブスクリプションがあります。\nすべてのコンピューターが Microsoft Intune に登録されています。\n\n次の表に示すように、Windows 11 環境を保護するためのビジネス要件があります：\n・要件1: ログインしたユーザーの資格情報を盗難から保護する。\n・要件2: 未承認のアプリケーションが Windows のコアプロセスを書き換えるのを防止する。\n\n各要件を満たすために何を実装すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image260.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image261.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image262.png", "analysis": "" }
    ]
  },
  {
    "id": 188,
    "question": "【ホットスポット】\n\nMicrosoft Intune を使用し、次の表に示すデバイスを含む Microsoft 365 テナントがあります：\n・Device1 (Win 11), Device2 (macOS), Device3 (iOS), Device4 (Android)\n\nMicrosoft Intune のエンドポイント セキュリティで、各デバイスに対してディスク暗号化ポリシーを構成する必要があります。\n\n各デバイスに使用すべき暗号化タイプと、暗号化キーを管理するために Intune で使用すべきロールベースのアクセス制御（RBAC）ロールは何ですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image317.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image318.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image319.png", "analysis": "" }
    ]
  },
  {
    "id": 189,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Defender for Endpoint を使用する Microsoft 365 サブスクリプションがあります。\n次の種類のデバイスを Defender for Endpoint にオンボードする予定です：\n・macOS\n・Linux サーバー\n\n各デバイスをオンボードするために何を使用すべきですか？\n回答するには、適切なツールを正しいデバイス タイプにドラッグしてください。（注：各ツールは 1 回、複数回、またはまったく使用されない場合があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image322.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image323.png", "analysis": "" }
    ]
  },
  {
    "id": 190,
    "question": "【ホットスポット】\n\nMicrosoft Intune を使用し、100 台の Windows 10 デバイスを含む Microsoft 365 サブスクリプションがあります。\nデバイス上で次のアクションを実行するために Intune 構成プロファイルを作成する必要があります：\n・カスタムのスタート画面レイアウトを展開する。\n・ローカルの Administrator アカウントの名前を変更する。\n\n各アクションに対してどのプロファイル タイプ テンプレートを使用すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image288.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image567.png", "analysis": "" }
    ]
  },
  {
    "id": 191,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nMicrosoft Intune を使用して Windows 11 デバイスを管理しています。\n「Set1」という名前の新しいポリシー セット（Policy set）を作成し、Windows 10 以降用の 5 つのデバイス構成プロファイルを追加しました。\nまた、「Policy1」という名前のデバイス コンプライアンス ポリシーを作成しました。\n\nユーザーに Set1 のデバイス構成プロファイルが割り当てられた際、常に Policy1 も割り当てられるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Policy1 の割り当て (Assignments)" },
      { "letter": "B", "text": "Policy1 の構成設定" },
      { "letter": "C", "text": "Set1 の割り当て (Assignments)" },
      { "letter": "D", "text": "Set1 の構成設定" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 192,
    "question": "次の表に示すデバイスを含む Microsoft 365 テナントがあります。\nデバイスは Microsoft Intune を使用して管理されています。\n\n「Policy1」という名前のコンプライアンス ポリシーを作成し、Group1 に割り当てます。Policy1 は、デバイスのセキュリティ設定がポリシーで指定された設定と一致する場合にのみ、デバイスを「準拠」としてマークするように構成されています。\n\nGroup1 のメンバーではないデバイスが「準拠」として表示されていることが判明しました。\nコンプライアンス ポリシーが「割り当てられているデバイスのみ」が「準拠」として表示され、それ以外のすべてのデバイスは「非準拠」として表示されるようにする必要があります。\n\nMicrosoft Intune 管理センターで何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "「デバイスのコンプライアンス」から、コンプライアンス ポリシー設定を構成する。" },
      { "letter": "B", "text": "「エンドポイント セキュリティ」から、条件付きアクセス設定を構成する。" },
      { "letter": "C", "text": "「テナント管理」から、診断設定を修正する。" },
      { "letter": "D", "text": "Policy1 から、非準拠に対するアクションを修正する。" }
    ],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image342.png", "analysis": "" }
    ]
  },
  {
    "id": 193,
    "question": "ネットワークには contoso.com という名前の Active Directory ドメインが含まれています。ドメインには Windows 11 を実行する 25 台のコンピューターが含まれています。\nMicrosoft 365 サブスクリプションがあります。contoso.com と同期する Microsoft Entra テナントがあります。\n\nハイブリッド Microsoft Entra 参加を構成したところ、一部のコンピューターの登録状態が「Pending（保留中）」になっていることが判明しました。\nコンピューターが正常に参加を完了するようにする必要があります。\n\n何を確実にすべきですか？",
    "choices": [
      { "letter": "A", "text": "すべてのコンピューターで Windows がアクティブ化されていること。" },
      { "letter": "B", "text": "コンピューターのユーザーに Microsoft 365 ライセンスが割り当てられていること。" },
      { "letter": "C", "text": "各コンピューターがドメイン コントローラーへの通信経路（Line of sight）を持っていること。" },
      { "letter": "D", "text": "コンピューターに最新の品質更新プログラムが適用されていること。" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 194,
    "question": "【ホットスポット】\n\nDS1 という名前の Microsoft Deployment Toolkit (MDT) 展開共有を管理しています。DS1 には「Windows 11 x64」という名前の Out-of-Box Drivers フォルダーがあり、その中に {メーカー名}\\{モデル名} という形式のサブフォルダーがあります。\n\nPnP 検出や選択プロファイルを使用せずに、コンピューターのメーカーとモデルに一致するフォルダー内のすべてのドライバーがインストールされるように、展開タスク シーケンスを修正する必要があります。\n\n何をすべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image347.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image569.png", "analysis": "" }
    ]
  },
  {
    "id": 195,
    "question": "【ホットスポット】\n\nMicrosoft Deployment Toolkit (MDT) を使用して Windows 11 を展開しています。\n次の要件を満たすように展開共有を修正する必要があります：\n・インストールを実行するユーザーに対して、ローカル Administrator のパスワード設定を促すようにする。\n・展開中のコンピューター名の命名規則を定義する。\n\nソリューションは、既存の WinPE イメージを「置き換えない」必要があります。\n各要件に対してどのファイルを修正すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image349.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image350.png", "analysis": "" }
    ]
  },
  {
    "id": 196,
    "question": "【ホットスポット】\n\n会社では Microsoft Defender for Endpoint を使用しています。Defender for Endpoint には、次の表に示すデバイス グループが含まれています：\n・Group1, Group2, Group3\n\n図の展示（Exhibit）に示すように、コンピューターを Microsoft Defender for Endpoint にオンボードします。\nこの構成の影響はどうなりますか？\n回答するには、回答領域で適切なオプションを選択してください。（注：正しい選択ごとに 1 ポイントの価値があります。）",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image284.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image285.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image286.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image287.png", "analysis": "" }
    ]
  },
  {
    "id": 197,
    "question": "【ホットスポット】\n\nWindows 11 の展開タスクを管理するために使用される Microsoft Deployment Toolkit (MDT) ソリューションがあります。\nMDT には、図の表に示すオペレーティング システム イメージが含まれています：\n・Image1 (Win 11 Pro), Image2 (Win 11 Ent), Image3 (Win 10 Pro)\n\nWindows 10 を実行している数台のコンピューターで「Windows 11 インプレース アップグレード」を実行する必要があります。\nDeployment Workbench から「新しいタスク シーケンス ウィザード」を開きます。\n\nどのタスク シーケンス テンプレートとどのイメージを使用すべきですか？ソリューションは管理作業を最小限に抑える必要があります。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image304.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image305.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image306.png", "analysis": "" }
    ]
  },
  {
    "id": 198,
    "question": "Microsoft 365 サブスクリプションがあります。\nAndroid デバイス上の企業データを保護するためにアプリ保護ポリシーを使用しています。\n\nAndroid デバイスから接続するすべてのユーザーが、モバイル アプリ管理（MAM）をサポートするアプリから接続した場合にのみ、企業データにアクセスできるようにする必要があります。\n何を構成すべきですか？",
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
    "id": 199,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nMicrosoft Intune に登録されて「おらず」、アプリ保護ポリシーが割り当てられているすべてのデバイスをリストしたレポートをダウンロードする必要があります。\n\nMicrosoft Intune 管理センターで何を選択すべきですか？",
    "choices": [
      { "letter": "A", "text": "「レポート」を選択し、次に「デバイス コンプライアンス」を選択する。" },
      { "letter": "B", "text": "「アプリ」を選択し、次に「アプリ保護ポリシー」を選択する。" },
      { "letter": "C", "text": "「デバイス」を選択し、次に「監視」を選択する。" },
      { "letter": "D", "text": "「アプリ」を選択し、次に「監視」を選択する。" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 200,
    "question": "【ドラッグ＆ドロップ】\n\n会社には Microsoft 365 E5 テナントがあります。\n会社のすべてのデバイスは Microsoft Intune に登録されています。\n\n生の Microsoft Intune データからカスタム クエリと可視化を使用して、高度なレポートを作成する必要があります。\n\n順番に実行すべき 3 つのアクションはどれですか？\n回答するには、適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image320.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image321.png", "analysis": "" }
    ]
  },
  {
    "id": 201,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nすべての Windows 11 デバイスは Microsoft Intune に登録されています。\n\n標準ユーザーが特定の承認済みアプリケーションを「管理者権限」で実行できるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "エンドポイント特権管理 (EPM) の昇格ルール ポリシー" },
      { "letter": "B", "text": "デバイス制限 (Device restrictions) 構成プロファイル" },
      { "letter": "C", "text": "アプリ保護ポリシー" },
      { "letter": "D", "text": "条件付きアクセス ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 202,
    "question": "【ホットスポット】\n\n次の表に示すユーザーを含む Microsoft Entra テナントがあります：\n・User1 (管理者), User2 (標準ユーザー)\n\nMicrosoft Entra ID のデバイス設定が、図の展示（Exhibit）に示すように構成されています。\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image333.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image334.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image335.png", "analysis": "" }
    ]
  },
  {
    "id": 203,
    "question": "5,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。\nMicrosoft Intune を使用して、特定のビルド バージョンの Windows を実行しているデバイスのみにポリシーを適用する必要があります。\n\n管理作業を最小限に抑えるために、何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Entra ID の動的デバイス グループ" },
      { "letter": "B", "text": "Microsoft Intune のフィルター (Filters)" },
      { "letter": "C", "text": "構成プロファイルの適用規則 (Applicability Rules)" },
      { "letter": "D", "text": "スコープ タグ" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 204,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含み、Admin1 という名前のユーザーを含む Microsoft 365 サブスクリプションがあります。\nAdmin1 は、リモート ヘルプ (Remote Help) を使用してユーザーを支援する必要があります。\n\nAdmin1 に必要な「リモート ヘルプ」の権限と、その権限を割り当てるために使用すべき Intune の管理項目を特定してください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image413.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image414.png", "analysis": "" }
    ]
  },
  {
    "id": 205,
    "question": "【ドラッグ＆ドロップ】\n\nWindows 365 Enterprise クラウド PC を展開する予定です。\n\n順番に実行すべき 3 つのアクションはどれですか？\n回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image390.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image391.png", "analysis": "" }
    ]
  },
  {
    "id": 206,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nWindows 11 を実行する 1,000 台のデバイスを Microsoft Defender for Endpoint にオンボードする必要があります。\nこのソリューションでは、デバイス上でスクリプトを実行したり、追加のソフトウェアをインストールしたりしないようにする必要があります。\n\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune" },
      { "letter": "B", "text": "ローカル スクリプト" },
      { "letter": "C", "text": "グループ ポリシー" },
      { "letter": "D", "text": "VDI スクリプト" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 207,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows デバイスがあり、図のように「更新リング (Update rings)」ポリシーが割り当てられています。\n\n図の情報に基づいて、各ステートメントを完成させてください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image213.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image214.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image215.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image560.png", "analysis": "" }
    ]
  },
  {
    "id": 208,
    "question": "Microsoft 365 サブスクリプションがあります。\nすべてのデバイスは Microsoft Intune に登録されています。\n\nIT 部門の特定のユーザーのみが、特定のデバイスに対してリモート操作（ワイプ、リセットなど）を実行できるようにする必要があります。\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "スコープ タグ (Scope tags)" },
      { "letter": "B", "text": "適用規則 (Applicability rules)" },
      { "letter": "C", "text": "Microsoft Entra ID の動的グループ" },
      { "letter": "D", "text": "構成プロファイルの制限設定" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 209,
    "question": "【ホットスポット】\n\n次の表に示すユーザーを含む Microsoft Entra テナントがあります：\n・User1 (ライセンス：なし)\n・User2 (ライセンス：M365 E5)\n・User3 (ライセンス：M365 E3)\n\n次の表に示すデバイスを所有しています：\n・Device1 (Win 11 Pro), Device2 (iOS), Device3 (Android)\n\nMicrosoft Intune での「デバイス登録制限 (Enrollment restrictions)」が既定値のまま構成されています。\n各ユーザーが各デバイスを登録できるかどうかを特定してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image241.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image242.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image563.png", "analysis": "" }
    ]
  },
  {
    "id": 210,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。\nハイブリッド Microsoft Entra 参加済みデバイスに対して、Windows Autopilot 展開を構成する予定です。\n\nオンプレミス Active Directory にコンピューター オブジェクトが作成されるように、Server1 という名前のサーバーに何をインストールすべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Entra Connect" },
      { "letter": "B", "text": "Intune Connector for Active Directory" },
      { "letter": "C", "text": "Microsoft Deployment Toolkit (MDT)" },
      { "letter": "D", "text": "Windows 展開サービス (WDS)" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 211,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\nデバイスに対して「機能更新プログラム (Feature updates)」ポリシーを構成しています。\n\n図の情報に基づいて、各ステートメントを完成させてください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image229.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image230.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image561.png", "analysis": "" }
    ]
  },
  {
    "id": 212,
    "question": "500 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。\nMicrosoft Intune を使用して、すべてのデバイスに特定のブラウザ拡張機能を強制的にインストールする必要があります。\n\nMicrosoft Intune 管理センターでどの項目を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "デバイス制限プロファイル" },
      { "letter": "C", "text": "構成プロファイル (Settings catalog 等)" },
      { "letter": "D", "text": "基幹業務 (LOB) アプリ" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 213,
    "question": "Microsoft Intune を使用して管理されている 2,000 台の iOS デバイスがあります。\n特定の部門のデバイスのみ、壁紙を変更できないように制限する必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス制限 (Device restrictions) プロファイル" },
      { "letter": "B", "text": "コンプライアンス ポリシー" },
      { "letter": "C", "text": "アプリ保護ポリシー" },
      { "letter": "D", "text": "アプリ構成ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 214,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\n「配信最適化 (Delivery Optimization)」の設定を構成する必要があります。ソリューションは次の要件を満たす必要があります：\n・ローカル ネットワーク上の他の PC から更新プログラムを取得できるようにする。\n・パブリック インターネット上の PC からの取得は禁止する。\n\nどの設定を構成すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image315.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image316.png", "analysis": "" }
    ]
  },
  {
    "id": 215,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nユーザーが個人の Windows デバイスから企業データにアクセスした際、データのコピーや「名前を付けて保存」を制限する必要があります。\nこのとき、ユーザーのデバイスを Intune に登録する必要はありません。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Windows 情報保護 (WIP) ポリシー (登録なし)" },
      { "letter": "B", "text": "アプリ保護ポリシー" },
      { "letter": "C", "text": "条件付きアクセス ポリシー" },
      { "letter": "D", "text": "デバイス制限構成プロファイル" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 216,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の要件を満たす Microsoft Defender for Endpoint を展開する必要があります：\n・OS 以外のソフトウェアの脆弱性をレポートする。\n・不審なファイルの実行を自動的にブロックする。\n\nどの機能を使用すべきですか？\n回答するには、適切な機能を正しい要件にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image280.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image281.png", "analysis": "" }
    ]
  },
  {
    "id": 217,
    "question": "Microsoft Intune に登録された 500 台の Windows 11 デバイスがあります。\nデバイス上で特定のレジストリ キーを変更する PowerShell スクリプトを展開する必要があります。\nスクリプトは 64 ビットの PowerShell コンテキストで実行される必要があります。\n\nスクリプトの設定で何を「はい」に設定すべきですか？",
    "choices": [
      { "letter": "A", "text": "ログイン資格情報を使用してこのスクリプトを実行する" },
      { "letter": "B", "text": "スクリプト署名のチェックを強制する" },
      { "letter": "C", "text": "64 ビットの PowerShell ホストでスクリプトを実行する" },
      { "letter": "D", "text": "ユーザーに対して通知を表示する" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 218,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n図の表に示す 3 つのデバイス制限プロファイル (Profile1, Profile2, Profile3) があります。\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image289.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image290.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image291.png", "analysis": "" }
    ]
  },
  {
    "id": 219,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nハイブリッド Microsoft Entra 参加済みデバイスを、Windows Autopilot を使用してプロビジョニングする予定です。\n\nデバイスがオンプレミスドメインに参加できるようにするために、何を事前に構成しておく必要がありますか？",
    "choices": [
      { "letter": "A", "text": "Server1 に Intune Connector for Active Directory をインストールする" },
      { "letter": "B", "text": "Microsoft Entra Connect を構成する" },
      { "letter": "C", "text": "VPN プロファイルを全ユーザーに配布する" },
      { "letter": "D", "text": "デバイスのシリアル番号を CSV でアップロードする" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 220,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\nデバイスの「セキュリティ ベースライン」を構成しています。\n\n図の情報に基づいて、各ステートメントを完成させてください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image292.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image293.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image568.png", "analysis": "" }
    ]
  },
  {
    "id": 221,
    "question": "会社には Microsoft Intune Suite があります。\n標準ユーザーに対して、通常は管理者権限が必要な「特定のアプリ」のインストールのみを許可する必要があります。\n\n何を実装すべきですか？",
    "choices": [
      { "letter": "A", "text": "エンドポイント特権管理 (EPM)" },
      { "letter": "B", "text": "条件付きアクセス" },
      { "letter": "C", "text": "アプリ保護ポリシー" },
      { "letter": "D", "text": "ローカル Administrators グループの GPO 設定" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 222,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n図の展示（Exhibit）に示すように、iOS デバイス用の登録プロファイルを作成しました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image263.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image264.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image265.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image266.png", "analysis": "" }
    ]
  },
  {
    "id": 223,
    "question": "1,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。すべてのデバイスは Microsoft Intune に登録されています。\n\nデバイス上で特定の PowerShell スクリプトを実行する必要があります。スクリプトが成功したかどうかを監視する必要があります。\n\nIntune 管理センターのどこでスクリプトの実行状態を確認できますか？",
    "choices": [
      { "letter": "A", "text": "「デバイス」>「監視」配下の「スクリプト」レポート" },
      { "letter": "B", "text": "「レポート」>「デバイス準拠」" },
      { "letter": "C", "text": "「テナント管理」>「監査ログ」" },
      { "letter": "D", "text": "「エンドポイント セキュリティ」>「ウイルス対策」" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 224,
    "question": "【ホットスポット】\n\nMicrosoft 365 E5 サブスクリプションがあります。\n図の展示（Exhibit）に示すように、3 つのコンプライアンス ポリシー (Policy1, Policy2, Policy3) があります。\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image267.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image268.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image269.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image270.png", "analysis": "" }
    ]
  },
  {
    "id": 225,
    "question": "会社には、ハイブリッド Microsoft Entra 参加済みの 500 台の Windows 10 デバイスがあります。すべてのデバイスは Microsoft Intune に登録されています。\n\nすべてのデバイスを Windows 11 にアップグレードする予定です。\nアップグレード前に、各デバイスが Windows 11 の最小ハードウェア要件を満たしているかを確認する必要があります。\n\nどのツールを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "エンドポイント分析 (Endpoint analytics)" },
      { "letter": "B", "text": "Microsoft 構成デザイナ" },
      { "letter": "C", "text": "Intune のコンプライアンス レポート" },
      { "letter": "D", "text": "Windows Update for Business のレポート" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 226,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の要件を満たすようにデバイスの登録を構成する必要があります：\n・特定のユーザーのみが 5 台を超えるデバイスを登録できるようにする。\n・個人の Android デバイスの登録をブロックする。\n\n何を構成すべきですか？\n回答するには、適切な構成を正しい要件にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image331.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image332.png", "analysis": "" }
    ]
  },
  {
    "id": 227,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows 11 デバイスを Microsoft Defender for Endpoint にオンボードする必要があります。管理作業を最小限に抑える必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "Microsoft Intune で「エンドポイント検出および応答 (EDR)」ポリシーを作成する" },
      { "letter": "B", "text": "ローカル スクリプトを手動で実行する" },
      { "letter": "C", "text": "グループ ポリシー (GPO) を使用する" },
      { "letter": "D", "text": "VDI オフボーディング スクリプトを使用する" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 228,
    "question": "【ホットスポット】\n\nMicrosoft Intune を使用する Microsoft 365 サブスクリプションがあります。\n図の表に示す 3 つのユーザー グループ (Group1, Group2, Group3) とデバイスがあります。\n\n次の各ステートメントについて、ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image344.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image345.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image346.png", "analysis": "" }
    ]
  },
  {
    "id": 229,
    "question": "Windows 11 を実行する 100 台のコンピューターがあります。\nMicrosoft 構成デザイナを使用してプロビジョニング パッケージを作成し、コンピューターを Azure AD (Microsoft Entra ID) に参加させる予定です。\n\n一括登録用のトークンを取得するために、どのアカウントを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "グローバル管理者ロールを持つユーザー" },
      { "letter": "B", "text": "デバイス登録マネージャー (DEM) ロールを持つユーザー" },
      { "letter": "C", "text": "クラウド デバイス管理者ロールを持つユーザー" },
      { "letter": "D", "text": "標準ユーザー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 230,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の要件を満たす iOS アプリを展開する必要があります：\n・App1: 社内で開発されたカスタム アプリ。App Store には公開されていない。\n・App2: App Store で公開されているパブリック アプリ。\n\nどの種類のアプリを追加すべきですか？\n回答するには、適切なアプリの種類を正しい要件にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image236.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image237.png", "analysis": "" }
    ]
  },
  {
    "id": 231,
    "question": "Microsoft Intune に登録された 1,000 台の Android デバイスがあります。\nデバイス上の Outlook アプリに対して、あらかじめ社内のメール サーバー設定を構成しておく必要があります。\n\n何を作成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "アプリ保護ポリシー" },
      { "letter": "C", "text": "デバイス制限構成プロファイル" },
      { "letter": "D", "text": "コンプライアンス ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 232,
    "question": "【ホットスポット】\n\n次の表に示す 4 台の Windows 11 デバイスがあります：\n・Device1 (Pro), Device2 (Enterprise), Device3 (Pro, シリアル登録済), Device4 (Enterprise, シリアル登録済)\n\nWindows Autopilot の「自己展開モード (self-deploying mode)」を使用できるデバイスはどれですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image255.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image256.png", "analysis": "" }
    ]
  },
  {
    "id": 233,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nユーザーが管理されていない個人の Windows デバイスから、OneDrive for Business のデータをダウンロードできないようにする必要があります。ただし、Web ブラウザでの閲覧は許可します。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "条件付きアクセス ポリシー (アプリによる制限付きアクセスの使用)" },
      { "letter": "B", "text": "Microsoft Entra ID のデバイス設定" },
      { "letter": "C", "text": "Intune のコンプライアンス ポリシー" },
      { "letter": "D", "text": "OneDrive の共有設定" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 234,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された 100 台の Windows 11 デバイスがあります。\n次の図に示す「エンドポイント セキュリティ」の「ウイルス対策」ポリシーを作成しました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image309.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image310.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image311.png", "analysis": "" }
    ]
  },
  {
    "id": 235,
    "question": "500 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションがあります。\nデバイス上で特定の Win32 アプリケーションが実行されているかどうかを確認するカスタム 検出スクリプト (PowerShell) を作成しました。\n\nIntune でアプリを追加する際、どの項目にこのスクリプトを指定すべきですか？",
    "choices": [
      { "letter": "A", "text": "検出ルール (Detection rules)" },
      { "letter": "B", "text": "必要条件 (Requirements)" },
      { "letter": "C", "text": "依存関係 (Dependencies)" },
      { "letter": "D", "text": "置き換え (Supersedence)" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 236,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の 3 種類のデバイス登録方法を評価しています：\n・ユーザー主導 (User-driven)\n・自己展開 (Self-deploying)\n・既存デバイス向け Autopilot (Autopilot for existing devices)\n\n各登録方法の主な特徴を正しい記述にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image131.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image132.png", "analysis": "" }
    ]
  },
  {
    "id": 237,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nユーザーが新しいデバイスをセットアップする際、必要なすべてのアプリケーションがインストールされるまで、デスクトップの使用を制限する必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "登録ステータス ページ (ESP)" },
      { "letter": "B", "text": "Windows Autopilot 展開プロファイル" },
      { "letter": "C", "text": "デバイス制限構成プロファイル" },
      { "letter": "D", "text": "コンプライアンス ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 238,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\nデバイスに対して「Windows LAPS」を構成する予定です。\n\n管理パスワードのバックアップ先として選択可能なオプションと、パスワードの有効期間を特定してください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image421.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image422.png", "analysis": "" }
    ]
  },
  {
    "id": 239,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows デバイスに対して、リモート ヘルプ (Remote Help) を展開しました。\n\nヘルプデスクのスタッフがリモート ヘルプ セッションを開始する際、必ず「管理者権限」でセッションを開始するように強制する必要があります。\n\nIntune 管理センターで何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "リモート ヘルプの設定 (有効時)" },
      { "letter": "B", "text": "条件付きアクセス ポリシー" },
      { "letter": "C", "text": "RBAC ロールの権限設定" },
      { "letter": "D", "text": "デバイス制限プロファイル" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 240,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の表に示す 3 つの Windows アプリがあります：\n・App1 (MSI), App2 (EXE), App3 (ストア アプリ)\n\n各アプリを Intune に追加する際に使用すべき「アプリの種類」をドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image134.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image135.png", "analysis": "" }
    ]
  },
  {
    "id": 241,
    "question": "Microsoft Intune Suite を含む Microsoft 365 サブスクリプションがあります。\nすべての Windows 11 デバイスは Microsoft Intune に登録されています。\n\n「エンドポイント特権管理 (EPM)」を実装する予定です。\n標準ユーザーに対して、特定のファイル拡張子を持つ実行可能ファイルの昇格を許可する必要があります。\n\nどのファイル拡張子がサポートされていますか？",
    "choices": [
      { "letter": "A", "text": ".msi" },
      { "letter": "B", "text": ".bat" },
      { "letter": "C", "text": ".ps1" },
      { "letter": "D", "text": ".vbs" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 242,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\nデバイスに対して「更新リング (Update rings)」ポリシーを構成しています。\n\n図の展示 (Exhibit) に示す情報に基づいて、各ステートメントを完成させてください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image213.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image214.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image215.png", "analysis": "" }
    ]
  },
  {
    "id": 243,
    "question": "Microsoft Entra テナント (contoso.com) があります。\nテナントには、次の表に示すユーザーが含まれています：\n・User1 (デバイス登録マネージャー)\n・User2 (標準ユーザー)\n\nMicrosoft Entra ID の「デバイス設定」で、「ユーザーはデバイスを Azure AD に参加させることができます」を「すべて」に設定しています。\n\n各ユーザーが参加させることができるデバイスの最大数を特定してください。",
    "choices": [
      { "letter": "A", "text": "User1: 15, User2: 50" },
      { "letter": "B", "text": "User1: 1000, User2: 50" },
      { "letter": "C", "text": "User1: 1000, User2: 15" },
      { "letter": "D", "text": "User1: 50, User2: 50" }
    ],
    "answer": "B",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image333.png", "analysis": "" }
    ]
  },
  {
    "id": 244,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\nWindows Autopilot を使用して展開された Windows 11 デバイスがあります。\n\nデバイス上で次のトラブルシューティング タスクを実行する必要があります：\n・Autopilot の展開エラーに関するログを収集する。\n・デバイスに適用されているポリシーを確認する。\n\n順番に実行すべき 3 つのアクションはどれですか？\n回答するには、アクションのリストから適切なアクションを回答領域に移動し、正しい順序で並べてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image138.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image139.png", "analysis": "" }
    ]
  },
  {
    "id": 245,
    "question": "Microsoft 365 E5 サブスクリプションがあり、すべてのデバイスを Microsoft Intune で管理しています。\n\nユーザーが管理されていない個人の macOS デバイスから、Microsoft Teams のデータをコピーして個人のアプリに貼り付けることを制限する必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス制限 (Device restrictions) プロファイル" },
      { "letter": "B", "text": "アプリ保護ポリシー (App protection policy)" },
      { "letter": "C", "text": "条件付きアクセス ポリシー" },
      { "letter": "D", "text": "コンプライアンス ポリシー" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 246,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\n「エンドポイント セキュリティ」の「アカウント保護」ポリシーで「Windows LAPS」を構成しています。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image427.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image428.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image429.png", "analysis": "" }
    ]
  },
  {
    "id": 247,
    "question": "Microsoft 365 サブスクリプションがあります。\nAndroid Enterprise デバイスに対して、管理対象の Google Play ストア アプリを展開する必要があります。\n\n最初に Microsoft Intune 管理センターで何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "Android エンタープライズ アカウントを Intune にリンクする。" },
      { "letter": "B", "text": "アプリ構成ポリシーを作成する。" },
      { "letter": "C", "text": "登録プロファイルを作成する。" },
      { "letter": "D", "text": "デバイス制限プロファイルを作成する。" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 248,
    "question": "【ホットスポット】\n\n次の表に示す 4 台の Windows デバイスがあります：\n・Device1 (Win 11 Pro), Device2 (Win 11 Ent), Device3 (Win 10 Pro), Device4 (Win 10 Ent)\n\n「Windows Autopilot プリプロビジョニング (Pre-provisioned) 展開」を使用できるデバイスはどれですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image255.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image256.png", "analysis": "" }
    ]
  },
  {
    "id": 249,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows 11 デバイスは Microsoft Intune に登録されています。\n\nデバイス上で特定の PowerShell スクリプトを実行する必要があります。スクリプトは、ユーザーがサインインしていない状態でも、1 時間ごとに繰り返し実行される必要があります。\n\n何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Intune の「スクリプト」機能" },
      { "letter": "B", "text": "Intune の「修復 (Remediations)」機能" },
      { "letter": "C", "text": "カスタムのデバイス構成プロファイル" },
      { "letter": "D", "text": "Win32 アプリとしての展開" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 250,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n図の展示 (Exhibit) に示す「コンプライアンス ポリシー」を作成しました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image267.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image268.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image269.png", "analysis": "" }
    ]
  },
  {
    "id": 251,
    "question": "会社には、ハイブリッド Microsoft Entra 参加済みの 500 台の Windows 10 デバイスがあります。すべてのデバイスは Microsoft Intune に登録されています。\n\n「エンドポイント分析 (Endpoint analytics)」を使用して、デバイスの「アプリケーションの信頼性」スコアを確認する予定です。\n\nどのレポートにこのデータが表示されますか？",
    "choices": [
      { "letter": "A", "text": "スタートアップ パフォーマンス" },
      { "letter": "B", "text": "アプリケーションの信頼性 (Application reliability)" },
      { "letter": "C", "text": "どこからでも作業可能 (Work from anywhere)" },
      { "letter": "D", "text": "リソースの正常性" }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 252,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次の要件を満たすようにデバイスの登録制限を構成する必要があります：\n・特定の IT スタッフのみが 15 台までのデバイスを登録できるようにする。\n・特定の部門に対して、iOS デバイスの登録のみを許可し、他のプラットフォームはブロックする。\n\n何を構成すべきですか？\n回答するには、適切な構成を正しい要件にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image331.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image332.png", "analysis": "" }
    ]
  },
  {
    "id": 253,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows 11 デバイスを Microsoft Defender for Endpoint にオンボードしました。\n\n管理作業を最小限に抑えつつ、デバイス上で不審な挙動が検出された際に「自動的に調査と修復」が行われるようにする必要があります。\n\nMicrosoft 365 Defender ポータルで何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "デバイス グループの修復レベル" },
      { "letter": "B", "text": "カスタム検出ルール" },
      { "letter": "C", "text": "自動攻撃遮断 (Automatic attack disruption)" },
      { "letter": "D", "text": "通知ルール" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 254,
    "question": "【ホットスポット】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n図の表に示す 3 つのコンプライアンス ポリシー (Policy1, Policy2, Policy3) があります。\n\n各ポリシーがどのプラットフォームに適用され、どのデバイスが「準拠」としてマークされるかを特定してください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image158.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image159.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image160.png", "analysis": "" }
    ]
  },
  {
    "id": 255,
    "question": "Windows 11 を実行する 100 台のコンピューターがあります。\nプロビジョニング パッケージを使用して、コンピューターを一括で Microsoft Entra に参加させ、Intune に自動登録する予定です。\n\nパッケージを作成する際、どの項目を構成して Microsoft Entra 参加を自動化すべきですか？",
    "choices": [
      { "letter": "A", "text": "Runtime settings > Workplace > Enrollments" },
      { "letter": "B", "text": "Runtime settings > Accounts > Users" },
      { "letter": "C", "text": "Runtime settings > ConnectivityProfiles > EnterpriseAPN" },
      { "letter": "D", "text": "Runtime settings > Azure > BulkEnrollment" }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 256,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\n次のアプリを展開する必要があります：\n・App1: .msi ファイル形式の 64 ビット アプリ。\n・App2: Apple App Store のパブリック アプリ。\n・App3: 社内ポータル (Company Portal) 自体の展開。\n\nどの種類のアプリを追加すべきですか？\n回答するには、適切なアプリの種類を正しい要件にドラッグしてください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image236.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image237.png", "analysis": "" }
    ]
  },
  {
    "id": 257,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。\nIntune を使用して Windows 11 デバイスを管理しています。\n\n「リモート ヘルプ (Remote Help)」機能を有効にし、サポート スタッフがユーザーのデバイスをフルコントロールで操作できるようにする必要があります。\n\nIntune 管理センターのどの設定でこれを構成しますか？",
    "choices": [
      { "letter": "A", "text": "テナント管理 > リモート ヘルプ" },
      { "letter": "B", "text": "デバイス > 構成プロファイル" },
      { "letter": "C", "text": "ユーザー > すべてのユーザー" },
      { "letter": "D", "text": "エンドポイント セキュリティ > アカウント保護" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 258,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\nデバイスに対して「Windows LAPS」のポリシーを割り当てました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image441.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image442.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image443.png", "analysis": "" }
    ]
  },
  {
    "id": 259,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows デバイスを Microsoft Intune で管理しています。\n\nユーザーが個人のデバイスから企業データにアクセスした際、OneDrive for Business へのデータのアップロードを禁止する必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ保護ポリシー (App protection policy)" },
      { "letter": "B", "text": "条件付きアクセス ポリシー" },
      { "letter": "C", "text": "デバイス制限プロファイル" },
      { "letter": "D", "text": "コンプライアンス ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 260,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された 100 台の Windows 11 デバイスがあります。\n次の図に示す「構成プロファイル」の設定を行いました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image288.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image289.png", "analysis": "" }
    ]
  },
  {
    "id": 261,
    "question": "Microsoft 365 サブスクリプションがあります。\nIntune を使用して、iOS デバイスに対して Apple ID なしでアプリを展開する必要があります。\n\nどの展開方法を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "VPP (Volume Purchase Program) を使用したデバイス割り当て" },
      { "letter": "B", "text": "VPP を使用したユーザー割り当て" },
      { "letter": "C", "text": "パブリック アプリ ストアからの直接割り当て" },
      { "letter": "D", "text": "アプリ プロビジョニング プロファイル" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 262,
    "question": "【ホットスポット】\n\nMicrosoft 365 サブスクリプションがあります。\n次の図に示すように、Windows Autopilot の「自己展開モード」プロファイルを作成しました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image255.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image256.png", "analysis": "" }
    ]
  },
  {
    "id": 263,
    "question": "1,000 台の Windows 11 デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nIntune と Microsoft Defender for Endpoint を統合しています。\n\nデバイスが「高リスク」と判定された場合に、自動的に企業リソースへのアクセスをブロックする必要があります。\n\nどの 2 つのコンポーネントを構成すべきですか？\n(回答するには 2 つ選択してください)",
    "choices": [
      { "letter": "A", "text": "Intune のコンプライアンス ポリシー" },
      { "letter": "B", "text": "条件付きアクセス ポリシー" },
      { "letter": "C", "text": "デバイス制限プロファイル" },
      { "letter": "D", "text": "アプリ保護ポリシー" }
    ],
    "answer": "AB",
    "images": []
  },
  {
    "id": 264,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\n図の展示 (Exhibit) に示す「配信最適化 (Delivery Optimization)」の設定を行いました。\n\n図の情報に基づいて、各ステートメントを完成させてください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image315.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image316.png", "analysis": "" }
    ]
  },
  {
    "id": 265,
    "question": "Microsoft 365 サブスクリプションがあります。\nすべての Windows デバイスを Microsoft Intune に登録しています。\n\nデバイスのシリアル番号、モデル名、製造元の一覧をエクスポートする必要があります。\n\nどのレポートを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "「デバイス」配下の「すべてのデバイス」からエクスポート" },
      { "letter": "B", "text": "デバイスのコンプライアンス レポート" },
      { "letter": "C", "text": "エンドポイント分析の「どこからでも作業可能」レポート" },
      { "letter": "D", "text": "Microsoft 365 管理センターの「使用状況」レポート" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 266,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\n図に示す「セキュリティ ベースライン」の設定を行いました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image292.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image293.png", "analysis": "" }
    ]
  },
  {
    "id": 267,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nユーザーが管理されていない個人の Windows デバイスから、会社の Outlook Web アプリ (OWA) にアクセスする際、添付ファイルのダウンロードを制限する必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "条件付きアクセス ポリシー (アプリによる制限付きアクセスの使用)" },
      { "letter": "B", "text": "アプリ保護ポリシー" },
      { "letter": "C", "text": "デバイス制限プロファイル" },
      { "letter": "D", "text": "Exchange Online のアクセス制御設定" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 268,
    "question": "【ドラッグ＆ドロップ】\n\nMicrosoft Intune を含む Microsoft 365 サブスクリプションがあります。\nWindows Autopilot を使用して展開された Windows 11 デバイスがあります。\n\nデバイス上で次のトラブルシューティング手順を実行する際の正しい順序を回答してください：\n1. デバイスのイベント ログを確認する。\n2. 登録ステータス ページ (ESP) のログを取得する。\n3. Intune 管理センターでデバイスの展開ステータスを確認する。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image138.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image139.png", "analysis": "" }
    ]
  },
  {
    "id": 269,
    "question": "Microsoft 365 サブスクリプションがあります。\nAndroid デバイスを Microsoft Intune に「専用デバイス (Dedicated device)」として登録する予定です。\n\nどの登録モードを使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "Android エンタープライズの「企業所有の専用デバイス」" },
      { "letter": "B", "text": "Android エンタープライズの「仕事用プロファイル」" },
      { "letter": "C", "text": "Android デバイス管理者 (Device Administrator)" },
      { "letter": "D", "text": "Android AOSP" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 270,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\n図の展示 (Exhibit) に示す「構成プロファイル」の設定を行いました。\n\n図の情報に基づいて、各ステートメントを完成させてください。\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image193.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image194.png", "analysis": "" }
    ]
  },
  {
    "id": 271,
    "question": "Microsoft 365 E5 サブスクリプションがあります。\nすべての Windows デバイスを Microsoft Intune で管理しています。\n\n管理作業を最小限に抑えつつ、デバイスのセキュリティ設定が「Microsoft の推奨するベースライン」に準拠しているかを監視・評価する必要があります。\n\nIntune 管理センターで何を使用すべきですか？",
    "choices": [
      { "letter": "A", "text": "セキュリティ ベースライン" },
      { "letter": "B", "text": "コンプライアンス ポリシー" },
      { "letter": "C", "text": "構成プロファイル" },
      { "letter": "D", "text": "エンドポイント分析" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 272,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\n図に示す「エンドポイント セキュリティ」の「アカウント保護」設定を行いました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image421.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image422.png", "analysis": "" }
    ]
  },
  {
    "id": 273,
    "question": "Microsoft 365 サブスクリプションがあります。\nAndroid デバイス上の Outlook アプリに対して、特定の連絡先をデバイス本体の連絡先アプリと同期することを許可する必要があります。\n\n何を構成すべきですか？",
    "choices": [
      { "letter": "A", "text": "アプリ構成ポリシー" },
      { "letter": "B", "text": "アプリ保護ポリシー" },
      { "letter": "C", "text": "デバイス制限プロファイル" },
      { "letter": "D", "text": "コンプライアンス ポリシー" }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 274,
    "question": "【ホットスポット】\n\nMicrosoft Intune に登録された Windows 11 デバイスがあります。\n図の展示 (Exhibit) に示す「構成プロファイル」の設定を行いました。\n\n図の情報に基づいて、各ステートメントが正しい場合は「はい」を、そうでない場合は「いいえ」を選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image602.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image603.png", "analysis": "" }
    ]
  },
  {
    "id": 275,
    "question": "【ホットスポット】\n\n500 台の Windows デバイスを含む Microsoft 365 E5 サブスクリプションがあります。\nインターネットからの Office ファイル内のマクロ実行をブロックする「Policies for Office Apps」ポリシーを作成して割り当てる必要があります。\n\nどのポータルを使用し、ポリシーのスコープを何に設定すべきですか？\n回答するには、回答領域で適切なオプションを選択してください。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image597.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image598.png", "analysis": "" },
      { "url": "https://img.examtopics.com/md-102/image599.png", "analysis": "" }
    ]
  },
  {
    "id": 276,
    "question": "Microsoft Intune で管理されている 500 台の Android デバイスを含む Microsoft 365 サブスクリプションがあります。\nAndroid FOTA (Firmware Over-the-Air) を使用して、デバイスのソフトウェア更新プログラムを管理できるようにする必要があります。\n\n何をすべきですか？",
    "choices": [
      { "letter": "A", "text": "コンプライアンス ポリシーを作成する。" },
      { "letter": "B", "text": "コンプライアンス パートナーを追加する。" },
      { "letter": "C", "text": "FOTA コネクタを構成する。" },
      { "letter": "D", "text": "派生資格情報 (Derived credentials) を追加する。" }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 277,
    "question": "【シミュレーション問題】\n\n■ ログイン資格情報\n・Microsoft 365 ユーザー名：admin@M365x48262079.onmicrosoft.com\n・パスワード：i7A4$3o^HGD3L~=c[9xuOhM%^4:s11Ai\n\n■ 課題内容\nsg-IT という名前のグループに含まれる Windows 10 以降のデバイスに対して、「シングル アプリのフルスクリーン キオスク モード」を有効にする構成プロファイルを作成してください。\nこのソリューションでは、KioskUser という名前のローカル ユーザーを自動的にサインインさせ、ホームページとして https://bing.com を設定した Microsoft Edge を表示させる必要があります。",
    "choices": [],
    "answer": "A",
    "images": [
      { "url": "https://img.examtopics.com/md-102/image381.png", "analysis": "" }
    ]
  }
];
 