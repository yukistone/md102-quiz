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
      "id": 1,
    "question": "Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune に登録されている iOS デバイスが 100 台あります。Intune を使用して、これらのデバイスにカスタム基幹業務 (LOB) アプリを展開する必要があります。アプリ パッケージ ファイルにはどの拡張子を選択すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": ".intunemac"
      },
      {
        "letter": "B",
        "text": ".ipa"
      },
      {
        "letter": "C",
        "text": ".apk"
      },
      {
        "letter": "D",
        "text": ".appx"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 2,
    "question": "Microsoft 365 サブスクリプションを所有しています。Windows 10 を実行し、モバイルデバイス管理 (MDM) に登録されているコンピューターが 10 台あります。Microsoft 365 Apps for enterprise スイートをすべてのコンピューターに展開する必要があります。どうすればよいでしょうか?",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Intune 管理センターから、Windows 10 デバイス プロファイルを作成します。"
      },
      {
        "letter": "B",
        "text": "Azure AD からアプリ登録を追加します。"
      },
      {
        "letter": "C",
        "text": "Azure AD からエンタープライズ アプリケーションを追加します。"
      },
      {
        "letter": "D",
        "text": "Microsoft Intune 管理センターからアプリを追加します。"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 3,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションを所有しています。デバイス管理には Microsoft Intune を使用しています。Intune に登録されている Device1 という Windows 11 デバイスがあります。Device1 は 30 日間オフラインになっています。Intune から Device1 を直ちに削除する必要があります。このソリューションでは、デバイスが再度チェックインしたときに、Intune によってプロビジョニングされたアプリとデータがすべて削除されるようにする必要があります。ユーザーがインストールしたアプリ、個人データ、および OEM がインストールしたアプリは保持する必要があります。どのアクションを使用すればよいですか?",
    "choices": [
      {
        "letter": "A",
        "text": "削除アクション"
      },
      {
        "letter": "B",
        "text": "引退アクション"
      },
      {
        "letter": "C",
        "text": "フレッシュスタートアクション"
      },
      {
        "letter": "D",
        "text": "オートパイロットリセットアクション"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 4,
    "question": "Microsoft Intune に登録されている 500 台の macOS デバイスを含む Microsoft 365 E5 サブスクリプションを所有しています。これらの macOS デバイスに Microsoft Defender for Endpoint のウイルス対策ポリシーを適用できるようにする必要があります。このソリューションは、管理作業を最小限に抑える必要があります。どうすればよいでしょうか？ A. macOS デバイスを Microsoft Purview コンプライアンス ポータルにオンボードします。B. Microsoft Intune 管理センターから、セキュリティ ベースラインを作成します。C. macOS デバイスに Defender for Endpoint をインストールします。D. Microsoft Intune 管理センターから、構成プロファイルを作成します。 回答を表示 回答を非表示 回答の候補: D 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "macOS デバイスを Microsoft Purview コンプライアンス ポータルにオンボードします。"
      },
      {
        "letter": "B",
        "text": "Microsoft Intune 管理センターから、セキュリティ ベースラインを作成します。"
      },
      {
        "letter": "C",
        "text": "macOS デバイスに Defender for Endpoint をインストールします。"
      },
      {
        "letter": "D",
        "text": "Microsoft Intune 管理センターから、構成プロファイルを作成します。"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 5,
    "question": "ネットワークにはオンプレミスの Active Directory ドメインと Azure AD テナントが含まれています。Default Domain Policy のグループ ポリシー オブジェクト (GPO) には、次の表に示す設定が含まれています。既存の Default Domain Policy の GPO 設定をデバイス構成プロファイルに移行する必要があります。どの種類のデバイス構成プロファイル テンプレートを使用すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "管理用テンプレート"
      },
      {
        "letter": "B",
        "text": "エンドポイント保護"
      },
      {
        "letter": "C",
        "text": "デバイスの制限"
      },
      {
        "letter": "D",
        "text": "カスタム"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image31.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 6,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションをお持ちです。次の図に示すように、「Policy1」という新しい更新リングポリシーを作成します。ドロップダウンメニューを使用して、図に示されている情報に基づいて各文を完成させる選択肢を選択してください。注: 正解は1つにつき1点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image25.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image26.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image549.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 7,
    "question": "150台のハイブリッドAzure AD参加済みWindowsデバイスを含むMicrosoft 365 E5サブスクリプションがあります。すべてのデバイスはMicrosoft Intuneに登録されています。デバイスで配信の最適化を構成し、次の要件を満たす必要があります。インターネットからのダウンロードとローカルネットワーク上の他のコンピューターからのダウンロードを許可します。使用帯域幅の割合を50%に制限します。何を使用すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "構成プロファイル"
      },
      {
        "letter": "B",
        "text": "Windows Update for Businessのグループポリシー設定"
      },
      {
        "letter": "C",
        "text": "Microsoft ピアツーピア ネットワーク サービス グループ ポリシー設定"
      },
      {
        "letter": "D",
        "text": "Windows 10以降のプロファイル用のUpdateリング"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 8,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションを所有しています。デバイス管理には Microsoft Intune を使用しています。すべての Windows デバイスに App1 と App2 という 2 つのアプリを展開する予定です。App1 は App2 より先にインストールする必要があります。Intune 管理センターから、2 つの Windows アプリ (Win32) を作成して展開します。すべてのデバイスで、App1 が App2 より先にインストールされていることを確認する必要があります。何を構成する必要がありますか?",
    "choices": [
      {
        "letter": "A",
        "text": "App1のデプロイメント構成"
      },
      {
        "letter": "B",
        "text": "動的デバイスグループ"
      },
      {
        "letter": "C",
        "text": "検出ルール"
      },
      {
        "letter": "D",
        "text": "App2の展開構成"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 9,
    "question": "ケース スタディ - 概要 - ADatum Corporation は、モントリオールに本社、シアトルとニューヨークに支社を持つコンサルティング会社です。ADatum は、Microsoft 365 E5 サブスクリプションを所有しています。環境 - ネットワーク環境 - ネットワークには、adatum.com という名前のオンプレミスの Active Directory ドメインが含まれています。このドメインには、次の表に示すサーバーが含まれています。ADatum には、adatum.com という名前のハイブリッド Azure AD テナントがあります。ユーザーとグループ - adatum.com テナントには、次の表に示すユーザーが含まれています。すべてのユーザーには、Microsoft Office 365 ライセンスと Enterprise Mobility + Security E3 ライセンスが割り当てられています。Group1 と GroupA では、Enterprise State Roaming が有効になっています。Group1 と Group2 のメンバーシップの種類は割り当て済みです。デバイス - ADatum には、次の表に示す Windows 10 デバイスがあります。Windows 10 デバイスは、Azure AD に参加しており、Microsoft Intune に登録されています。すべての Azure AD 参加済みデバイスには、C:\\AppA.exe という実行可能ファイルと、D:\\Folder1 というフォルダーがあります。 Microsoft Intune の構成 - Microsoft Intune には、次の表に示すコンプライアンス ポリシーがあります。 自動登録設定には、次の構成があります: MDM ユーザー スコープ: GroupA - MAM ユーザー スコープ: GroupB - 次の制御されたフォルダー アクセス設定を持つエンドポイント保護構成プロファイルがあります: 名前: Protection1 - フォルダー保護: 有効 - 保護されたフォルダーにアクセスできるアプリの一覧: C:\\*\\AppA.exe 保護する必要がある追加のフォルダーの一覧: D:\\Folder1 割り当て: 含まれるグループ: Group2、GroupB - Windows Autopilot の構成 - ADatum には、次の図に示すように Windows Autopilot 展開プロファイルが構成されています。 現在、Windows Autopilot を使用して展開されているデバイスはありません。要件 - 計画されている変更 - ADatum は次の変更を実装する予定です: Device6 という名前の新しい Windows 10 デバイスを購入し、デバイスを Intune に登録します。 新しいコンピューターは、Windows Autopilot を使用して展開され、ハイブリッド Azure AD 参加済みになります。 次の設定を持つネットワーク境界構成プロファイルを展開しました: 名前: Boundary1 - ネットワーク境界: 192.168.1.0/24 スコープ タグ: Tag1 - 割り当て: 含まれるグループ: Group1、Group2 - 次の設定を持つ Connection1 および Connection2 という名前の 2 つの VPN 構成プロファイルを展開します: 名前: Connection1 - 接続名: VPN1 - 接続の種類: L2TP - 割り当て: 含まれるグループ: Group1、Group2、GroupA 除外されるグループ: -- 名前: Connection2 - 接続名: VPN2 - 接続の種類: IKEv2 - 割り当て: 含まれるグループ: GroupA - 除外されるグループ: GroupB - 技術要件 - ADatum は次の技術要件を満たしている必要があります: GroupA のユーザーは、新しいコンピューターを展開できる必要があります計画された変更に基づいて Boundary1 を実装します。192.168.1.0/24 のネットワーク境界が適用されているデバイスはどれですか?",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス2のみ"
      },
      {
        "letter": "B",
        "text": "デバイス3のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1、デバイス2、デバイス5のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3、デバイス4のみ"
      }
    ],
    "answer": "D",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image1.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image2.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image3.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image4.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image5.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image6.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image7.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 10,
    "question": "次の表に示すように、Microsoft Intune に登録されているデバイスがあります。アプリ構成ポリシーを適用できるデバイスはどれですか？ A. デバイス2 のみ B. デバイス1 とデバイス2 のみ C. デバイス3 とデバイス4 のみ D. デバイス2、デバイス3、デバイス4 のみ E. デバイス1、デバイス2、デバイス3、デバイス4 推奨回答を表示 回答を非表示 推奨回答: C 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス2のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス3とデバイス4のみ"
      },
      {
        "letter": "D",
        "text": "デバイス2、デバイス3、デバイス4のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image17.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 11,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションをご利用です。デバイス管理には Microsoft Intune を使用しています。デバイスの起動時間と再起動頻度を確認する必要があります。どのツールを使用すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Azure モニター"
      },
      {
        "letter": "B",
        "text": "Intune データ ウェアハウス"
      },
      {
        "letter": "C",
        "text": "エンドポイント向け Microsoft Defender"
      },
      {
        "letter": "D",
        "text": "エンドポイント分析"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 12,
    "question": "ドラッグ＆ドロップ - Microsoft Intune を含む Microsoft 365 サブスクリプションをお持ちです。以下の要件を満たす Microsoft Defender for Endpoint ソリューションを実装する必要があります。条件付きアクセスを使用して Defender for Endpoint のコンプライアンスを強制する デバイス上で疑わしいスクリプトの実行を防止する 何を構成する必要がありますか？ 回答するには、適切な機能を正しい要件にドラッグしてください。各機能は、1 回、複数回、またはまったく使用されない場合があります。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正しい選択ごとに 1 ポイントが付与されます。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image29.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image30.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 13,
    "question": "ドラッグ＆ドロップ - Microsoft 365 サブスクリプションをお持ちです。サブスクリプションには、Windows 11 を実行し、Microsoft Intune に登録されているコンピューターが含まれています。以下の要件を満たすコンプライアンス ポリシーを作成する必要があります。各デバイスで BitLocker ドライブ暗号化 (BitLocker) が必須であること。最低限必要なオペレーティング システム バージョンが必須であること。各要件に対して、コンプライアンス ポリシーのどの設定を構成する必要がありますか? 回答するには、適切な設定を正しい要件にドラッグしてください。各設定は、1 回使用することも、複数回使用することも、まったく使用しないこともできます。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正しい選択ごとに 1 ポイントが加算されます。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image44.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image45.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 14,
    "question": "ケース スタディ - 概要 - ADatum Corporation は、モントリオールに本社、シアトルとニューヨークに支社を持つコンサルティング会社です。ADatum は、Microsoft 365 E5 サブスクリプションを所有しています。環境 - ネットワーク環境 - ネットワークには、adatum.com という名前のオンプレミスの Active Directory ドメインが含まれています。このドメインには、次の表に示すサーバーが含まれています。ADatum には、adatum.com という名前のハイブリッド Azure AD テナントがあります。ユーザーとグループ - adatum.com テナントには、次の表に示すユーザーが含まれています。すべてのユーザーには、Microsoft Office 365 ライセンスと Enterprise Mobility + Security E3 ライセンスが割り当てられています。Group1 と GroupA では、Enterprise State Roaming が有効になっています。Group1 と Group2 のメンバーシップの種類は割り当て済みです。デバイス - ADatum には、次の表に示す Windows 10 デバイスがあります。Windows 10 デバイスは、Azure AD に参加しており、Microsoft Intune に登録されています。すべての Azure AD 参加済みデバイスには、C:\\AppA.exe という実行可能ファイルと、D:\\Folder1 というフォルダーがあります。 Microsoft Intune の構成 - Microsoft Intune には、次の表に示すコンプライアンス ポリシーがあります。 自動登録設定には、次の構成があります: MDM ユーザー スコープ: GroupA - MAM ユーザー スコープ: GroupB - 次の制御されたフォルダー アクセス設定を持つエンドポイント保護構成プロファイルがあります: 名前: Protection1 - フォルダー保護: 有効 - 保護されたフォルダーにアクセスできるアプリの一覧: C:\\*\\AppA.exe 保護する必要がある追加のフォルダーの一覧: D:\\Folder1 割り当て: 含まれるグループ: Group2、GroupB - Windows Autopilot の構成 - ADatum には、次の図に示すように Windows Autopilot 展開プロファイルが構成されています。 現在、Windows Autopilot を使用して展開されているデバイスはありません。要件 - 計画されている変更 - ADatum は次の変更を実装する予定です: Device6 という名前の新しい Windows 10 デバイスを購入し、デバイスを Intune に登録します。 新しいコンピューターは、Windows Autopilot を使用して展開され、ハイブリッド Azure AD 参加済みになります。 次の設定を持つネットワーク境界構成プロファイルを展開しました: 名前: Boundary1 - ネットワーク境界: 192.168.1.0/24 スコープ タグ: Tag1 - 割り当て: 含まれるグループ: Group1、Group2 - 次の設定を持つ Connection1 および Connection2 という名前の 2 つの VPN 構成プロファイルを展開します: 名前: Connection1 - 接続名: VPN1 - 接続の種類: L2TP - 割り当て: 含まれるグループ: Group1、Group2、GroupA 除外されるグループ: -- 名前: Connection2 - 接続名: VPN2 - 接続の種類: IKEv2 - 割り当て: 含まれるグループ: GroupA - 除外されるグループ: GroupB - 技術要件 - ADatum は次の技術要件を満たしている必要があります: GroupA のユーザーは、新しいコンピューターを展開できる必要がありますWindows Autopilot 展開サービスを使用して登録されるデバイスはどれですか?",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス3のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image1.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image2.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image3.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image4.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image5.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image6.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image7.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 15,
    "question": "HOTSPOT - Microsoft 365 サブスクリプションをご利用です。デバイス管理には Microsoft Intune Suite を使用しています。以下の図に示す iOS アプリ保護ポリシーをご利用です。図に示されている情報に基づき、ドロップダウンメニューを使用して各文の解答を選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image12.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image13.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image14.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 16,
    "question": "HOTSPOT - ケース スタディ - 概要 - ADatum Corporation は、モントリオールに本社、シアトルとニューヨークに支社を持つコンサルティング会社です。ADatum は、Microsoft 365 E5 サブスクリプションを所有しています。環境 - ネットワーク環境 - ネットワークには、adatum.com という名前のオンプレミスの Active Directory ドメインが含まれています。このドメインには、次の表に示すサーバーが含まれています。ADatum には、adatum.com という名前のハイブリッド Azure AD テナントがあります。ユーザーとグループ - adatum.com テナントには、次の表に示すユーザーが含まれています。すべてのユーザーには、Microsoft Office 365 ライセンスと Enterprise Mobility + Security E3 ライセンスが割り当てられています。Group1 と GroupA では、Enterprise State Roaming が有効になっています。Group1 と Group2 のメンバーシップの種類は割り当て済みです。デバイス - ADatum には、次の表に示す Windows 10 デバイスがあります。Windows 10 デバイスは、Azure AD に参加しており、Microsoft Intune に登録されています。すべての Azure AD 参加済みデバイスには、C:\\AppA.exe という実行可能ファイルと、D:\\Folder1 というフォルダーがあります。 Microsoft Intune の構成 - Microsoft Intune には、次の表に示すコンプライアンス ポリシーがあります。 自動登録設定には、次の構成があります: MDM ユーザー スコープ: GroupA - MAM ユーザー スコープ: GroupB - 次の制御されたフォルダー アクセス設定を持つエンドポイント保護構成プロファイルがあります: 名前: Protection1 - フォルダー保護: 有効 - 保護されたフォルダーにアクセスできるアプリの一覧: C:\\*\\AppA.exe 保護する必要がある追加のフォルダーの一覧: D:\\Folder1 割り当て: 含まれるグループ: Group2、GroupB - Windows Autopilot の構成 - ADatum には、次の図に示すように Windows Autopilot 展開プロファイルが構成されています。 現在、Windows Autopilot を使用して展開されているデバイスはありません。要件 - 計画されている変更 - ADatum は次の変更を実装する予定です: Device6 という名前の新しい Windows 10 デバイスを購入し、デバイスを Intune に登録します。 新しいコンピューターは、Windows Autopilot を使用して展開され、ハイブリッド Azure AD 参加済みになります。 次の設定を持つネットワーク境界構成プロファイルを展開しました: 名前: Boundary1 - ネットワーク境界: 192.168.1.0/24 スコープ タグ: Tag1 - 割り当て: 含まれるグループ: Group1、Group2 - 次の設定を持つ Connection1 および Connection2 という名前の 2 つの VPN 構成プロファイルを展開します: 名前: Connection1 - 接続名: VPN1 - 接続の種類: L2TP - 割り当て: 含まれるグループ: Group1、Group2、GroupA 除外されるグループ: -- 名前: Connection2 - 接続名: VPN2 - 接続の種類: IKEv2 - 割り当て: 含まれるグループ: GroupA - 除外されるグループ: GroupB - 技術要件 - ADatum は次の技術要件を満たしている必要があります: GroupA のユーザーは、新しいコンピューターを展開できる必要があります次の各文が正しい場合は、「はい」を選択してください。それ以外の場合は、「いいえ」を選択してください。注: 正解ごとに1ポイントが加算されます。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image1.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image2.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image3.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image4.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image5.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image6.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image7.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image8.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image9.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 17,
    "question": "HOTSPOT - Case study - Overview - ADatum Corporation is a consulting company that has a main office in Montreal and branch offices in Seattle and New York. ADatum has a Microsoft 365 E5 subscription. Environment - Network Environment - The network contains an on-premises Active Directory domain named adatum.com. The domain contains the servers shown in the following table. ADatum has a hybrid Azure AD tenant named adatum.com. Users and Groups - The adatum.com tenant contains the users shown in the following table. All users are assigned a Microsoft Office 365 license and an Enterprise Mobility + Security E3 license. Enterprise State Roaming is enabled for Group1 and GroupA. Group1 and Group2 have a Membership type of Assigned. Devices - ADatum has the Windows 10 devices shown in the following table. The Windows 10 devices are joined to Azure AD and enrolled in Microsoft Intune. The Windows 10 devices are configured as shown in the following table. All the Azure AD joined devices have an executable file named C:\\AppA.exe and a folder named D:\\Folder1. Microsoft Intune Configuration - Microsoft Intune has the compliance policies shown in the following table. The Automatic Enrollment settings have the following configurations: MDM user scope: GroupA - MAM user scope: GroupB - You have an Endpoint protection configuration profile that has the following Controlled folder access settings: Name: Protection1 - Folder protection: Enable - List of apps that have access to protected folders: C:\\*\\AppA.exe List of additional folders that need to be protected: D:\\Folder1 Assignments: Included groups: Group2, GroupB - Windows Autopilot Configuration - ADatum has a Windows Autopilot deployment profile configured as shown in the following exhibit. Currently, there are no devices deployed by using Windows Autopilot. The Intune connector for Active Directory is installed on Server1. Requirements - Planned Changes - ADatum plans to implement the following changes: Purchase a new Windows 10 device named Device6 and enroll the device in Intune New computers will be deployed by using Windows Autopilot and will be hybrid Azure AD joined. Deployed a network boundary configuration profile that will have the following settings: Name: Boundary1 - Network boundary: 192.168.1.0/24 Scope tags: Tag1 - Assignments: Included groups: Group1, Group2 - Deploy two VPN configuration profiles named Connection1 and Connection2 that will have the following settings: Name: Connection1 - Connection name: VPN1 - Connection type: L2TP - Assignments: Included groups: Group1, Group2, GroupA Excluded groups: -- Name: Connection2 - Connection name: VPN2 - Connection type: IKEv2 - Assignments: Included groups: GroupA - Excluded groups: GroupB - Technical Requirements - ADatum must meet the following technical requirements: Users in GroupA must be able to deploy new computers. Administrative effort must be minimized. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image1.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image2.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image3.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image4.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image5.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image6.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image7.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image10.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image11.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 18,
    "question": "Windows 10 を実行し、Azure Log Analytics ワークスペースに接続しているコンピューターがあります。ワークスペースは、Windows イベント ログから利用可能なすべてのイベントを収集するように構成されています。コンピューターに記録されているイベントは次の表のとおりです。Log Analytics ワークスペースで収集されるイベントはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "1のみ"
      },
      {
        "letter": "B",
        "text": "2と3のみ"
      },
      {
        "letter": "C",
        "text": "1と3のみ"
      },
      {
        "letter": "D",
        "text": "1、2、4のみ そして。 1、2、3、4"
      }
    ],
    "answer": "E",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image28.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 19,
    "question": "ネットワークにはActive Directoryドメインが含まれています。このドメインにはAdmin1というユーザーがいます。すべてのコンピューターはWindows 10を実行しています。これらのコンピューターでWindows PowerShellリモート処理を有効にします。Admin1がこれらのコンピューターにリモートPowerShell接続を確立できるようにする必要があります。このソリューションでは、最小権限の原則を適用する必要があります。Admin1をどのグループに追加すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "アクセス制御支援オペレーター"
      },
      {
        "letter": "B",
        "text": "リモートデスクトップユーザー"
      },
      {
        "letter": "C",
        "text": "パワーユーザー"
      },
      {
        "letter": "D",
        "text": "リモート管理ユーザー"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 20,
    "question": "HOTSPOT - 次の表に示すユーザーを含むAzure ADテナントがあります。次の表に示すように、Microsoft Intuneに登録されているデバイスがあります。Intuneから、「Notification1」というカスタム通知を作成し、Group1に送信します。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択は1点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image37.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image38.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image39.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image40.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 21,
    "question": "Microsoft 365 E5 サブスクリプションがあり、User1 というユーザーが登録されており、Microsoft Intune Suite を使用しています。デバイス管理には Microsoft Intune を使用しています。Intune に登録されている Devic1 というデバイスがあります。User1 が Intune 管理センターから Device1 のリモート ヘルプを使用できることを確認する必要があります。実行する必要がある 3 つのアクションはどれですか。正解はそれぞれソリューションの一部を示しています。注: 正解は 1 点です。",
    "choices": [
      {
        "letter": "A",
        "text": "リモート ヘルプ アプリを Device1 に展開します。"
      },
      {
        "letter": "B",
        "text": "ヘルプデスクオペレーターの役割を User1 に割り当てます。"
      },
      {
        "letter": "C",
        "text": "Intune 管理者ロールを User1 に割り当てます。"
      },
      {
        "letter": "D",
        "text": "Microsoft 365 E5 ライセンスを User1 に割り当てます。 そして。 Device1 でデバイス オンボーディングを再実行します。"
      },
      {
        "letter": "F",
        "text": "リモート ヘルプ アドオン ライセンスを User1 に割り当てます。"
      }
    ],
    "answer": "ABF",
    "images": []
  },
  {
    "id": 22,
    "question": "ネットワークにcontoso.comというActive Directoryドメインがあります。このドメインには、Windows 10を実行するComputer1というコンピューターが含まれています。次の表に示すグループがあります。Group4に追加できるグループはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "グループ2のみ"
      },
      {
        "letter": "B",
        "text": "グループ1とグループ2のみ"
      },
      {
        "letter": "C",
        "text": "グループ2とグループ3のみ"
      },
      {
        "letter": "D",
        "text": "グループ1、グループ2、グループ3"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image43.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 23,
    "question": "ドラッグ＆ドロップ - Windows 10 を搭載したコンピューターがあり、User1 と User2 という 2 人のローカルユーザーが登録されています。これらのユーザーが以下の操作を実行できるようにする必要があります。User1 は日付と時刻を調整できなければなりません。User2 は Windows ログを消去できなければなりません。このソリューションでは、最小権限の原則を適用する必要があります。各ユーザーをどのグループに追加すればよいでしょうか？ 回答するには、適切なグループを適切なユーザーにドラッグしてください。各グループは 1 回使用することも、複数回使用することも、まったく使用しないこともできます。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正解は 1 点です。 回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image55.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image550.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 24,
    "question": "HOTSPOT - contoso.com という Azure AD テナントがあり、そこには次の表に示すユーザーがいます。Windows 10 を実行する Computer1 というコンピューターがあります。Computer1 はワークグループに属しており、次の表に示すローカルユーザーがいます。UserA は [email protected] を使用して Computer1 を Azure AD に参加させます。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択はそれぞれ 1 ポイントです。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image60.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image61.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image62.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image551.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 25,
    "question": "You have an Azure AD tenant and 100 Windows 10 devices that are Azure AD joined and managed by using Microsoft Intune. You need to configure Microsoft Defender Firewall and Microsoft Defender Antivirus on the devices. The solution must minimize administrative effort. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point. A. To configure Microsoft Defender Antivirus, create a Group Policy Object (GPO) and configure the Windows Defender Antivirus settings. B. To configure Microsoft Defender Firewall, create a device configuration profile and configure the Device restrictions settings. C. To configure Microsoft Defender Antivirus, create a device configuration profile and configure the Endpoint protection settings. D. To configure Microsoft Defender Antivirus, create a device configuration profile and configure the Device restrictions settings. E. To configure Microsoft Defender Firewall, create a device configuration profile and configure the Endpoint protection settings. F. To configure Microsoft Defender Firewall, create a Group Policy Object (GPO) and configure Windows Defender Firewall with Advanced Security.",
    "choices": [
      {
        "letter": "A",
        "text": "To configure Microsoft Defender Antivirus, create a Group Policy Object (GPO) and configure the Windows Defender Antivirus settings."
      },
      {
        "letter": "B",
        "text": "To configure Microsoft Defender Firewall, create a device configuration profile and configure the Device restrictions settings."
      },
      {
        "letter": "C",
        "text": "To configure Microsoft Defender Antivirus, create a device configuration profile and configure the Endpoint protection settings."
      },
      {
        "letter": "D",
        "text": "To configure Microsoft Defender Antivirus, create a device configuration profile and configure the Device restrictions settings."
      },
      {
        "letter": "E",
        "text": "To configure Microsoft Defender Firewall, create a device configuration profile and configure the Endpoint protection settings."
      },
      {
        "letter": "F",
        "text": "To configure Microsoft Defender Firewall, create a Group Policy Object (GPO) and configure Windows Defender Firewall with Advanced Security."
      }
    ],
    "answer": "DE",
    "images": []
  },
  {
    "id": 26,
    "question": "You have an Azure AD group named Group1. Group1 contains two Windows 10 Enterprise devices named Device1 and Device2. You create a device configuration profile named Profile1. You assign Profile1 to Group1. You need to ensure that Profile1 applies to Device1 only. What should you modify in Profile1?",
    "choices": [
      {
        "letter": "A",
        "text": "Assignments"
      },
      {
        "letter": "B",
        "text": "Settings"
      },
      {
        "letter": "C",
        "text": "Scope (Tags)"
      },
      {
        "letter": "D",
        "text": "Applicability Rules"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 27,
    "question": "HOTSPOT - Windows 10 を実行するコンピューターが 100 台あります。サーバーはありません。すべてのコンピューターは Azure AD に参加しています。コンピューターにはそれぞれ異なる更新設定があり、一部のコンピューターは手動更新に設定されています。Windows Update を構成する必要があります。ソリューションは以下の要件を満たす必要があります。構成は一元管理する必要があります。インターネット トラフィックを最小限に抑える必要があります。コストを最小限に抑える必要があります。Windows Update をどのように構成すればよいでしょうか？回答するには、回答エリアから適切なオプションを選択してください。注: 正しい選択は 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image41.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image42.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 28,
    "question": "Windows 10 を実行し、Azure Log Analytics ワークスペースに接続しているコンピューターが 100 台あります。Log Analytics を使用して、これらのコンピューターから収集できる 3 種類のデータはどれですか。正解ごとに完全な解答が提示されます。注: 正解ごとに 1 ポイント獲得できます。",
    "choices": [
      {
        "letter": "A",
        "text": "セキュリティログからの失敗イベント"
      },
      {
        "letter": "B",
        "text": "プロセスとその実行時間のリスト"
      },
      {
        "letter": "C",
        "text": "平均プロセッサ使用率"
      },
      {
        "letter": "D",
        "text": "システムログからのエラーイベント そして。 サードパーティのアプリケーションログはテキストファイルとして保存されます"
      }
    ],
    "answer": "CDE",
    "images": []
  },
  {
    "id": 29,
    "question": "HOTSPOT - Microsoft Intune サブスクリプションをお持ちです。以下の図に示すように、Profile1 という名前の Windows Autopilot 展開プロファイルを作成しています。Profile1 は Windows 10 デバイスに展開されます。図に示されている情報に基づき、ドロップダウンメニューを使用して各文を完成させる選択肢を選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image64.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image65.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image66.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 30,
    "question": "会社では全ユーザーをWindows 10 Enterpriseに標準化しています。一部のユーザーは小売店で自分のコンピューターを購入します。コンピューターはWindows 10 Proを実行しています。コンピューターをWindows 10 Enterpriseにアップグレードし、Azure ADに参加させ、いくつかのMicrosoft Storeアプリをインストールするためのソリューションを推奨する必要があります。ソリューションは、以下の要件を満たす必要があります。ユーザーがインストールしたアプリケーションが保持されるようにする。ユーザーの介入を最小限に抑える。目標を達成するための最適な推奨事項は何ですか？複数の回答で目標を達成できます。最適な回答を選択してください。",
    "choices": [
      {
        "letter": "A",
        "text": "Windows オートパイロット"
      },
      {
        "letter": "B",
        "text": "Microsoft 展開ツールキット (MDT)"
      },
      {
        "letter": "C",
        "text": "Windows 構成デザイナーのプロビジョニング パッケージ"
      },
      {
        "letter": "D",
        "text": "Windows 展開サービス (WDS)"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 31,
    "question": "Windows 11対応デバイス「Device1」があり、64ビット版のWindows 10 Enterpriseが実行され、Microsoft Office 2019がインストールされています。以下の表に示すWindows 11 Enterpriseイメージがあります。Device1のインプレースアップグレードに使用できるイメージはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "画像1のみ"
      },
      {
        "letter": "B",
        "text": "画像2のみ"
      },
      {
        "letter": "C",
        "text": "画像1と画像2"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image108.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 32,
    "question": "HOTSPOT - Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションを所有しています。ネットワークには、Azure AD Connect を使用して Azure AD テナントと同期するオンプレミスの Active Directory ドメイン サービス (AD DS) ドメインが含まれています。デバイス管理には Microsoft Intune と Configuration Manager を使用しています。新しい Windows 11 デバイスの展開計画を推奨する必要があります。ソリューションは以下の要件を満たす必要があります。マーケティング部門のデバイスは、AD DS ドメインにのみ参加する必要があります。IT 部門は、デバイスをマーケティング部門のユーザーに配布する前に、ビルド時に複雑なアプリケーションをデバイスにインストールします。営業部門のデバイスは Azure AD に参加している必要があります。デバイスは製造元から営業部門のユーザーの自宅に直接発送されます。管理作業は最小限に抑える必要があります。各部門に推奨する展開方法はどれですか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択肢はそれぞれポイントに相当します。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image109.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image110.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 33,
    "question": "HOTSPOT - Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションを所有しています。デバイス管理には Microsoft Intune を使用しています。Azure AD に参加している Windows デバイスは、Intune に自動的に登録されます。次の表に示すデバイスを所有しています。これらのデバイスを Windows 11 にアップグレードする準備をしています。すべてのデバイスは Windows 11 と互換性があります。すべてのユーザー設定とアプリケーションを維持しながら、デバイスに Windows 11 Pro を実装するには、Windows Autopilot とインプレースアップグレードの展開方法を検討する必要があります。それぞれの方法でアップグレードできるデバイスはどれですか。回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image103.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image104.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image553.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 34,
    "question": "ドラッグ＆ドロップ - Windows 10 を実行しているコンピューターが 100 台あります。これらのコンピューターに Windows 11 をワイプ＆ロードインストールで展開する予定です。ユーザー設定とユーザーデータを保持する方法を推奨する必要があります。どの 3 つのアクションを順番に実行することを推奨しますか？回答するには、アクションリストから適切なアクションを回答エリアに移動し、正しい順序で並べ替えてください。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image106.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image107.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 35,
    "question": "Microsoft Intune サブスクリプションをお持ちです。以下の表に示すように、Intune に登録されているデバイスがあります。各デバイスには App1 というアプリがインストールされています。App1 を管理するために必要なアプリ構成ポリシーの最小数はいくつですか？",
    "choices": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "4 そして。 5"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image22.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 36,
    "question": "Microsoft 365 E5 サブスクリプションがあり、10 台の Android Enterprise デバイスが含まれています。各デバイスには会社所有の仕事用プロファイルがあり、Microsoft Intune に登録されています。キオスクモードで 1 つのアプリを実行するようにデバイスを構成する必要があります。デバイス制限プロファイルで変更する必要がある構成設定はどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "ユーザーとアカウント"
      },
      {
        "letter": "B",
        "text": "一般的な"
      },
      {
        "letter": "C",
        "text": "システムセキュリティ"
      },
      {
        "letter": "D",
        "text": "デバイスエクスペリエンス"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 37,
    "question": "Microsoft 365 E5 サブスクリプションをご利用です。このサブスクリプションには、Windows 11 を実行し、Microsoft Intune に登録されているコンピューターが 25 台含まれています。これらのデバイスを Microsoft Defender for Endpoint にオンボードする必要があります。Microsoft Intune 管理センターで作成すべきポリシーはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "攻撃面縮小（ASR）ポリシー"
      },
      {
        "letter": "B",
        "text": "セキュリティベースライン"
      },
      {
        "letter": "C",
        "text": "エンドポイント検出および対応（EDR）ポリシー"
      },
      {
        "letter": "D",
        "text": "アカウント保護ポリシー そして。 ウイルス対策ポリシー"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 38,
    "question": "Microsoft 365 E5 サブスクリプションと 25 台の Apple iPad を所有しています。Apple Configurator の登録方法を使用して、iPad を Microsoft Intune に登録する必要があります。まず何をすべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "MDM プッシュ証明書の適用を構成します。"
      },
      {
        "letter": "B",
        "text": "ユーザー アカウントをデバイス登録マネージャー (DEM) として追加します。"
      },
      {
        "letter": "C",
        "text": "登録制限を変更します。"
      },
      {
        "letter": "D",
        "text": "各 iPad のデバイス識別子を含むファイルをアップロードします。"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 39,
    "question": "会社では、デバイス管理に Microsoft Intune を使用しています。Android 仕事用プロファイルを使用する Android デバイスのみが Intune に登録できるようにする必要があります。デバイス登録の制限で実行する必要がある 2 つの構成はどれですか。正解はそれぞれソリューションの一部を示しています。注: 正解を選択するごとに 1 ポイント獲得できます。A. プラットフォーム設定から、Android デバイス管理者の個人所有をブロックに設定します。B. プラットフォーム設定から、Android Enterprise (仕事用プロファイル) を許可に設定します。C. プラットフォーム設定から、Android デバイス管理者の個人所有を許可に設定します。D. プラットフォーム設定から、Android デバイス管理者をブロックに設定します。推奨回答を表示 回答を非表示 推奨回答: BD 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "プラットフォーム設定から、Android デバイス管理者の個人所有をブロックに設定します。"
      },
      {
        "letter": "B",
        "text": "プラットフォーム設定から、Android Enterprise (仕事用プロファイル) を許可に設定します。"
      },
      {
        "letter": "C",
        "text": "プラットフォーム設定から、Android デバイス管理者の個人所有を許可に設定します。"
      },
      {
        "letter": "D",
        "text": "プラットフォーム設定から、Android デバイス管理者をブロックに設定します。"
      }
    ],
    "answer": "BD",
    "images": []
  },
  {
    "id": 40,
    "question": "HOTSPOT - Microsoft Intune に登録されている Windows 10 デバイスが 100 台あります。これらのデバイスが、インターネットとローカルネットワーク上の他のコンピューターから Windows 更新プログラムを取得できるように構成する必要があります。どの配信最適化設定を構成し、どの種類の Intune オブジェクトを作成する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択ごとに 1 ポイント獲得できます。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image35.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image36.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 41,
    "question": "ドラッグ＆ドロップ - MDT1という名前のMicrosoft Deployment Toolkit (MDT) サーバーがあります。コンピューターがLiteTouchPE_x64.isoイメージから起動し、MDT1に接続すると、下図のようにようこそ画面が表示されます。コンピューターがMDT1に接続したときに、ようこそ画面が表示されないようにする必要があります。3つの操作のうち、どの操作を順番に実行する必要がありますか？ 回答するには、操作リストから適切な操作を回答エリアに移動し、正しい順序に並べ替えてください。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image91.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image92.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image552.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 42,
    "question": "Microsoft Intune と Intune データ ウェアハウスを使用しています。データ ウェアハウスに保存されているデータを含むデバイス インベントリ レポートを作成する必要があります。レポートを作成するには、どのアプリを使用すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "企業ポータルアプリ"
      },
      {
        "letter": "B",
        "text": "エンドポイント分析"
      },
      {
        "letter": "C",
        "text": "Azureポータルアプリ"
      },
      {
        "letter": "D",
        "text": "マイクロソフト パワーBI"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 43,
    "question": "HOTSPOT - Microsoft Intune を使用する Microsoft 365 E5 サブスクリプションを所有しています。次の表に示す Windows 11 デバイスを所有しています。図表に示すデバイス コンプライアンス ポリシーを展開しています。(図表タブをクリックしてください。) 以下の各項目について、該当する場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正解は 1 点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image46.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image47.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image48.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image49.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 44,
    "question": "ドラッグ＆ドロップ - 次の表に示すデバイスを含むMicrosoft 365サブスクリプションをお持ちです。信頼できるファームウェアまたはオペレーティングシステムビルドを実行しているデバイスのみがネットワークリソースにアクセスできるようにする必要があります。各デバイスに対して、どのコンプライアンスポリシー設定を構成する必要がありますか？回答するには、適切な設定を正しいデバイスにドラッグしてください。各設定は、1回、複数回、またはまったく使用しない場合があります。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注：正しい選択ごとに1ポイントが加算されます。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image50.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image51.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image52.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 45,
    "question": "ドラッグ＆ドロップ - Microsoft Intune に登録された 1,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションを所有しています。デバイスの BIOS バージョンを検証するためのコンプライアンス ポリシーを作成し、その結果を監視する予定です。4 つのアクションのうち、どのアクションを順番に実行する必要がありますか？ 回答するには、アクション リストから適切なアクションを回答エリアに移動し、正しい順序に並べ替えてください。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image53.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image54.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 46,
    "question": "HOTSPOT - contoso.com という Azure AD テナントがあります。次の表に示すデバイスがあります。Azure AD に参加できるデバイスと、contoso.com に登録できるデバイスはどれですか？回答するには、回答エリアで適切な選択肢を選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image57.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image58.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image59.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 47,
    "question": "Windows Admin Center を使用して、Windows 10 を実行しているコンピューターをリモートで管理します。Windows Admin Center に接続すると、次の図に示すメッセージが表示されます。Windows Admin Center への接続時にこのメッセージが表示されないようにする必要があります。どの証明書ストアに証明書をインポートすればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "クライアント認証発行者"
      },
      {
        "letter": "B",
        "text": "個人的"
      },
      {
        "letter": "C",
        "text": "信頼されたルート証明機関"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image94.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 48,
    "question": "HOTSPOT - 次の表に示すデバイスを含むcontoso.comというAzure ADテナントがあります。Contoso.comには、次の表に示すAzure ADグループが含まれています。Windows Autopilot展開プロファイルを追加します。プロファイルは、次の図に示すように構成されています。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択は1点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image95.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image96.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image97.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image98.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image99.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 49,
    "question": "Server1 というオンプレミスサーバーがあり、MDT1 という Microsoft Deployment Toolkit (MDT) 展開共有をホストしています。MDT1 がマルチキャスト展開をサポートしていることを確認する必要があります。Server1 にインストールすべきものは何ですか？",
    "choices": [
      {
        "letter": "A",
        "text": "マルチパスI/O (MPIO)"
      },
      {
        "letter": "B",
        "text": "マルチポイントコネクタ"
      },
      {
        "letter": "C",
        "text": "Windows 展開サービス (WDS)"
      },
      {
        "letter": "D",
        "text": "Windows Server 更新サービス (WSUS)"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 50,
    "question": "HOTSPOT - Server1というサーバーと、Windows 10を実行するコンピューターが複数台あります。Server1にはMicrosoft Deployment Toolkit（MDT）がインストールされています。MDT展開ウィザードを使用して、Windows 10コンピューターをWindows 11にアップグレードする予定です。Server1に展開共有を作成する必要があります。Server1で何をすべきでしょうか？また、MDT展開共有に追加する必要がある最小限のコンポーネントは何でしょうか？回答するには、回答エリアから適切なオプションを選択してください。注：正解は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image89.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image90.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 51,
    "question": "HOTSPOT - すべてのユーザーにMicrosoft 365アプリが展開されています。以下の要件を満たすようにMicrosoft 365アプリを構成する必要があります。WebView2ランタイムの自動インストールを有効にする。ユーザーがフィードバックを送信できないようにする。Microsoft 365アプリ管理センターで構成する必要がある2つの設定はどれですか？回答するには、回答エリアで適切な設定を選択してください。注：正解は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image23.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image24.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 52,
    "question": "HOTSPOT - ケース スタディ - 概要 - Contoso, Ltd. は、モントリオールに本社があり、シアトルとニューヨークに 2 つの支社があるコンサルティング会社です。Contoso には、次の表に示すようなユーザーとコンピューターが存在します。同社には、IT、人事 (HR)、法務 (LEG)、マーケティング (MKG)、財務 (FIN) の各部門があります。Contoso は最近、Microsoft 365 サブスクリプションを購入しました。同社はフェニックスに新しい支社を開設する予定です。フェニックス オフィスのユーザーのほとんどは自宅で仕事をします。既存の環境 - ネットワークには、Azure AD に同期されている contoso.com という名前の Active Directory ドメインが含まれています。すべてのメンバー サーバーは Windows Server 2016 を実行しています。すべてのノート PC とデスクトップ コンピューターは Windows 10 Enterprise を実行しています。コンピューターは、Microsoft Configuration Manager を使用して管理されています。モバイル デバイスは、Microsoft Intune を使用して管理されています。コンピューターの命名規則は、部門の頭字語、ハイフン、4 つの数字の順です (例: FIN-6785)。各部門には、Computers という子 OU を含む組織単位 (OU) があります。各コンピューター アカウントは、それぞれの部門の Computers OU にあります。Intune 構成 - ドメインには、次の表に示すユーザーがいます。User2 は、Intune のデバイス登録マネージャー (DEM) です。Intune に登録されているデバイスは次の表に示されています。Intune のデバイス コンプライアンス ポリシーは、次の表に示すように構成されています。デバイス コンプライアンス ポリシーには、次の表に示す割り当てがあります。Intune のデバイス制限制約は、次の表に示すように構成されています。要件 - 計画されている変更 - Contoso は次の変更を実装する予定です。 • フェニックス オフィスのユーザーに新しいコンピューターを提供します。新しいコンピューターには Windows 10 Pro がプレインストールされており、購入済みです。 • コンピューターの共同管理を実装します。技術要件 - Contoso は次の技術要件を満たす必要があります。 • Group4 というグループ内のユーザーは、Intune に登録されているデバイスからのみ Microsoft Exchange Online にアクセスできることを確認します• 人事部門の新しいコンピューター用のプロビジョニングパッケージを作成します。• iOSデバイスからの診断データと使用状況テレメトリデータの送信をブロックします。• 可能な限り最小権限の原則を適用します。• MKG部門のユーザーがApp1を使用できるようにします。• IT部門の共同管理を試験的に実施します。User1とUser2がIntuneに登録できるデバイスの最大数はいくつですか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image111.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image112.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image113.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image114.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image115.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image116.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image119.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image554.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 53,
    "question": "ケース スタディ - 概要 - Contoso, Ltd. は、モントリオールに本社があり、シアトルとニューヨークに 2 つの支社があるコンサルティング会社です。Contoso には、次の表に示すようなユーザーとコンピューターが存在します。同社には、IT、人事 (HR)、法務 (LEG)、マーケティング (MKG)、財務 (FIN) の各部門があります。Contoso は最近、Microsoft 365 サブスクリプションを購入しました。同社はフェニックスに新しい支社を開設する予定です。フェニックス オフィスのユーザーのほとんどは自宅で仕事をします。既存の環境 - ネットワークには、Azure AD に同期されている contoso.com という名前の Active Directory ドメインが含まれています。すべてのメンバー サーバーは Windows Server 2016 を実行しています。すべてのノート PC とデスクトップ コンピューターは Windows 10 Enterprise を実行しています。コンピューターは、Microsoft Configuration Manager を使用して管理されています。モバイル デバイスは、Microsoft Intune を使用して管理されています。コンピューターの命名規則は、部門の頭字語、ハイフン、4 つの数字 (例: FIN-6785) です。各部門には、Computers という子 OU を含む組織単位 (OU) があります。各コンピューター アカウントは、それぞれの部門の Computers OU にあります。Intune 構成 - ドメインには、次の表に示すユーザーがいます。User2 は、Intune のデバイス登録マネージャー (DEM) です。Intune に登録されているデバイスは次の表に示されています。Intune のデバイス コンプライアンス ポリシーは、次の表に示すように構成されています。デバイス コンプライアンス ポリシーには、次の表に示す割り当てがあります。Intune のデバイス制限制約は、次の表に示すように構成されています。要件 - 計画されている変更 - Contoso は次の変更を実装する予定です。 • フェニックス オフィスのユーザーに新しいコンピューターを提供します。新しいコンピューターには Windows 10 Pro がプレインストールされており、購入済みです。 • コンピューターの共同管理を実装します。技術要件 - Contoso は次の技術要件を満たす必要があります。 • Group4 というグループ内のユーザーは、Intune に登録されているデバイスからのみ Microsoft Exchange Online にアクセスできることを確認します• 人事部門の新しいコンピューター用のプロビジョニングパッケージを作成します。• iOSデバイスが診断データと使用状況テレメトリデータを送信しないようにブロックします。• 可能な限り最小権限の原則を適用します。• MKG部門のユーザーがApp1を使用できるようにします。• IT部門の共同管理を試験的に実施します。iOSデバイスの技術要件を満たす必要があります。Intuneでどのオブジェクトを作成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "展開プロファイル"
      },
      {
        "letter": "B",
        "text": "アプリ保護ポリシー"
      },
      {
        "letter": "C",
        "text": "デバイス構成プロファイル"
      },
      {
        "letter": "D",
        "text": "コンプライアンスポリシー"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image111.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image112.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image113.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image114.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image115.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image116.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 54,
    "question": "HOTSPOT - Microsoft Intune を使用する Microsoft 365 サブスクリプションがあり、次の表に示すユーザーが含まれています。Group2 は登録ステータス ページで割り当てられています。次の表に示すデバイスがあります。マーケティング部門のデバイスのハードウェア ID を取得してアップロードします。Windows Autopilot を構成します。以下の各項目について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい回答はそれぞれ 1 点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image134.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image135.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image136.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image137.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 55,
    "question": "500台のAndroid Enterpriseデバイスを含むMicrosoft 365サブスクリプションを所有しています。すべてのデバイスはMicrosoft Intuneに登録されています。デバイスのChromeブラウザにブックマークを配信する必要があります。何を作成すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "コンプライアンスポリシー"
      },
      {
        "letter": "B",
        "text": "構成プロファイル"
      },
      {
        "letter": "C",
        "text": "アプリ保護ポリシー"
      },
      {
        "letter": "D",
        "text": "アプリ構成ポリシー"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 56,
    "question": "次の表に示すデバイスを含むAzure ADテナントがあります。サブスクリプションのアクティベーションを使用してアクティベートできるデバイスはどれですか？ A. デバイス1のみ B. デバイス1とデバイス2のみ C. デバイス1とデバイス3のみ D. デバイス1、デバイス2、デバイス3、デバイス4 推奨回答を表示 回答を非表示 推奨回答: C 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image123.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 57,
    "question": "Windows 10 Pro を実行しているコンピューターが 25 台あります。Microsoft Intune を使用する Microsoft 365 E5 サブスクリプションを所有しています。これらのコンピューターをインプレースアップグレードで Windows 11 Enterprise にアップグレードする必要があります。このソリューションでは、管理作業を最小限に抑える必要があります。どのようなソリューションを使用すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Deployment Toolkit (MDT) と Windows 11 Enterprise のデフォルトイメージ"
      },
      {
        "letter": "B",
        "text": "Microsoft Configuration Manager と Windows 11 Enterprise のカスタム イメージ"
      },
      {
        "letter": "C",
        "text": "Windows オートパイロット"
      },
      {
        "letter": "D",
        "text": "サブスクリプションのアクティベーション"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 58,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションをご利用です。デバイス管理には Microsoft Intune を使用しています。管理対象の Windows 11 デバイスの起動パフォーマンスがキャプチャされ、Intune 管理センターで確認できるようにする必要があります。何を構成すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Azure Monitorエージェント"
      },
      {
        "letter": "B",
        "text": "デバイスコンプライアンスポリシー"
      },
      {
        "letter": "C",
        "text": "条件付きアクセスポリシー"
      },
      {
        "letter": "D",
        "text": "Intune データ収集ポリシー"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 59,
    "question": "次の表に示すリソースを含むMicrosoft Intune展開があります。Set1というポリシーセットを作成し、Set1にComply1を追加します。Set1に追加できるリソースはどれですか？A. Conf1のみ B. Comply2のみ C. Comply2とConf1のみ D. CA1、Conf1、Office1のみ E. Comply2、CA1、Conf1、Office1 推奨回答を表示 回答を非表示 推奨回答: C 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "Conf1のみ"
      },
      {
        "letter": "B",
        "text": "Comply2のみ"
      },
      {
        "letter": "C",
        "text": "Comply2とConf1のみ"
      },
      {
        "letter": "D",
        "text": "CA1、Conf1、Office1のみ そして。 Comply2、CA1、Conf1、および Office1"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image151.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 60,
    "question": "Windows 10 を実行するコンピューターを保護するために、Microsoft Defender for Endpoint を使用しています。Microsoft Defender for Endpoint の構成と Microsoft 推奨構成ベースラインの違いを評価する必要があります。どのツールを使用すべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Defender for Endpoint Power BI アプリ"
      },
      {
        "letter": "B",
        "text": "マイクロソフト セキュア スコア"
      },
      {
        "letter": "C",
        "text": "エンドポイント分析"
      },
      {
        "letter": "D",
        "text": "Microsoft 365 Defender ポータル"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 61,
    "question": "Microsoft 365 サブスクリプションがあり、User1 というユーザーが Microsoft Intune Suite を使用しています。Microsoft Intune を使用して、Windows 11 を実行するデバイスを管理しています。User1 はマーケティング部門の 75 台のデバイスにリモートサポートを提供しています。マーケティング部門の各デバイスの Remote Desktop Users グループに User1 を追加する必要があります。何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "アプリ構成ポリシー"
      },
      {
        "letter": "B",
        "text": "デバイスコンプライアンスポリシー"
      },
      {
        "letter": "C",
        "text": "アカウント保護ポリシー"
      },
      {
        "letter": "D",
        "text": "デバイス構成プロファイル"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 62,
    "question": "Microsoft Intune を使用する Microsoft 365 テナントがあります。ポータル サイト アプリを使用して、公開済みアプリにアクセスし、登録済みデバイスにインストールします。Microsoft Intune 管理センターから Microsoft Store アプリを追加します。ポータル サイトに表示されるアプリ情報の種類は次のうちどれですか？ 注: 正解は 1 点です。",
    "choices": [
      {
        "letter": "A",
        "text": "プライバシーURL"
      },
      {
        "letter": "B",
        "text": "情報URL"
      },
      {
        "letter": "C",
        "text": "開発者"
      },
      {
        "letter": "D",
        "text": "所有者"
      }
    ],
    "answer": "AB",
    "images": []
  },
  {
    "id": 63,
    "question": "Microsoft Intuneに登録されているデバイスが100台含まれているMicrosoft 365サブスクリプションを所有しています。起動プロセスと各デバイスの再起動頻度を確認する必要があります。どのツールを使用すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "エンドポイント分析"
      },
      {
        "letter": "B",
        "text": "デバイス管理"
      },
      {
        "letter": "C",
        "text": "Azure モニター"
      },
      {
        "letter": "D",
        "text": "Intune データ ウェアハウス"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 64,
    "question": "Microsoft 365 テナントがあります。デバイスは Microsoft Intune に登録されています。Policy1 という条件付きアクセス ポリシーを Group1 というグループに割り当てます。Policy1 は、非準拠とマークされたデバイスからの Microsoft OneDrive for Business へのアクセスを制限します。OneDrive for Business にアクセスしようとしている非準拠デバイスを特定する必要があります。どうすればよいでしょうか。",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Entra 管理センターから、条件付きアクセスの分析情報とレポートのブックを確認します。"
      },
      {
        "letter": "B",
        "text": "Microsoft Intune 管理センターから、デバイス コンプライアンス レポートを確認します。"
      },
      {
        "letter": "C",
        "text": "Microsoft Intune 管理センターから、非準拠デバイス レポートを確認します。"
      },
      {
        "letter": "D",
        "text": "Microsoft Intune 管理センターから、設定のコンプライアンス レポートを確認します。"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 65,
    "question": "ネットワークにActive Directoryドメインがあります。このドメインにはWindows 10を実行するコンピューターが2,000台あります。Azure ADとMicrosoft Intuneのハイブリッドを実装します。既存のすべてのコンピューターをAzure ADに自動的に登録し、Intuneに登録する必要があります。このソリューションは管理作業を最小限に抑える必要があります。何を使用すべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "自動検出アドレスレコード"
      },
      {
        "letter": "B",
        "text": "グループポリシーオブジェクト（GPO）"
      },
      {
        "letter": "C",
        "text": "自動検出サービス接続ポイント (SCP)"
      },
      {
        "letter": "D",
        "text": "Windows Autopilot 展開プロファイル"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 66,
    "question": "HOTSPOT - ネットワークには、Azure AD テナントと同期するオンプレミスの Active Directory ドメイン サービス (AD DS) ドメインが含まれています。テナントには、次の表に示すユーザーが含まれています。Windows 10/11 Enterprise E5 ライセンスを Group1 と User2 に割り当てます。次の表に示すデバイスを展開します。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image124.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image125.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image126.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image555.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 67,
    "question": "次の表に示す仮想マシンを含むHyper-Vホストがあります。Windows 11をインストールできる仮想マシンはどれですか？ A. VM1のみ B. VM3のみ C. VM1とVM2のみ D. VM2とVM3のみ E. VM1、VM2、VM3 推奨回答を表示 回答を隠す 推奨回答: B 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "VM1のみ"
      },
      {
        "letter": "B",
        "text": "VM3のみ"
      },
      {
        "letter": "C",
        "text": "VM1とVM2のみ"
      },
      {
        "letter": "D",
        "text": "VM2とVM3のみ そして。 VM1、VM2、VM3"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image133.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 68,
    "question": "Microsoft Intune に登録されている 1,000 台の Windows 11 デバイスを含む Microsoft 365 サブスクリプションを所有しています。Intune を使用して、複数のインストール ファイルを含む App1 というアプリケーションを展開する予定です。まず何をすべきでしょうか? A. Microsoft Win32 コンテンツ準備ツールを使用して、App1 のコンテンツを準備します。B. Android アプリケーション パッケージ (APK) を作成します。C. App1 のコンテンツを Intune にアップロードします。D. Microsoft 展開ツールキット (MDT) をインストールします。 推奨回答を表示 回答を非表示 推奨回答: A 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Win32 コンテンツ準備ツールを使用して、App1 のコンテンツを準備します。"
      },
      {
        "letter": "B",
        "text": "Android アプリケーション パッケージ (APK) を作成します。"
      },
      {
        "letter": "C",
        "text": "App1 のコンテンツを Intune にアップロードします。"
      },
      {
        "letter": "D",
        "text": "Microsoft Deployment Toolkit (MDT) をインストールします。"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 69,
    "question": "Microsoft 365 サブスクリプションをご利用です。すべてのデバイスで Windows 10 が稼働しています。ユーザーが Windows Insider Program にデバイスを登録できないようにする必要があります。Microsoft Intune 管理センターから実行する必要がある 2 つの構成は何ですか？ 正解はそれぞれ完全なソリューションです。注: 正解はそれぞれ 1 ポイントです。",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス制限デバイス構成プロファイル"
      },
      {
        "letter": "B",
        "text": "アプリ構成ポリシー"
      },
      {
        "letter": "C",
        "text": "Windows 10以降のセキュリティベースライン"
      },
      {
        "letter": "D",
        "text": "カスタムデバイス構成プロファイル そして。 Windows 10以降のアップデートリング"
      }
    ],
    "answer": "AE",
    "images": []
  },
  {
    "id": 70,
    "question": "HOTSPOT - contoso.com という Azure AD テナントがあり、User1 というユーザーがいます。User1 のユーザープリンシパル名 (UPN) は [email protected] です。Client1 という Windows 11 デバイスを contoso.com に参加させています。User1 を Client1 のローカル Administrators グループに追加する必要があります。コマンドをどのように実行すればよいですか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image167.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image557.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 71,
    "question": "会社ではMicrosoft Intuneを使用しています。500台以上のAndroidおよびiOSデバイスがIntuneテナントに登録されています。新しいIntuneポリシーを展開する予定です。デバイスにインストールされているAndroidまたはiOSのバージョンに応じて、異なるポリシーが適用されます。ポリシーがAndroidまたはiOSのバージョンに基づいてデバイスをターゲットにできることを確認する必要があります。最初に何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "Azure AD で動的なメンバーシップ ルールを持つグループ"
      },
      {
        "letter": "B",
        "text": "Intune のデバイス カテゴリ"
      },
      {
        "letter": "C",
        "text": "Intune の企業デバイス識別子"
      },
      {
        "letter": "D",
        "text": "Azure AD のデバイス設定"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 72,
    "question": "ドラッグ アンド ドロップ - Microsoft Intune に 500 台の Windows 10 デバイスが登録されています。Microsoft Intune の Exploit Protection を使用して、デバイスで次のシステム設定を有効にする予定です。 • データ実行防止 (DEP) • イメージのランダム化を強制する (必須の ASLR) テンプレート ファイルの作成に使用する Windows 10 デバイスを構成する必要があります。テンプレート ファイルを作成する前に、Windows セキュリティ アプリでデバイスのどの保護領域を構成する必要がありますか。回答するには、適切な保護領域を正しい設定にドラッグします。各保護領域は、1 回、複数回、またはまったく使用しないことができます。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正しい選択ごとに 1 ポイントが与えられます。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image154.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image155.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 73,
    "question": "HOTSPOT - 次のデバイス コンプライアンス ポリシー設定を持つ Microsoft Intune サブスクリプションがあります。 • コンプライアンス ポリシーが割り当てられていないデバイスを次のようにマークする: 準拠 • コンプライアンス ステータスの有効期間 (日数): 14 1 月 1 日に、次の表に示すように Windows 10 デバイスを Intune に登録します。 1 月 4 日に、次の 2 つのデバイス コンプライアンス ポリシーを作成します。 • 名前: Policy1 • プラットフォーム: Windows 10 以降 • BitLocker が必要: 必要 • デバイスを非準拠としてマーク: 非準拠の 5 日後 • スコープ (タグ): タグ 1 • 名前: Policy2 • プラットフォーム: Windows 10 以降 • ファイアウォール: 必要 • デバイスを非準拠としてマーク: 即時 • スコープ (タグ): タグ 2 1 月 5 日に、Policy1 と Policy2 を Group1 に割り当てます。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image158.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image159.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image160.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 74,
    "question": "HOTSPOT - Microsoft Intune を含む Microsoft 365 サブスクリプションを所有しています。次の表に示すように、Windows 11 を実行するコンピューターを所有しています。次の表に示すグループがあります。次の表に示すコンプライアンス ポリシーを作成して割り当てます。翌日、コンピューターのコンプライアンス状態を確認します。以下の各項目について、該当する場合は「はい」を選択します。そうでない場合は「いいえ」を選択します。注: 正解は 1 点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image161.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image162.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image163.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image164.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image556.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 75,
    "question": "次の表に示すオブジェクトを含む Microsoft 365 テナントがあります。Compliance1 というコンプライアンスポリシーを作成しています。コンプライアンス違反通知の追加受信者として、Compliance1 で指定できるオブジェクトはどれですか？ A. Group3 と Group4 のみ B. Group3、Group4、Admin1 のみ C. Group1、Group2、Group3 のみ D. Group1、Group2、Group3、Group4 のみ E. Group1、Group2、Group3、Group4、Admin1 推奨回答を表示 回答を非表示 推奨回答: C 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "グループ3とグループ4のみ"
      },
      {
        "letter": "B",
        "text": "グループ3、グループ4、および管理者1のみ"
      },
      {
        "letter": "C",
        "text": "グループ1、グループ2、グループ3のみ"
      },
      {
        "letter": "D",
        "text": "グループ1、グループ2、グループ3、グループ4のみ そして。 グループ1、グループ2、グループ3、グループ4、および管理者1"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image166.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 76,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションをご利用です。デバイス管理には Microsoft Intune を使用しています。以下の表に示すデバイスを所有しています。サブスクリプションのライセンス認証によって Windows 11 Enterprise に変更できるデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス3のみ"
      },
      {
        "letter": "B",
        "text": "デバイス2とデバイス3のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image180.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 77,
    "question": "質問番号: 77 - Microsoft 365 サブスクリプションがあり、User1 というユーザーがいます。User1 には Windows 10/11 Enterprise E3 ライセンスが割り当てられています。デバイス管理には Microsoft Intune Suite を使用しています。User1 は以下のデバイスをアクティベートします。 • デバイス1: Windows 11 Enterprise • デバイス2: Windows 10 Enterprise • デバイス3: Windows 11 Enterprise User1 はあと何台のデバイスをアクティベートできますか?",
    "choices": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "7"
      },
      {
        "letter": "D",
        "text": "8"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 78,
    "question": "会社では、Azure AD、Microsoft 365、Microsoft Intune、Azure Information Protection を実装しています。会社のセキュリティ ポリシーには、次の内容が記載されています。 • 個人用デバイスを Intune に登録する必要はありません。 • ユーザーは、会社のメール データにアクセスする前に PIN を使用して認証する必要があります。 • ユーザーは、個人の iOS デバイスや Android デバイスを使用して、会社のクラウド サービスにアクセスできます。 • ユーザーが、Microsoft OneDrive for Business 以外のクラウド ストレージ サービスに会社のメール データをコピーできないようにする必要があります。 セキュリティ ポリシーを適用するには、ソリューションを構成する必要があります。何を作成すればよいですか。",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Intune 管理センターからのデバイス構成プロファイル"
      },
      {
        "letter": "B",
        "text": "Microsoft Purview コンプライアンス ポータルからのデータ損失防止 (DLP) ポリシー"
      },
      {
        "letter": "C",
        "text": "Microsoft Purviewコンプライアンスポータルからの内部リスク管理ポリシー"
      },
      {
        "letter": "D",
        "text": "Microsoft Intune 管理センターからのアプリ保護ポリシー"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 79,
    "question": "Microsoft 365 E5 サブスクリプションと、Windows 10 を実行するコンピューター 100 台を所有しています。Microsoft Office 展開ツール (ODT) を使用して、これらのコンピューターに Microsoft Office Professional Plus 2019 を展開する必要があります。ODT 用のカスタマイズファイルを作成するには、どのツールを使用すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft 365 管理センター"
      },
      {
        "letter": "B",
        "text": "Microsoft Intune 管理センター"
      },
      {
        "letter": "C",
        "text": "Microsoft Purviewコンプライアンスポータル"
      },
      {
        "letter": "D",
        "text": "Microsoft 365 アプリ管理センター"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 80,
    "question": "Microsoft Intune に登録されている 100 台の Windows 10 デバイスを含む Microsoft 365 E5 サブスクリプションを所有しています。エンドポイント分析を使用する予定です。ベースライン メトリックを作成する必要があります。まず何をすべきでしょうか?",
    "choices": [
      {
        "letter": "A",
        "text": "ベースライン回帰しきい値を変更します。"
      },
      {
        "letter": "B",
        "text": "エンドポイント分析に 10 台のデバイスをオンボードします。"
      },
      {
        "letter": "C",
        "text": "Log Analytics ワークスペースを作成します。"
      },
      {
        "letter": "D",
        "text": "Azure Monitor ブックを作成します。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 81,
    "question": "50台のWindows 10デバイスを含むAzure ADのハイブリッド展開があります。すべてのデバイスはMicrosoft Intuneに登録されています。グループポリシー設定がMicrosoft Intuneポリシーで構成されている設定をオーバーライドしていることがわかりました。Microsoft Intuneで構成されている設定がグループポリシー設定をオーバーライドするようにする必要があります。どうすればよいでしょうか？A. グループポリシー管理エディターから、既定のドメインポリシーでコンピューターの構成設定を構成します。B. Microsoft Intune管理センターから、カスタムデバイスプロファイルを作成します。C. Microsoft Intune管理センターから、管理用テンプレートデバイスプロファイルを作成します。D. グループポリシー管理エディターから、既定のドメインポリシーでユーザーの構成設定を構成します。回答を表示 回答を非表示 回答の候補: B 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "グループ ポリシー管理エディターから、既定のドメイン ポリシーのコンピューターの構成設定を構成します。"
      },
      {
        "letter": "B",
        "text": "Microsoft Intune 管理センターから、カスタム デバイス プロファイルを作成します。"
      },
      {
        "letter": "C",
        "text": "Microsoft Intune 管理センターから、管理テンプレートのデバイス プロファイルを作成します。"
      },
      {
        "letter": "D",
        "text": "グループ ポリシー管理エディターから、既定のドメイン ポリシーのユーザー構成設定を構成します。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 82,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションをご利用です。Windows 11 デバイスの管理には Microsoft Intune を使用しています。ユーザーに番号照合を要求するパスワードレス認証を実装する必要があります。どの認証方法を使用すべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft 認証システム"
      },
      {
        "letter": "B",
        "text": "音声通話"
      },
      {
        "letter": "C",
        "text": "FIDO2 セキュリティキー"
      },
      {
        "letter": "D",
        "text": "テキストメッセージ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 83,
    "question": "Microsoft 365 サブスクリプションをお持ちです。ユーザーにセキュリティの既定値の設定と条件付きアクセスポリシーの作成権限を与える必要があります。このソリューションでは、最小権限の原則を適用する必要があります。ユーザーに割り当てるロールはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "グローバル管理者"
      },
      {
        "letter": "B",
        "text": "条件付きアクセス管理者"
      },
      {
        "letter": "C",
        "text": "セキュリティ管理者"
      },
      {
        "letter": "D",
        "text": "Intune 管理者"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 84,
    "question": "Microsoft Intune を使用する Microsoft 365 サブスクリプションがあります。新しい Windows 11 Pro デバイスが 5 台あります。企業での使用に向けてデバイスを準備する必要があります。ソリューションは、次の要件を満たす必要があります。• 各デバイスに Windows 11 Enterprise をインストールします。• 各デバイスに App1 という名前の Windows インストーラー (MSI) パッケージをインストールします。• App1 に必要な Certificate1 という名前の証明書を追加します。• 各デバイスを Azure AD に参加させます。3 つのプロビジョニング オプションのうち、どれを使用できますか? 正解ごとに完全なソリューションが提示されます。注: 正解を選択するごとに 1 ポイントが加算されます。",
    "choices": [
      {
        "letter": "A",
        "text": "サブスクリプションのアクティベーション"
      },
      {
        "letter": "B",
        "text": "カスタムWindowsイメージ"
      },
      {
        "letter": "C",
        "text": "インプレースアップグレード"
      },
      {
        "letter": "D",
        "text": "Windows オートパイロット そして。 プロビジョニングパッケージ"
      }
    ],
    "answer": "BDE",
    "images": []
  },
  {
    "id": 85,
    "question": "Windows 10 を実行し、Microsoft Intune を使用して管理されているコンピューターがあります。ユーザーは D:\\Folder1 というフォルダーにファイルを保存しています。信頼できるアプリケーションのみが D:\\Folder1 への書き込みアクセスを許可されるようにする必要があります。デバイス構成プロファイルでは何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Defender エクスプロイトガード"
      },
      {
        "letter": "B",
        "text": "Microsoft Defender アプリケーションガード"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender スマートスクリーン"
      },
      {
        "letter": "D",
        "text": "Microsoft Defender アプリケーション制御"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 86,
    "question": "HOTSPOT - Microsoft Intune に登録されている 100 台の Windows 10 デバイスを含む Microsoft 365 E5 サブスクリプションを所有しています。以下の要件を満たすエンドポイント セキュリティ ポリシーを作成する必要があります。• Windows セキュリティ アプリで「ファイアウォールとネットワーク保護」領域を非表示にする。• デバイスで Windows Hello for Business のプロビジョニングを無効にする。どの 2 種類のポリシーを使用すべきでしょうか？回答するには、回答領域でポリシーを選択してください。注: 正しい選択ごとに 1 ポイントが付与されます。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image195.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image196.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 87,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションを所有しています。デバイス管理には Microsoft Intune を使用しています。Intune の自動登録は設定済みです。ワークグループに 100 台の Windows 11 デバイスがあります。これらのデバイスを社内ワイヤレス ネットワークに接続し、100 台の新しい Windows 11 デバイスを Intune に登録する必要があります。どの方法を使用すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "プロビジョニングパッケージ"
      },
      {
        "letter": "B",
        "text": "グループポリシーオブジェクト（GPO）"
      },
      {
        "letter": "C",
        "text": "モバイルデバイス管理（MDM）自動登録"
      },
      {
        "letter": "D",
        "text": "デバイス構成ポリシー"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 88,
    "question": "次の表に示すデバイスを含むAzure ADテナントがあります。Windows 11 Enterprise E5ライセンスを購入しました。サブスクリプションのアクティベーションを使用してWindows 11 Enterpriseにアップグレードできるデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image191.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 89,
    "question": "ネットワークにActive Directoryドメインが含まれています。このドメインには、Windows 11を実行するComputer1というコンピューターが含まれています。Computer1でWindowsリモート管理（WinRM）サービスを有効にし、以下の構成を行う必要があります。• WinRMサービスのスタートアップの種類を自動に設定します。• 任意のIPアドレスからの要求を受け入れるリスナーを作成します。• WS-Management通信に対してファイアウォールの例外を有効にします。どのPowerShellコマンドレットを使用すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "接続-WSMan"
      },
      {
        "letter": "B",
        "text": "PSRemoting を有効にする"
      },
      {
        "letter": "C",
        "text": "呼び出し-WSManAction"
      },
      {
        "letter": "D",
        "text": "Enable-PSSessionConfiguration"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 90,
    "question": "ホットスポット - ネットワークには、adatum.com という Active Directory ドメイン、ワークグループ、そして Windows 10 を実行するコンピューターが含まれています。コンピューターの構成は次の表のようになっています。コンピューター 1、コンピューター 2、コンピューター 3 のローカル管理者アカウントは、同じユーザー名とパスワードを持っています。コンピューター 1 では、Windows Defender ファイアウォールが次の図のように構成されています。コンピューター 1 のサービスの状態は次のようになっています。以下の各項目について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正解は 1 点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image128.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image129.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image130.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image131.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image132.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 91,
    "question": "Windows 10 を実行しているコンピューターに機能更新プログラムをインストールしました。更新プログラムをロールバックできる日数はどのくらいですか?",
    "choices": [
      {
        "letter": "A",
        "text": "5"
      },
      {
        "letter": "B",
        "text": "10"
      },
      {
        "letter": "C",
        "text": "14"
      },
      {
        "letter": "D",
        "text": "30"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 92,
    "question": "Azure Log Analytics ワークスペースを含む Microsoft Azure サブスクリプションがあります。Windows 10 を実行する Computer1 という新しいコンピューターを展開します。Computer1 はワークグループに属しています。Log Analytics を使用して Computer1 のイベントをクエリできることを確認する必要があります。Computer1 で何をすべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Azure AD に参加します。"
      },
      {
        "letter": "B",
        "text": "Windows Defender ファイアウォールを構成します。"
      },
      {
        "letter": "C",
        "text": "イベントサブスクリプションを作成する"
      },
      {
        "letter": "D",
        "text": "Azure Monitor エージェントをインストールします。"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 93,
    "question": "Microsoft 365 E5 サブスクリプションと 100 台の管理されていない iPad デバイスがあります。特定の iOS アップデートをデバイスに展開する必要があります。ユーザーが iOS の最新バージョンを手動でインストールできないようにする必要があります。どの 2 つのアクションを実行する必要がありますか? 正解はそれぞれソリューションの一部を示しています。注: 正解はそれぞれ 1 ポイントです。A. デバイス構成プロファイルを作成します。B. Intune ポータル サイトを使用して、Microsoft Intune にデバイスを登録します。C. コンプライアンス ポリシーを作成します。D. iOS アプリ プロビジョニング プロファイルを作成します。E. Apple Business Manager を使用して、Microsoft Intune にデバイスを登録します。 推奨回答を表示 回答を非表示 推奨回答: AE 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス構成プロファイルを作成します。"
      },
      {
        "letter": "B",
        "text": "Intune ポータル サイトを使用して、デバイスを Microsoft Intune に登録します。"
      },
      {
        "letter": "C",
        "text": "コンプライアンス ポリシーを作成します。"
      },
      {
        "letter": "D",
        "text": "iOS アプリのプロビジョニング プロファイルを作成します。 そして。 Apple Business Manager を使用して、Microsoft Intune にデバイスを登録します。"
      }
    ],
    "answer": "AE",
    "images": []
  },
  {
    "id": 94,
    "question": "ドラッグ＆ドロップ - Microsoft 365 サブスクリプションがあり、User1 と User2 という 2 人のユーザーがいます。これらのユーザーが以下のタスクを実行できるようにする必要があります。• User1 はグループの作成とユーザーの管理が可能である必要があります。• User2 は管理者以外のユーザーのパスワードをリセットできる必要があります。このソリューションでは、最小権限の原則を適用する必要があります。各ユーザーにはどのロールを割り当てる必要がありますか？回答するには、適切なロールを正しいユーザーにドラッグしてください。各ロールは 1 回、複数回、またはまったく使用しないこともできます。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正しい選択ごとに 1 ポイントが与えられます。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image156.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image157.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 95,
    "question": "HOTSPOT - contoso.com という Azure AD テナントがあり、そこには次の表に示すユーザーが含まれています。contoso.com のモビリティ (MDM および MAM) 設定は以下のとおりです。• MDM ユーザー スコープ: Group1 • MAM ユーザー スコープ: Group2 次の表に示すデバイスを購入します。以下の各項目について、該当する場合は「はい」を選択してください。それ以外の場合は「いいえ」を選択してください。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image174.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image175.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image176.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image559.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 96,
    "question": "Windows 11 を実行している Computer1 というコンピューターがあります。User1 というユーザーがリモートデスクトップを使用して Computer1 に接続する予定です。リモートデスクトップ接続が確立され、サインインページが表示される前に、User1 のデバイスが認証されていることを確認する必要があります。Computer1 で何をすべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "評判に基づく保護を有効にする"
      },
      {
        "letter": "B",
        "text": "ネットワークレベル認証（NLA）を有効にする"
      },
      {
        "letter": "C",
        "text": "ネットワーク探索をオンにする"
      },
      {
        "letter": "D",
        "text": "リモート デスクトップ構成サービスを構成する"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 97,
    "question": "ドラッグ＆ドロップ - 会社にはWindows 10を実行するComputer1というコンピューターがあります。Computer1は退職したユーザーが使用していました。Computer1を別の用途に転用し、新しいユーザーに割り当てる予定です。Windows Autopilotを使用してComputer1を再展開する必要があります。3つの操作のうち、どの操作を順番に実行する必要がありますか？ 回答するには、アクションリストから適切な操作を回答エリアに移動し、正しい順序に並べ替えてください。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image138.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image139.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 98,
    "question": "contoso.com という Azure AD テナントがあります。Windows 11 を実行する Computer1 というワークグループコンピューターがあります。Computer1 を contoso.com に追加する必要があります。どのアプリを使うべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "dsregcmd.exe"
      },
      {
        "letter": "B",
        "text": "コンピュータ管理"
      },
      {
        "letter": "C",
        "text": "ネットドム.exe"
      },
      {
        "letter": "D",
        "text": "設定アプリ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 99,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。UpdateRing1 という更新リングがあり、次の設定が含まれています: • 自動更新の動作: スケジュールされた時間に自動的にインストールして再起動します • 自動動作の頻度: 月の第 1 週 • スケジュールされたインストール日: 火曜日 • スケジュールされたインストール時刻: 午前 3 時 Microsoft Intune 管理センターから、UpdateRing1 の機能更新プログラムの [アンインストール] を選択します。デバイスはいつ機能更新プログラムの削除を開始しますか?",
    "choices": [
      {
        "letter": "A",
        "text": "ユーザーがアンインストールを承認したとき"
      },
      {
        "letter": "B",
        "text": "保険証書を受け取ったらすぐに"
      },
      {
        "letter": "C",
        "text": "来週の火曜日"
      },
      {
        "letter": "D",
        "text": "翌月の第1火曜日"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 100,
    "question": "iOSデバイスを管理するためにMicrosoft Intuneサブスクリプションを使用しています。ジェイルブレイクされたiOSデバイスをブロックするデバイスコンプライアンスポリシーを構成します。拡張ジェイルブレイク検出を有効にする必要があります。何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "コンプライアンスポリシー設定"
      },
      {
        "letter": "B",
        "text": "デバイスコンプライアンスポリシー"
      },
      {
        "letter": "C",
        "text": "ネットワークの場所"
      },
      {
        "letter": "D",
        "text": "構成プロファイル"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 101,
    "question": "Windows 10 を実行しているコンピューター 2 台（コンピューター 1 とコンピューター 2）があります。コンピューター 2 ではリモートデスクトップが有効になっています。コンピューター 1 からリモートデスクトップ接続を使用してコンピューター 2 に接続します。リモートデスクトップセッション内からコンピューター 1 のローカルドライブにアクセスできることを確認する必要があります。どうすればよいでしょうか。A. コンピューター 2 からリモートデスクトップの設定を構成します。B. コンピューター 1 の Windows Defender ファイアウォールからリモートデスクトップを許可します。C. コンピューター 2 の Windows Defender ファイアウォールからファイルとプリンターの共有を許可します。D. コンピューター 1 からリモートデスクトップ接続の設定を構成します。回答を表示 回答を非表示 回答の候補: D 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "コンピュータ2から、リモート デスクトップ設定を構成します。"
      },
      {
        "letter": "B",
        "text": "Computer1 の Windows Defender ファイアウォールから、リモート デスクトップを許可します。"
      },
      {
        "letter": "C",
        "text": "コンピューター 2 の Windows Defender ファイアウォールから、ファイルとプリンターの共有を許可します。"
      },
      {
        "letter": "D",
        "text": "Computer1 から、リモート デスクトップ接続の設定を構成します。"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 102,
    "question": "Windows 11 Pro を実行しているコンピューターがあります。これらのコンピューターは Azure AD に参加しており、Microsoft Intune に登録されています。これらのコンピューターを Windows 11 Enterprise にアップグレードする必要があります。Intune で何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイスコンプライアンスポリシー"
      },
      {
        "letter": "B",
        "text": "デバイスのクリーンアップルール"
      },
      {
        "letter": "C",
        "text": "デバイス登録ポリシー"
      },
      {
        "letter": "D",
        "text": "デバイス構成プロファイル"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 103,
    "question": "次の表に示すデバイスを含むMicrosoft 365 E5サブスクリプションがあります。すべてのデバイスにMicrosoft Edgeがインストールされています。Microsoft Intune管理センターから、Edge1という名前のMicrosoft Edgeベースラインプロファイルを作成します。サポートされているすべてのデバイスにEdge1を適用する必要があります。どのデバイスにEdge1を適用する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1、デバイス2、デバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス4のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image202.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 104,
    "question": "HOTSPOT - Windows Autopilot 展開プロファイルを作成します。以下の要件を満たすようにプロファイル設定を構成する必要があります。• エンドユーザー認証を必要とせずに、新しいデバイスを自動的に登録し、システムアプリをプロビジョニングする • コンピューター名にハードウェアのシリアル番号を含める。どの 2 つの設定を構成する必要がありますか？回答するには、回答エリアで適切な設定を選択してください。注: 正しい選択ごとに 1 ポイントが付与されます。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image178.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image179.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 105,
    "question": "Microsoft 365 サブスクリプションを所有しています。Windows Autopilot を使用して 25 台の Windows 11 デバイスをプロビジョニングする予定です。Out-of-Box Experience (OOBE) 設定を構成する必要があります。Microsoft Intune 管理センターで作成すべきものは何ですか？",
    "choices": [
      {
        "letter": "A",
        "text": "登録ステータスページ（ESP）"
      },
      {
        "letter": "B",
        "text": "展開プロファイル"
      },
      {
        "letter": "C",
        "text": "コンプライアンスポリシー"
      },
      {
        "letter": "D",
        "text": "PowerShellスクリプト そして。 構成プロファイル"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 106,
    "question": "HOTSPOT - ネットワークにはadatum.comというActive Directoryドメインがあります。このドメインには、Windows 10を実行するComputer1とComputer2という2台のコンピューターが含まれています。Computer2ではリモートデスクトップが有効になっています。このドメインには、次の表に示すユーザーアカウントが含まれています。Computer2には、次の表に示すローカルグループが含まれています。Computer2の関連するユーザー権限の割り当ては次の表のとおりです。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注：正しい選択はそれぞれ1点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image181.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image182.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image183.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image184.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image185.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 107,
    "question": "ドラッグ＆ドロップ - オンプレミスのエンタープライズ証明機関 (CA) への PFX 証明書コネクタを使用するように構成された Microsoft Intune サブスクリプションがあります。Intune を使用して、公開キーペア (PKCS) 証明書を使用した Android デバイスの自動登録を構成する必要があります。3 つのアクションのうち、どのアクションを順番に実行する必要がありますか？ 回答するには、アクションリストから適切なアクションを回答エリアに移動し、正しい順序で並べ替えてください。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image152.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image153.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 108,
    "question": "HOTSPOT - Microsoft Intune には、次の表に示すデバイスコンプライアンスポリシーがあります。Intune のコンプライアンスポリシー設定は、次の図に示すように構成されています。6月1日に、次の表に示すように Windows 10 デバイスを Intune に登録します。以下の各項目について、該当する場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正解は1点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image169.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image170.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image171.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image172.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image558.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 109,
    "question": "Microsoft Intune を使用する Microsoft 365 サブスクリプションをご利用です。次の表に示すように、Intune にアプリを追加しています。Android Enterprise プラットフォーム用に、Policy1 というアプリ構成ポリシーを作成する必要があります。Policy1 を使用して管理できるアプリはどれですか?",
    "choices": [
      {
        "letter": "A",
        "text": "アプリ2のみ"
      },
      {
        "letter": "B",
        "text": "アプリ3のみ"
      },
      {
        "letter": "C",
        "text": "App1とApp3のみ"
      },
      {
        "letter": "D",
        "text": "App2とApp3のみ そして。 アプリ1、アプリ2、アプリ3"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image192.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 110,
    "question": "HOTSPOT - Windows 10 を実行するコンピューターが 200 台あります。これらのコンピューターは Azure AD に参加しており、Microsoft Intune に登録されています。壁紙とサインイン画面にカスタム画像を設定する必要があります。デバイス制限構成プロファイルで設定する必要がある 2 つの設定はどれですか？回答するには、回答エリアで適切な設定を選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image193.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image194.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 111,
    "question": "1,000台のWindows 11デバイスを含むMicrosoft 365 E5サブスクリプションを所有しています。すべてのデバイスはMicrosoft Intuneに登録されています。IntuneをMicrosoft Defender for Endpointと統合する予定です。IntuneとDefender for Endpointの間でサービス間接続を確立する必要があります。Microsoft Intune管理センターで構成する必要がある設定はどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "プレミアムアドオン"
      },
      {
        "letter": "B",
        "text": "コネクタとトークン"
      },
      {
        "letter": "C",
        "text": "入居者登録"
      },
      {
        "letter": "D",
        "text": "Microsoft トンネル ゲートウェイ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 112,
    "question": "以下の表に示すWindows 10デバイスを所有しています。これらのデバイスをWindows 11 Enterpriseにアップグレードする予定です。Windows 11 Enterpriseへの直接インプレースアップグレードを実行できるデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス3のみ"
      },
      {
        "letter": "B",
        "text": "デバイス3とデバイス4のみ"
      },
      {
        "letter": "C",
        "text": "デバイス2、デバイス3、デバイス4のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス3、デバイス4のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4のみ"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image238.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 113,
    "question": "HOTSPOT - ネットワークには、Azure AD と同期する contoso.com というオンプレミスの Active Directory ドメインが含まれています。User1 というユーザーは、次の表に示すドメイン参加デバイスを使用しています。Microsoft Entra 管理センターで、User1 に Windows 11 Enterprise E5 ライセンスを割り当てます。User1 が次にデバイスにサインインしたときに何が起こるかを特定する必要があります。各デバイスについて、どのようなことを特定する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image239.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image240.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image562.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 114,
    "question": "会社にはリモートデスクトップゲートウェイ（RDゲートウェイ）があります。Server1というサーバーがあり、RDゲートウェイ経由でリモートデスクトップサービス（RDS）を使用してアクセスできます。ゲートウェイ経由で接続するには、リモートデスクトップ接続を構成する必要があります。どの設定を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "どこからでも接続"
      },
      {
        "letter": "B",
        "text": "サーバー認証"
      },
      {
        "letter": "C",
        "text": "接続設定"
      },
      {
        "letter": "D",
        "text": "ローカルデバイスとリソース"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 115,
    "question": "Microsoft Deployment Toolkit (MDT) の展開共有があります。標準クライアントタスクシーケンステンプレートを使用して Windows 11 を展開する予定です。以下の操作を実行するために、タスクシーケンスを変更する必要があります。• Unified Extensible Firmware Interface (UEFI) をサポートするようにディスクをフォーマットする。• 回復パーティションを作成する。タスクシーケンスのどのフェーズを変更する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "プレインストール"
      },
      {
        "letter": "B",
        "text": "インストール後"
      },
      {
        "letter": "C",
        "text": "インストール"
      },
      {
        "letter": "D",
        "text": "初期化"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 116,
    "question": "ドラッグ＆ドロップ - ネットワークにActive Directoryドメインが含まれています。サーバーにMicrosoft Deployment Toolkit (MDT)をインストールしています。Windows 11のカスタムイメージがあります。MDTを使用して、このイメージを100台のデバイスに展開する必要があります。3つの操作のうち、どの操作を順番に実行する必要がありますか？ 回答するには、操作リストから適切な操作を回答エリアに移動し、正しい順序に並べ替えてください。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image247.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image248.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 117,
    "question": "ネットワークにはオンプレミスの Active Directory ドメインが含まれています。このドメインには、Windows 10 を実行する Computer1 と Computer2 という 2 台のコンピューターが含まれています。Computer1 に Windows Admin Center をインストールします。Windows Admin Center を使用して、Computer1 から Computer2 を管理する必要があります。Computer2 で何をすべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "TrustedHosts リストを更新します。"
      },
      {
        "letter": "B",
        "text": "Enable-PSRemoting コマンドレットを実行します。"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender ファイアウォールを介して Windows リモート管理 (WinRM) を許可します。"
      },
      {
        "letter": "D",
        "text": "受信 Microsoft Defender ファイアウォール ルールを追加します。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 118,
    "question": "HOTSPOT - You have a Microsoft 365 subscription that uses Microsoft Intune Suite. You use Microsoft Intune to manage devices. You plan to create Windows 11 device builds for the marketing and research departments. The solution must meet the requirements: • Marketing department devices must support Windows Update for Business. • Research department devices must have support for feature update versions for up to 36 months from release. What is the minimum Windows 11 edition required for each department? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image252.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image253.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 119,
    "question": "You have an Azure AD tenant named contoso.com. You plan to use Windows Autopilot to configure the Windows 10 devices shown in the following table. Which devices can be configured by using Windows Autopilot self-deploying mode?",
    "choices": [
      {
        "letter": "A",
        "text": "Device2 only"
      },
      {
        "letter": "B",
        "text": "Device3 only"
      },
      {
        "letter": "C",
        "text": "Device1 and Device3 only"
      },
      {
        "letter": "D",
        "text": "Device1, Device2, and Device3"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image254.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 120,
    "question": "You need to implement mobile device management (MDM) for personal devices that run Windows 11. The solution must meet the following requirements: • Ensure that you can manage the personal devices by using Microsoft Intune. • Ensure that users can access company data seamlessly from their personal devices. • Ensure that users can only sign in to their personal devices by using their personal account. What should you use to add the devices to Azure AD?",
    "choices": [
      {
        "letter": "A",
        "text": "Azure AD registered"
      },
      {
        "letter": "B",
        "text": "hybrid Azure AD join"
      },
      {
        "letter": "C",
        "text": "Azure AD joined"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 121,
    "question": "HOTSPOT - You have devices enrolled in Microsoft Intune as shown in the following table. Intune includes the device compliance policies shown in the following table. The device compliance policies has the assignments shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image265.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image266.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image267.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image268.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image269.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 122,
    "question": "contoso.com という Azure AD テナントがあります。ユーザーが Windows 11 デバイスを contoso.com に参加させた際に、ローカルの Administrators グループに自動的に追加されないようにする必要があります。何を構成すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Windows オートパイロット"
      },
      {
        "letter": "B",
        "text": "Windows 用のプロビジョニング パッケージ"
      },
      {
        "letter": "C",
        "text": "Azure AD のセキュリティのデフォルト"
      },
      {
        "letter": "D",
        "text": "Azure AD のデバイス設定"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 123,
    "question": "会社には、以下の表に示すように、Microsoft Intune に登録されているデバイスがあります。Microsoft Intune 管理センターで、会社のネットワークを Location1 という場所として定義しています。ネットワークの場所に基づくコンプライアンスポリシーを使用できるデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "D",
        "text": "デバイス2とデバイス3のみ そして。 デバイス1、デバイス2、デバイス3"
      }
    ],
    "answer": "E",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image275.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 124,
    "question": "Azureサブスクリプションがあります。オンプレミスのWindows 11デバイス「Device1」があります。Azure Monitorを使用してDevice1を監視する予定です。サブスクリプションに「DCR1」というデータ収集ルール（DCR）を作成します。DCR1を何に関連付けるべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Azure ネットワーク ウォッチャー"
      },
      {
        "letter": "B",
        "text": "デバイス1"
      },
      {
        "letter": "C",
        "text": "Log Analytics ワークスペース"
      },
      {
        "letter": "D",
        "text": "監視対象オブジェクト"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 125,
    "question": "Microsoft Intune に登録されている 100 台の iOS デバイスを含む Microsoft 365 E5 サブスクリプションがあります。iOS アップデートの通知が、アップデートのリリース後 30 日間延期されるようにする必要があります。何を作成すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "iOSアプリのプロビジョニングプロファイル"
      },
      {
        "letter": "B",
        "text": "デバイス機能テンプレートに基づくデバイス構成プロファイル"
      },
      {
        "letter": "C",
        "text": "iOS/iPadOSのアップデートポリシー"
      },
      {
        "letter": "D",
        "text": "デバイス制限テンプレートに基づくデバイス構成プロファイル"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 126,
    "question": "次の表に示すオブジェクトを含む Microsoft 365 テナントがあります。Microsoft Intune 管理センターで、App1 という名前の Microsoft 365 アプリを作成しています。App1 はどのオブジェクトに割り当てることができますか？ A. Group3 と Group4 のみ B. Admin1、Group3、Group4 のみ C. Group1、Group3、Group4 のみ D. Group1、Group2、Group3、Group4 のみ E. Admin1、Group1、Group2、Group3、Group4 推奨回答を表示 回答を非表示 推奨回答: C 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "グループ3とグループ4のみ"
      },
      {
        "letter": "B",
        "text": "Admin1、Group3、Group4のみ"
      },
      {
        "letter": "C",
        "text": "グループ1、グループ3、グループ4のみ"
      },
      {
        "letter": "D",
        "text": "グループ1、グループ2、グループ3、グループ4のみ そして。 管理者1、グループ1、グループ2、グループ3、グループ4"
      }
    ],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image234.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 127,
    "question": "Client1 というワークグループコンピューターがあり、Windows 11 を実行し、パブリックネットワークに接続しています。Client1 で PowerShell リモート処理を有効にする必要があります。このソリューションでは、PowerShell リモート処理による接続がローカルサブネットからのみ許可されるようにする必要があります。どの PowerShell コマンドを実行すればよいでしょうか？ A. Set-PSSessionConfiguration –AccessMode Local B. Enable-PSRemoting –SkipNetworkProfileCheck C. Enable-PSRemoting –Force D. Set-NetFirewallRule –Name “WINRM-HTTP-In-TCP-PUBLIC” –RemoteAddress Any 回答を表示 回答を非表示 回答: B 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "Set-PSSessionConfiguration –AccessMode ローカル"
      },
      {
        "letter": "B",
        "text": "Enable-PSRemoting –SkipNetworkProfileCheck"
      },
      {
        "letter": "C",
        "text": "Enable-PSRemoting –Force"
      },
      {
        "letter": "D",
        "text": "Set-NetFirewallRule –Name “WINRM-HTTP-In-TCP-PUBLIC” –RemoteAddress 任意"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 128,
    "question": "Microsoft Intune に登録されている Computer1 という Windows 10 デバイスがあります。Computer1 を、顧客向けの全画面アプリケーションを 1 つ実行するパブリック ワークステーションとして構成する必要があります。Microsoft Intune 管理センターでは、どの種類の構成プロファイル テンプレートを使用すべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "共有マルチユーザーデバイス"
      },
      {
        "letter": "B",
        "text": "デバイスの制限"
      },
      {
        "letter": "C",
        "text": "キオスク"
      },
      {
        "letter": "D",
        "text": "エンドポイント保護"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 129,
    "question": "Microsoft Intune Suiteを導入しています。以下の表に示すように、Intuneにデバイスを登録しています。エンドポイント分析を使用して分析できるデバイスのパフォーマンスはどれですか？A. デバイス1のみ B. デバイス1とデバイス2のみ C. デバイス1、デバイス2、デバイス3のみ D. デバイス1、デバイス2、デバイス4のみ E. デバイス1、デバイス2、デバイス3、デバイス4 推奨回答を表示 回答を非表示 推奨回答: B 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1、デバイス2、デバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス4のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image331.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 130,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションを所有しています。Windows Autopilot を使用して Windows 11 デバイスを展開する予定です。Autopilot のプロビジョニング中に、以下の要件を満たす必要があります。• アプリとプロファイルの構成の進行状況を表示する。• すべてのアプリとプロファイルがインストールされるまで、ユーザーがデバイスを使用できないようにする。何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "アプリ構成ポリシー"
      },
      {
        "letter": "B",
        "text": "アプリ保護ポリシー"
      },
      {
        "letter": "C",
        "text": "登録デバイスプラットフォームの制限"
      },
      {
        "letter": "D",
        "text": "登録状況ページ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 131,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションを所有しています。Microsoft Intune を使用して Windows デバイスの展開と管理を行っています。退職したユーザーからデバイスを 100 台受け取りました。以前のユーザーがインストールしたデータとアプリケーションをすべて削除し、新しいユーザー向けにデバイスを再利用する必要があります。このソリューションでは、管理の手間を最小限に抑える必要があります。どうすればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "新しい構成プロファイルをデバイスに展開します。"
      },
      {
        "letter": "B",
        "text": "デバイスで Windows Autopilot リセットを実行します。"
      },
      {
        "letter": "C",
        "text": "デバイスでインプレース アップグレードを実行します。"
      },
      {
        "letter": "D",
        "text": "デバイスに Windows 11 のクリーン インストールを実行します。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 132,
    "question": "Microsoft Intune を使用して 1,000 台のデバイスを管理しています。デバイス コンプライアンス傾向レポートを確認します。レポートにはどのくらいの期間、傾向データが表示されますか？",
    "choices": [
      {
        "letter": "A",
        "text": "30日間"
      },
      {
        "letter": "B",
        "text": "60日間"
      },
      {
        "letter": "C",
        "text": "90日間"
      },
      {
        "letter": "D",
        "text": "365日"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 133,
    "question": "Microsoft 365 Business Standard サブスクリプションと 100 台の Windows 10 Pro デバイスを所有しています。Microsoft 365 E5 サブスクリプションを購入しました。Windows 10 Pro デバイスを Windows 10 Enterprise にアップグレードする必要があります。このソリューションでは、管理作業を最小限に抑える必要があります。どのアップグレード方法を使用すべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "Windows オートパイロット"
      },
      {
        "letter": "B",
        "text": "Microsoft Deployment Toolkit (MDT) ライトタッチ展開"
      },
      {
        "letter": "C",
        "text": "サブスクリプションのアクティベーション"
      },
      {
        "letter": "D",
        "text": "Windowsインストールメディアを使用したインプレースアップグレード"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 134,
    "question": "HOTSPOT - Microsoft 365 サブスクリプションを所有しています。このサブスクリプションには、Windows 11 を実行し、Microsoft Intune に登録されているコンピューターが 1,000 台含まれています。以下のオプションを有効にしたコンプライアンス ポリシーを作成する予定です。• デバイスでセキュア ブートを有効にすることを必須とする。• デバイスのマシン リスク スコアが規定値以下であることを必須とする。どの 2 つのコンプライアンス設定を構成する必要がありますか？回答するには、回答エリアから適切な設定を選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image357.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image358.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 135,
    "question": "HOTSPOT - ケース スタディ - 概要 - ADatum Corporation は、モントリオールに本社、シアトルとニューヨークに支社を持つコンサルティング会社です。ADatum は、Microsoft 365 E5 サブスクリプションを所有しています。環境 - ネットワーク環境 - ネットワークには、adatum.com という名前のオンプレミスの Active Directory ドメインが含まれています。このドメインには、次の表に示すサーバーが含まれています。ADatum には、adatum.com という名前のハイブリッド Azure AD テナントがあります。ユーザーとグループ - adatum.com テナントには、次の表に示すユーザーが含まれています。すべてのユーザーには、Microsoft Office 365 ライセンスと Enterprise Mobility + Security E3 ライセンスが割り当てられています。Group1 と GroupA では、Enterprise State Roaming が有効になっています。Group1 と Group2 のメンバーシップの種類は割り当て済みです。デバイス - ADatum には、次の表に示す Windows 10 デバイスがあります。Windows 10 デバイスは、Azure AD に参加しており、Microsoft Intune に登録されています。すべての Azure AD 参加済みデバイスには、C:\\AppA.exe という実行可能ファイルと、D:\\Folder1 というフォルダーがあります。 Microsoft Intune の構成 - Microsoft Intune には、次の表に示すコンプライアンス ポリシーがあります。 自動登録設定には、次の構成があります。 • MDM ユーザー スコープ: GroupA • MAM ユーザー スコープ: GroupB 次の制御されたフォルダー アクセス設定を持つエンドポイント保護構成プロファイルがあります。 • 名前: Protection1 • フォルダー保護: 有効 • 保護されたフォルダーにアクセスできるアプリの一覧: C:\\*\\AppA.exe • 保護する必要がある追加のフォルダーの一覧: D:\\Folder1 • 割り当て: - 含まれているグループ: Group2、GroupB Windows Autopilot の構成 - ADatum には、次の図に示すように Windows Autopilot 展開プロファイルが構成されています。 現在、Windows Autopilot を使用して展開されているデバイスはありません要件 - 計画されている変更 - ADatum は次の変更を実装する予定です。 • Device6 という名前の新しい Windows 10 デバイスを購入し、デバイスを Intune に登録する。 • 新しいコンピューターは、Windows Autopilot を使用して展開され、ハイブリッド Azure AD 参加済みになります。 • 次の設定を持つネットワーク境界構成プロファイルを展開済み: - 名前: Boundary1 - ネットワーク境界: 192.168.1.0/24 - スコープ タグ: Tag1 - 割り当て: - 含まれるグループ: Group1、Group2 • 次の設定を持つ Connection1 および Connection2 という名前の 2 つの VPN 構成プロファイルを展開します: - 名前: Connection1 - 接続名: VPN1 - 接続の種類: L2TP - 割り当て: - 含まれるグループ: Group1、Group2、GroupA - 除外されるグループ: -- - 名前: Connection2 - 接続名: VPN2 - 接続の種類: IKEv2 - 割り当て: - 含まれるグループ: GroupA - 除外されるグループ: GroupB 技術要件 - ADatum は次の技術要件を満たしている必要があります。 • GroupA のユーザーは、新しいコンピューターを展開できる必要があります。 • 管理上の労力を最小限に抑える必要があります。計画した変更をConnection1とConnection2に適用します。ユーザーがDevice1とDevice2にサインインした場合、User1のVPN接続はいくつになりますか？ 回答するには、回答エリアで適切な選択肢を選択してください。注：正解は1つにつき1ポイントです。 推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image222.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image223.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image224.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image225.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image226.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image227.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image228.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image231.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image232.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 136,
    "question": "HOTSPOT - You have computers that run Windows 10 and are configured by using Windows Autopilot. A user performs the following tasks on a computer named Computer1: • Creates a VPN connection to the corporate network • Installs a Microsoft Store app named App1 • Connections to a Wi-Fi network You perform a Windows Autopilot Reset on Computer1. What will be the state of the computer when the user signs in? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image302.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image303.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 137,
    "question": "HOTSPOT - You have a Microsoft 365 subscription. You need to enable passwordless authentication for all users. The solution must meet the following requirements: • Users in the research department cannot use mobile devices and must authenticate from unmanaged Linux devices by using an alternative method. • To access services, users in the sales department must authenticate by using their mobile phone. • Administrative effort must be minimized. Which authentication method should you use for each department? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image307.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image308.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 138,
    "question": "HOTSPOT - You have a Microsoft 365 subscription that uses Microsoft Intune Suite. You use Microsoft Intune to manage devices. You need to configure an update ring that meets the following requirements: • Fixes and improvements to existing Windows functionality can be deferred for 14 days but will install automatically seven days after that date. • The installation of new Windows features can be deferred for 90 days but will install automatically 10 days after that date. • Devices must restart automatically three days after an update is installed. How should you configure the update ring? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image276.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image566.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 139,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションをお持ちです。Microsoft 365 Defender デバイスのオンボーディングを確認し、実装する必要があります。ソリューションは以下の要件を満たす必要があります。• Chromium ベースの Microsoft Edge がインストールされたオンボーディング済みデバイスを表示する。• Windows 11 デバイス用のオンボーディング パッケージをダウンロードする。• 管理作業を最小限に抑える。Microsoft 365 Defender ポータルで使用するべき 2 つの設定はどれですか？回答するには、回答エリアで適切な設定を選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image278.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image279.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 140,
    "question": "HOTSPOT - MDM 展示に示されている MDM セキュリティ ベースライン プロファイルがあります。([MDM] タブをクリックします。) ASR 展示に示されている ASR エンドポイント セキュリティ プロファイルがあります。([ASR] タブをクリックします。) 両方のプロファイルを Microsoft Intune に登録されているデバイスに展開する予定です。デバイスで次の設定を構成する方法を確認する必要があります。 • Office アプリケーションによる実行可能コンテンツの作成をブロックする • Office マクロからの Win32 API 呼び出しをブロックする 現在、設定は各デバイスでローカルに無効になっています。デバイスで有効な設定は何ですか。回答するには、回答領域で適切なオプションを選択します。注: 正しい選択はそれぞれ 1 ポイントの価値があります。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image296.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image297.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image298.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image299.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 141,
    "question": "ネットワークにActive Directoryドメインサービス（AD DS）ドメインがあり、そのドメインにはWindows 10を実行するクライアントコンピューターが100台含まれています。現在、会社には展開インフラストラクチャがありません。会社はボリュームライセンス契約を通じてWindows 11のライセンスを購入しています。これらのコンピューターをWindows 11にアップグレードする方法を推奨する必要があります。ソリューションはライセンスコストを最小限に抑える必要があります。推奨事項にはどのようなものを含めるべきですか？",
    "choices": [
      {
        "letter": "A",
        "text": "Windows オートパイロット"
      },
      {
        "letter": "B",
        "text": "構成マネージャー"
      },
      {
        "letter": "C",
        "text": "サブスクリプションのアクティベーション"
      },
      {
        "letter": "D",
        "text": "Microsoft 展開ツールキット (MDT)"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 142,
    "question": "Microsoft Intune を使用する Microsoft 365 E5 サブスクリプションを所有しています。このサブスクリプションには、次の表に示すユーザーが含まれています。Group2 と Group3 は Group1 のメンバーです。すべてのユーザーは Microsoft Excel を使用しています。Microsoft Intune 管理センターから、次の表に示すポリシーを作成します。以下の各項目について、該当する場合は「はい」を選択してください。それ以外の場合は「いいえ」を選択してください。注: 正解は 1 点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image336.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image337.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image338.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image339.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 143,
    "question": "You have the devices shown in the following table. You plan to implement Microsoft Defender for Endpoint. You need to identify which devices can be onboarded to Microsoft Defender for Endpoint. What should you identify?",
    "choices": [
      {
        "letter": "A",
        "text": "Device1 only"
      },
      {
        "letter": "B",
        "text": "Device2 only"
      },
      {
        "letter": "C",
        "text": "Device1, Device2 only"
      },
      {
        "letter": "D",
        "text": "Device1, Device2, and Device3 only"
      },
      {
        "letter": "E",
        "text": "Device1, Device2, Device3, and Device4"
      }
    ],
    "answer": "D",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image332.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 144,
    "question": "You have an Azure AD tenant named contoso.com. You plan to purchase 25 computers that run Windows 11. You plan to deliver the computers directly to users. You need to ensure that during the out-of-box experience (OBE), users are prompted to sign in, and then the computers are configured to use Microsoft Intune. Which two components should you configure? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "letter": "A",
        "text": "a provisioning package"
      },
      {
        "letter": "B",
        "text": "automatic enrollment"
      },
      {
        "letter": "C",
        "text": "an unattend.xml answer file"
      },
      {
        "letter": "D",
        "text": "a Windows Autopilot deployment profile for self-deploying mode"
      },
      {
        "letter": "E",
        "text": "a Windows Autopilot deployment profile for user-driven mode"
      }
    ],
    "answer": "BE",
    "images": []
  },
  {
    "id": 145,
    "question": "You need to assign the same deployment profile to all the computers that are configured by using Windows Autopilot. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point. A. Create an Azure AD group that has dynamic membership rules and uses the ZTDID tag. B. Create an Azure AD group that has dynamic membership rules and uses the operatingSystem tag. C. Assign a Windows Autopilot deployment profile to a group. D. Join the computers to Azure AD. E. Create a Group Policy object (GPO) that is linked to a domain. F. Join the computers to an on-premises Active Directory domain.",
    "choices": [
      {
        "letter": "A",
        "text": "Create an Azure AD group that has dynamic membership rules and uses the ZTDID tag."
      },
      {
        "letter": "B",
        "text": "Create an Azure AD group that has dynamic membership rules and uses the operatingSystem tag."
      },
      {
        "letter": "C",
        "text": "Assign a Windows Autopilot deployment profile to a group."
      },
      {
        "letter": "D",
        "text": "Join the computers to Azure AD."
      },
      {
        "letter": "E",
        "text": "Create a Group Policy object (GPO) that is linked to a domain."
      },
      {
        "letter": "F",
        "text": "Join the computers to an on-premises Active Directory domain."
      }
    ],
    "answer": "AC",
    "images": []
  },
  {
    "id": 146,
    "question": "Your network contains an Active Directory domain. The domain contains 10 computers that run Windows 10. Users in the finance department use the computers. You have a computer named Computer1 that runs Windows 10. From Computer1, you plan to run a script that executes Windows PowerShell commands on the finance department computers. You need to ensure that you can run the PowerShell commands on the finance department computers from Computer. What should you do on the finance department computers?",
    "choices": [
      {
        "letter": "A",
        "text": "From Windows PowerShell, run the Enable-MMAgent cmdlet."
      },
      {
        "letter": "B",
        "text": "From the local Group Policy, enable the Allow Remote Shell Access setting."
      },
      {
        "letter": "C",
        "text": "From Windows PowerShell, run the Enable-PSRemoting cmdlet."
      },
      {
        "letter": "D",
        "text": "From the local Group Policy, enable the Turn on Script Execution setting."
      }
    ],
    "answer": "C",
    "images": []
  },
  {
    "id": 147,
    "question": "You have a Microsoft 365 E5 subscription that contains the users shown in the following table. In the Microsoft 365 Apps admin center, you create a Microsoft Office customization. Which users can download the Office customization file from the admin center?",
    "choices": [
      {
        "letter": "A",
        "text": "Admin3 only"
      },
      {
        "letter": "B",
        "text": "Admin1 and Admin3 only"
      },
      {
        "letter": "C",
        "text": "Admin3 and Admin4 only"
      },
      {
        "letter": "D",
        "text": "Admin1, Admin2, and Admin3 only"
      },
      {
        "letter": "E",
        "text": "Admin1, Admin2, Admin3, Admin4"
      }
    ],
    "answer": "C",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image233.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 148,
    "question": "HOTSPOT - You have a Microsoft 365 subscription. All computers are enrolled in Microsoft Intune. You have business requirements for securing your Windows 11 environment as shown in the following table. What should you implement to meet each requirement? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image260.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image261.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image262.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 149,
    "question": "HOTSPOT - You have a Microsoft 365 tenant that uses Microsoft Intune and contains the devices shown in the following table. In Microsoft Intune Endpoint security, you need to configure a disk encryption policy for each device. Which encryption type should you use for each device, and which role-based access control (RBAC) role in Intune should you use to manage the encryption keys? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image317.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image318.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image319.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 150,
    "question": "DRAG DROP - You have a Microsoft 365 subscription that uses Microsoft Defender for Endpoint. You plan to onboard the following types of devices to Defender for Endpoint: • macOS • Linux Server What should you use to onboard each device? To answer, drag the appropriate tools to the correct device types. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image322.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image323.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 151,
    "question": "HOTSPOT - You have a Microsoft 365 subscription that uses Microsoft Intune and contains 100 Windows 10 devices. You need to create Intune configuration profiles to perform the following actions on the devices: • Deploy a custom Start layout. • Rename the local Administrator account. Which profile type template should you use for each action? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image288.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image567.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 152,
    "question": "You have a Microsoft 365 subscription that uses Microsoft Intune Suite. You use Microsoft Intune to manage Windows 11 devices. You create a new policy set named Set and add five device configuration profiles for Windows 10 and later. You create a device compliance policy named Policy1. You need to ensure that when users are assigned the device configuration profiles in Set1, they are always assigned Policy1 also. What should you configure?",
    "choices": [
      {
        "letter": "A",
        "text": "the assignments of Policy1"
      },
      {
        "letter": "B",
        "text": "the Policy1 configurations"
      },
      {
        "letter": "C",
        "text": "the assignments of Set1"
      },
      {
        "letter": "D",
        "text": "the Set1 configurations"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 153,
    "question": "次の表に示すデバイスを含む Microsoft 365 テナントがあります。デバイスは Microsoft Intune を使用して管理されています。Policy1 というコンプライアンス ポリシーを作成し、Policy1 を Group1 に割り当てます。Policy1 は、デバイスのセキュリティ設定がポリシーで指定された設定と一致する場合にのみ、デバイスを準拠としてマークするように構成されています。Group1 のメンバーではないデバイスが準拠として表示されていることがわかりました。コンプライアンス ポリシーが割り当てられたデバイスのみが準拠として表示されるようにする必要があります。その他のデバイスはすべて非準拠として表示される必要があります。Microsoft Intune 管理センターから何をすればよいですか?",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス コンプライアンスから、コンプライアンス ポリシー設定を構成します。"
      },
      {
        "letter": "B",
        "text": "エンドポイント セキュリティから、条件付きアクセス設定を構成します。"
      },
      {
        "letter": "C",
        "text": "テナント管理から、診断設定を変更します。"
      },
      {
        "letter": "D",
        "text": "Policy1 から、非準拠に対するアクションを変更します。"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image342.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 154,
    "question": "ネットワークにcontoso.comというActive Directoryドメインがあります。このドメインには、Windows 11を実行するコンピューターが25台あります。Microsoft 365サブスクリプションがあり、contoso.comと同期するAzure ADテナントがあります。ハイブリッドAzure AD参加を構成し、一部のコンピューターの登録状態が「保留中」になっていることを発見しました。コンピューターが正常に参加を完了することを確認する必要があります。何を確認する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "すべてのコンピュータでWindowsがアクティブ化されていること"
      },
      {
        "letter": "B",
        "text": "コンピュータのユーザーにMicrosoft 365ライセンスが割り当てられていること"
      },
      {
        "letter": "C",
        "text": "各コンピュータがドメインコントローラへの見通しを持っていること"
      },
      {
        "letter": "D",
        "text": "コンピュータに最新の品質アップデートが含まれていること"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 155,
    "question": "HOTSPOT - DS1という名前のMicrosoft Deployment Toolkit (MDT) 展開共有を管理しています。DS1には、Windows 11 x64という名前のOut-of-Box Driversフォルダーがあり、その中に{メーカー名}\\{モデル名}という形式のサブフォルダーがあります。PnP検出プロファイルや選択プロファイルを使用せずに、フォルダー内のコンピューターのメーカーとモデルに一致するすべてのドライバーがインストールされるように、展開タスクシーケンスを変更する必要があります。どうすればよいでしょうか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択は1つにつき1ポイントです。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image347.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image569.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 156,
    "question": "HOTSPOT - Microsoft Deployment Toolkit (MDT) を使用して Windows 11 を展開します。展開共有を以下の要件を満たすように変更する必要があります。• インストールを実行するユーザーにローカル管理者のパスワード設定を求めるプロンプトが表示されるようにする。• 展開中にコンピューターに名前を付けるルールを定義する。このソリューションは、既存の WinPE イメージを置き換えてはなりません。各要件を満たすためにどのファイルを変更する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image349.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image350.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 157,
    "question": "HOTSPOT - あなたの会社ではMicrosoft Defender for Endpointを使用しています。Microsoft Defender for Endpointには、次の表に示すデバイスグループが含まれています。次の図に示すように、コンピューターをMicrosoft Defender for Endpointにオンボードします。Microsoft Defender for Endpointの構成はどのような効果をもたらしますか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image284.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image285.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image286.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image287.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 158,
    "question": "HOTSPOT - Windows 11 の展開タスクを管理するために Microsoft Deployment Toolkit (MDT) ソリューションを使用しています。MDT には、次の表に示すオペレーティング システム イメージが含まれています。Windows 10 を実行している複数のコンピューターで Windows 11 のプレース アップグレードを実行する必要があります。展開ワークベンチから、新しいタスク シーケンス ウィザードを開きます。タスク シーケンスに使用するタスク シーケンス テンプレートとオペレーティング システム イメージを特定する必要があります。ソリューションは管理作業を最小限に抑える必要があります。何を特定する必要がありますか？回答するには、回答領域で適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image304.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image305.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image306.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 159,
    "question": "Microsoft 365 サブスクリプションをご利用です。Android デバイス上の企業データを保護するために、アプリ保護ポリシーを使用しています。Android デバイスから接続するすべてのユーザーが、モバイル アプリケーション管理 (MAM) をサポートするアプリから接続した場合にのみ企業データにアクセスできるようにする必要があります。何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "アプリ構成ポリシー"
      },
      {
        "letter": "B",
        "text": "条件付きアクセスポリシー"
      },
      {
        "letter": "C",
        "text": "デバイス構成プロファイル"
      },
      {
        "letter": "D",
        "text": "デバイスコンプライアンスポリシー"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 160,
    "question": "Microsoft 365 E5 サブスクリプションをお持ちです。Microsoft Intune に登録されておらず、アプリ保護ポリシーが割り当てられているすべてのデバイスを一覧表示するレポートをダウンロードする必要があります。Microsoft Intune 管理センターでは、どの項目を選択すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "レポート、デバイスコンプライアンス"
      },
      {
        "letter": "B",
        "text": "アプリ、そしてアプリ保護ポリシー"
      },
      {
        "letter": "C",
        "text": "デバイス、次にモニター"
      },
      {
        "letter": "D",
        "text": "アプリ、そしてモニター"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 161,
    "question": "ドラッグ＆ドロップ - 会社にはMicrosoft 365 E5テナントがあります。会社のすべてのデバイスはMicrosoft Intuneに登録されています。カスタムクエリと視覚化を使用して、Microsoft Intuneの生データから高度なレポートを作成する必要があります。どの3つのアクションを順番に実行する必要がありますか？回答するには、アクションリストから適切なアクションを回答エリアに移動し、正しい順序に並べ替えてください。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image320.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image321.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 162,
    "question": "ドラッグ＆ドロップ - Azure ADテナントと同期するオンプレミスのActive Directoryドメインがあります。テナントにはWindows 10を実行するコンピューターが含まれています。これらのコンピューターはハイブリッドAzure ADに参加しており、Microsoft Intuneに登録されています。コンピューター上のMicrosoft Officeの設定は、グループポリシーオブジェクト（GPO）を使用して構成されています。このGPOをIntuneに移行する必要があります。3つのアクションのうち、どのアクションを順番に実行する必要がありますか？回答するには、アクションリストから適切なアクションを回答エリアに移動し、正しい順序で並べ替えてください。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image300.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image301.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 163,
    "question": "HOTSPOT - ネットワークには、次の表に示す場所を含むオンプレミスの Active Directory ドメインが含まれています。Microsoft Intune には、次の表に示す Windows 10 デバイスを登録しています。すべてのデバイスに配信最適化デバイス構成プロファイルを適用しています。プロファイルは、次の図に示すように構成されています。デバイス1 とデバイス2 はどのデバイスから更新プログラムを取得できますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image324.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image325.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image326.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image327.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image328.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 164,
    "question": "ドラッグ＆ドロップ - 次の表に示すデバイスを含むMicrosoft 365サブスクリプションをお持ちです。各デバイスでMicrosoft Edgeの設定を構成する必要があります。どの機能を利用すればよいですか？回答するには、適切なIntune機能を正しいデバイスにドラッグしてください。各機能は1回、複数回、または全く使用しない場合があります。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注：正解を選択するごとに1ポイント獲得できます。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image333.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image334.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image335.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 165,
    "question": "contoso.com という Azure AD テナントに関連付けられた Microsoft Intune サブスクリプションがあります。ユーザーは、テナントにサインインする際に、us.contoso.com、eu.contoso.com、または contoso.com のいずれかのサフィックスを使用します。ユーザーが登録プロセスの一環としてモバイルデバイス管理 (MDM) 登録 URL を指定する必要がないようにする必要があります。ソリューションでは、変更回数を最小限に抑える必要があります。必要な DNS レコードはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "TXTレコードは1つだけ"
      },
      {
        "letter": "B",
        "text": "3つのCNAMEレコード"
      },
      {
        "letter": "C",
        "text": "3つのTXTレコード"
      },
      {
        "letter": "D",
        "text": "CNAMEレコードは1つだけ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 166,
    "question": "Microsoft 365 サブスクリプションがあり、User1 というユーザーが Microsoft Intune Suite を使用しています。Microsoft Intune を使用して Windows 11 を実行するデバイスを管理しています。登録されているすべてのデバイスのローカル Administrators グループから User1 を削除する必要があります。何を構成すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイスコンプライアンスポリシー"
      },
      {
        "letter": "B",
        "text": "アカウント保護ポリシー"
      },
      {
        "letter": "C",
        "text": "アプリ構成ポリシー"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 167,
    "question": "DRAG DROP - You have a Microsoft Deployment Toolkit (MDT) deployment share named DS1. You import a Windows 11 image to DS1. You have an executable installer for an application named App1. You need to ensure that App1 will be installed for all the task sequences that deploy the image. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image186.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image187.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 168,
    "question": "HOTSPOT - You have an Azure AD tenant that contains the following: • Windows 11 devices that are joined to Azure AD • A user that has a display name of User1 and a UPN of [email protected] You enable Remote Desktop on the Windows 11 devices. You need to ensure that User1 can use Remote Desktop to connect to the devices. How should you complete the command that must be run on each device? To answer, select the appropriate options in the answer area NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image351.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image352.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 169,
    "question": "HOTSPOT - Your network contains an Active Directory domain. Active Directory is synced with Azure AD. There are 500 Active Directory domain-joined computers that run Windows 10 and are enrolled in Microsoft Intune. You plan to implement Microsoft Defender Exploit Guard. You need to create a custom Microsoft Defender Exploit Guard policy, and then distribute the policy to all the computers. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image312.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image313.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 170,
    "question": "You have devices enrolled in Microsoft Intune as shown in the following table. For which devices can you manage updates by using Intune? A. Device1 only B. Device1 and Device2 only C. Device1 and Device3 only D. Device1, Device3, and Device4 only E. Device1, Device2, Device3, and Device4",
    "choices": [
      {
        "letter": "A",
        "text": "Device1 only"
      },
      {
        "letter": "B",
        "text": "Device1 and Device2 only"
      },
      {
        "letter": "C",
        "text": "Device1 and Device3 only"
      },
      {
        "letter": "D",
        "text": "Device1, Device3, and Device4 only"
      },
      {
        "letter": "E",
        "text": "Device1, Device2, Device3, and Device4"
      }
    ],
    "answer": "E",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image359.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 171,
    "question": "Windows 10 を実行するコンピューターが 500 台あります。これらのコンピューターは Azure AD に参加しており、Microsoft Intune に登録されています。Simple Certificate Enrollment Protocol (SCEP) を使用して、これらのコンピューターに証明書を配布する予定です。次の表に示すサーバーがあります。NDES は下位 CA から証明書を発行します。図に示すように、デバイス構成プロファイルを構成しています。(図のタブをクリックしてください。) SCEP プロファイルを完了する必要があります。必要なルート証明書はどのサーバーにありますか?",
    "choices": [
      {
        "letter": "A",
        "text": "サーバー1"
      },
      {
        "letter": "B",
        "text": "サーバー2"
      },
      {
        "letter": "C",
        "text": "サーバー3"
      },
      {
        "letter": "D",
        "text": "サーバー4"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image360.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image361.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 172,
    "question": "HOTSPOT - 次の表に示すデバイスを含むMicrosoft 365サブスクリプションを所有しています。これらのデバイスをMicrosoft Intuneに登録する予定です。各デバイスをIntuneに登録した後、コンプライアンスポリシーのチェックインはどのくらいの頻度で実行されますか？回答するには、回答エリアで適切なオプションを選択してください。注：正解は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image362.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image363.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image364.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 173,
    "question": "HOTSPOT - 次の表に示すように、2台のWindows 10デバイスがMicrosoft Intuneに登録されています。コンプライアンスポリシー設定は、次の図に示すように構成されています。8月1日に、次の図に示すようにコンプライアンスポリシーを作成します。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択は1点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image365.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image366.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image367.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image368.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image369.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 174,
    "question": "HOTSPOT - 次の表に示すように、Microsoft Intune に登録されているデバイスがあります。以下の点を確認する必要があります。• ワイプ操作を使用して Intune から削除できるデバイス。• ワイプされたデバイスでも、登録状態と関連付けられたユーザーアカウントは保持できます。何を確認する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image372.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image373.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image374.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 175,
    "question": "HOTSPOT - contoso.com という Azure AD テナントがあり、そこには次の表に示すデバイスが含まれています。テナントには、次の表に示す Azure AD グループが含まれています。次の図に示すように、Autopilot 展開プロファイルを追加します。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image375.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image376.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image377.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image378.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image379.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 176,
    "question": "HOTSPOT - 次の表に示すように、3つのサイトにMicrosoft Deployment Toolkit (MDT) をインストールしています。分散ファイルシステム (DFS) レプリケーションを使用して、「Production」という共有にイメージをレプリケートします。Bootstrap.ini ファイルで以下の設定を構成します。次の表に示すコンピューターに Windows 10 を展開する予定です。以下の各項目について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい回答はそれぞれ1点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image380.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image381.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image382.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image383.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image384.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 177,
    "question": "Microsoft 365 サブスクリプションがあり、Microsoft Intune に登録されている Android デバイスが 1,000 台あります。次の設定を含むアプリ構成ポリシーを作成します。 • デバイス登録の種類: 管理対象デバイス • プロファイルの種類: すべてのプロファイルの種類 • プラットフォーム: Android Enterprise このポリシーに関連付けることができるアプリの種類はどれですか? 正解ごとに完全なソリューションが提示されます。注: 正解は 1 つにつき 1 ポイントです。",
    "choices": [
      {
        "letter": "A",
        "text": "Android Enterprise システムアプリ"
      },
      {
        "letter": "B",
        "text": "ウェブリンク"
      },
      {
        "letter": "C",
        "text": "Androidストアアプリ"
      },
      {
        "letter": "D",
        "text": "管理されたGoogle Playストアアプリ そして。 内蔵Androidアプリ"
      }
    ],
    "answer": "AD",
    "images": []
  },
  {
    "id": 178,
    "question": "Microsoft 365 サブスクリプションをお持ちです。次の表に示すように、Microsoft Intune に登録されているデバイスがあります。Intune を使用してアプリを展開できるデバイスはどれですか？ A. デバイス1 のみ B. デバイス1 とデバイス2 のみ C. デバイス1 とデバイス3 のみ D. デバイス1、デバイス2、デバイス3 のみ E. デバイス1、デバイス2、デバイス3、デバイス4 推奨回答を表示 回答を非表示 推奨回答: D 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "D",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image385.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 179,
    "question": "HOTSPOT - Microsoft Intune を使用する Microsoft 365 E5 サブスクリプションを所有しています。サブスクリプションには、次の表に示すリソースが含まれています。User1 は Device1 の所有者です。次の表に示すように、Microsoft 365 Apps Windows 10 以降のアプリの種類を Intune に展開します。翌日、アプリの展開結果を確認します。以下の各項目について、該当する場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正解は 1 点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image386.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image387.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image388.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image389.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 180,
    "question": "ドラッグ＆ドロップ - オンプレミスネットワークには、Active Directory Domain Services (AD DS) ドメインが含まれています。Azure サブスクリプションがあり、VNet1 という仮想ネットワークが含まれています。VNet1 には 5 台の仮想マシンが含まれており、オンプレミスネットワークには接続されていません。Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションがあります。Windows 365 Enterprise ライセンスを購入しています。Cloud PC を展開する必要があります。ソリューションは以下の要件を満たす必要があります。• すべてのユーザーが、いつでも制限なく Cloud PC にアクセスできる必要があります。• ユーザーは VNet1 上の仮想マシンに接続できる必要があります。Windows 365 のプロビジョニングポリシーはどのように構成すればよいですか？回答するには、適切なオプションを正しい設定にドラッグしてください。各オプションは、1 回、複数回、またはまったく使用しないことができます。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正しい選択ごとに 1 ポイントが与えられます。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image392.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image393.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 181,
    "question": "Hyper-Vホストがあります。このホストには、次の表に示すように、Windows 10を実行する仮想マシンが含まれています。Windows 11にアップグレードできる仮想マシンはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "VM1のみ"
      },
      {
        "letter": "B",
        "text": "VM2のみ"
      },
      {
        "letter": "C",
        "text": "VM2とVM3のみ"
      },
      {
        "letter": "D",
        "text": "VM1、VM2、VM3"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image396.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 182,
    "question": "ホットスポット - ネットワークには Active Directory ドメインが含まれています。ドメインには、Windows 10 を実行する Computer1、Computer2、Computer3、Computer4 という 4 台のコンピューターが含まれています。次の操作を実行します。• Computer1 に Windows Admin Center をインストールし、TCP ポート 80、443、6516 経由の受信通信を許可するように Windows Defender ファイアウォールを構成します。• Computer2 で、Enable-PSRemoting コマンドレットを実行します。• Computer3 で、Windows リモート管理 (WinRM) トラフィックを許可するように Windows Defender ファイアウォールを構成します。• Computer4 で、winrm quickconfig コマンドを実行します。Windows Admin Center を使用してコンピューターをリモートで管理する必要があります。どのコンピューターから Windows Admin Center に接続でき、どのコンピューターを Windows Admin Center を使用して管理できますか。回答するには、回答の中から適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image394.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image395.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 183,
    "question": "ドラッグ アンド ドロップ - Microsoft Intune を含む Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、Intune に登録され、個人所有の仕事用プロファイルを持つ Android Enterprise デバイスが含まれています。すべての Android デバイスは、Group1 というグループのメンバーです。Android デバイスのセキュリティ プロバイダーが最新ではない場合に、エンド ユーザーと Intune 管理者にメール メッセージが届くようにする必要があります。Microsoft Intune 管理センターから、どの操作を順番に実行する必要がありますか? 回答するには、適切な操作を正しい順序にドラッグします。各操作は、1 回、複数回、またはまったく使用しない場合があります。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正しい選択ごとに 1 ポイントが与えられます。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image404.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image405.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 184,
    "question": "HOTSPOT - Microsoft 365 サブスクリプションを所有しています。Microsoft Intune を使用して管理する予定の Microsoft Surface Hub デバイスが 25 台あります。デバイスを以下の要件を満たすように構成する必要があります。• Windows Hello for Business を有効にする。• Microsoft Defender SmartScreen を構成して、未検証のファイルの実行をブロックする。各要件を満たすには、どのプロファイル タイプ テンプレートを使用する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択ごとに 1 ポイントが付与されます。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image406.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image407.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 185,
    "question": "HOTSPOT - 次の表に示すセキュリティグループを含むMicrosoft 365 E5サブスクリプションを所有しています。このサブスクリプションには、次の表に示すWindows 11バージョン21H2を実行するデバイスが含まれています。次の表に示す「Deployment1」という機能更新プログラム展開プロファイルがあります。以下の各項目について、該当する場合は「はい」を選択してください。それ以外の場合は「いいえ」を選択してください。注：正解は1つにつき1ポイントです。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image408.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image409.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image410.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image411.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image412.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 186,
    "question": "Microsoft Intune Suite を使用する Microsoft 365 サブスクリプションをお持ちです。Intune を使用して Windows 11 デバイスを管理しています。Windows ローカル管理者パスワードソリューション (Windows LAPS) を実装する必要があります。何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "構成プロファイル"
      },
      {
        "letter": "B",
        "text": "アカウント保護ポリシー"
      },
      {
        "letter": "C",
        "text": "アプリ保護ポリシー"
      },
      {
        "letter": "D",
        "text": "デバイスコンプライアンスポリシー"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 187,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションをご利用です。Android デバイスにカスタムアプリを展開する必要があります。アプリは APK ファイル形式を使用します。展開にはどの種類のアプリを選択すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "内蔵"
      },
      {
        "letter": "B",
        "text": "Androidストア"
      },
      {
        "letter": "C",
        "text": "マネージドGoogle Play"
      },
      {
        "letter": "D",
        "text": "事業部門（LOB） そして。 ウェブリンク"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 188,
    "question": "Microsoft 365 E5 サブスクリプションを所有しています。Microsoft Intune を使用してすべてのデバイスを管理しています。展開用に App1.exe という Win32 アプリを準備する必要があります。まず何をすべきでしょうか？ A. Microsoft Intune 管理センターから、アプリ構成ポリシーを作成します。B. App1.exe を INTUNEWIN 形式に変更します。C. Microsoft 365 アプリ管理センターから、展開構成を作成します。D. App1.exe を Azure Blob Storage にアップロードします。",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Intune 管理センターから、アプリ構成ポリシーを作成します。"
      },
      {
        "letter": "B",
        "text": "App1.exe を INTUNEWIN 形式に変更します。"
      },
      {
        "letter": "C",
        "text": "Microsoft 365 アプリ管理センターから、展開構成を作成します。"
      },
      {
        "letter": "D",
        "text": "App1.exe を Azure Blob Storage にアップロードします。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 189,
    "question": "ホットスポット - オンプレミスネットワークにcontoso.comというActive Directoryドメインが含まれています。このドメインには、Admin1というユーザーアカウントと、次の表に示すリソースが含まれています。Microsoft 365 E5サブスクリプションを所有しています。contoso.comと同期するMicrosoft Entraテナントを所有しています。Admin1は、Windows Autopilotを使用して100台のWindows 11デバイスを展開する予定です。展開には以下の要件を満たす必要があります。• 展開時にデバイスがMicrosoft Entraハイブリッドに参加している必要があります。• OU1にコンピューターオブジェクトを作成する必要があります。展開をサポートするには、Server1とActive Directoryの委任を構成する必要があります。注: 正しい選択はそれぞれ1点です。 回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image399.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image400.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image401.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 190,
    "question": "Windows 365 Enterprise ライセンスを含む Microsoft 365 サブスクリプションを所有しています。クラウド PC のテンプレートとして、カスタム Windows 11 イメージを使用する予定です。Windows 11 を実行する Hyper-V 仮想マシンがあり、構成は以下のとおりです。• 名前: VM1 • ディスクサイズ: 64 GB • ディスク形式: VHDX • ディスクの種類: 固定サイズ • 世代: 第 2 世代 VM1 をカスタムイメージのソースとして使用できることを確認する必要があります。まず VM1 で何をすべきでしょうか?",
    "choices": [
      {
        "letter": "A",
        "text": "ディスクの種類を「動的拡張」に変更します。"
      },
      {
        "letter": "B",
        "text": "ディスクフォーマットを VHD に変更します。"
      },
      {
        "letter": "C",
        "text": "世代を第1世代に変更します。"
      },
      {
        "letter": "D",
        "text": "ディスクサイズを増やします。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 191,
    "question": "オンプレミス ネットワークに、contoso.com という Active Directory Domain Services (AD DS) ドメインが含まれています。このドメインには、dc1.contoso.com というドメイン コントローラーが含まれています。Microsoft Intune Suite を使用する Microsoft 365 E5 サブスクリプションがあります。次の表に示すリソースを含む Azure サブスクリプションがあります。このサブスクリプションには、次の表に示す仮想ネットワークが含まれています。Windows 365 Enterprise Cloud PC を展開する予定です。Microsoft Entra ハイブリッド参加を使用する Azure ネットワーク接続 (ANC) を作成する必要があります。ANC に使用できる仮想ネットワークはどれですか?",
    "choices": [
      {
        "letter": "A",
        "text": "VNet1のみ"
      },
      {
        "letter": "B",
        "text": "VNet2のみ"
      },
      {
        "letter": "C",
        "text": "VNet3のみ"
      },
      {
        "letter": "D",
        "text": "VNet1 と VNet2 そして。 VNet1 と VNet3"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image402.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image403.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 192,
    "question": "HOTSPOT - Microsoft Intune を含む Microsoft 365 E5 サブスクリプションを所有しています。このサブスクリプションには Group1 というグループが含まれています。Group1 には Intune に登録されているデバイスが含まれています。Intune でリモートヘルプを展開します。サポート管理者が Group1 のデバイスからのみリモートヘルプセッションに参加できるように、リモートヘルプを構成する必要があります。どのような種類の Microsoft Entra オブジェクトを作成し、どのような種類のポリシーを構成する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image415.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image416.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 193,
    "question": "Microsoft Intune が含まれており、Admin1 というユーザーが含まれている Microsoft 365 E5 サブスクリプションがあります。Admin1 は、Microsoft Intune 管理センターを使用して、次のタスクを実行する必要があります。 • Intune を使用して、アプリとポリシーを作成し、ユーザーとデバイスに割り当てる。 • Windows 365 クラウド PC プロビジョニング ポリシーを作成、割り当て、および削除する。 Admin1 に必要なロールを割り当てる必要があります。ソリューションは、次の要件を満たしている必要があります。 • 最小権限の原則に従う。 • 管理の労力を最小限に抑える。 何をすべきでしょうか。",
    "choices": [
      {
        "letter": "A",
        "text": "Admin1 にヘルプ デスク オペレーターの役割を割り当てます。"
      },
      {
        "letter": "B",
        "text": "Admin1 にクラウド PC リーダーの役割を割り当てます。"
      },
      {
        "letter": "C",
        "text": "Admin1 にクラウド PC 管理者の役割を割り当てます。"
      },
      {
        "letter": "D",
        "text": "カスタム Microsoft Entra ロールを作成し、そのロールを Admin1 に割り当てます。 そして。 カスタム Intune ロールを作成し、そのロールを Admin1 に割り当てます。"
      }
    ],
    "answer": "E",
    "images": []
  },
  {
    "id": 194,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションがあります。サブスクリプションには、Intune に登録されている Windows 11 デバイスが含まれています。サブスクリプションには、Department1、Department2、Department3 という 3 つのグループが含まれています。Windows 11 デバイスに Microsoft 365 アプリを展開する必要があります。ソリューションは次の要件を満たす必要があります。 • Department1 と Department2 のユーザーには、Microsoft Project と Visio を含む完全な Microsoft 365 アプリ スイートが提供される必要があります。 • Department3 のユーザーには、Microsoft Project を含む完全な Microsoft 365 アプリ スイートが提供される必要がありますが、Visio は含まれません。 • その他すべてのユーザーには、Microsoft Project または Visio を含まない完全な Microsoft 365 アプリ スイートが提供される必要があります。 作成する必要がある展開の最小数はいくつですか?",
    "choices": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 195,
    "question": "Microsoft Intune を使用する Microsoft 365 E5 サブスクリプションをご利用です。Intune を構成して、ログデータを Log Analytics に送信します。Intune への登録に失敗したデバイスに関するイベントを確認する必要があります。何を監視する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "運用ログ"
      },
      {
        "letter": "B",
        "text": "監査ログ"
      },
      {
        "letter": "C",
        "text": "Intuneデバイスログ"
      },
      {
        "letter": "D",
        "text": "デバイスコンプライアンス組織ログ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 196,
    "question": "Microsoft Intune を含む Microsoft 365 サブスクリプションをご利用です。このサブスクリプションには、企業所有のフルマネージド Android Enterprise デバイスが含まれています。Profile1 というデバイス制限プロファイルタイプを持つ構成プロファイルを展開する予定です。Profile1 は、システム更新のためのメンテナンス期間を割り当てます。Profile1 の構成設定では、何を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイスエクスペリエンス"
      },
      {
        "letter": "B",
        "text": "一般的な"
      },
      {
        "letter": "C",
        "text": "接続性"
      },
      {
        "letter": "D",
        "text": "電源設定"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 197,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションをご利用です。Microsoft Intune を使用して Windows 365 クラウド PC デバイスを管理しています。クラウド PC デバイスに Windows 365 セキュリティ ベースラインを展開する必要があります。ソリューションは以下の要件を満たす必要があります。• データ実行防止をブロックする。• 仮想化ベースのセキュリティ (VBS) とセキュア ブートを有効にする。Windows 365 セキュリティ ベースライン プロファイルにはどのような構成が必要ですか？回答するには、回答エリアで適切なオプションを選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image417.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image418.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 198,
    "question": "Microsoft 365 E5 サブスクリプションをご利用です。すべての Windows デバイスは Microsoft Intune に登録されています。Policy1 というアプリ保護ポリシーを作成し、デバイスに適用する必要があります。Policy1 で保護できるものは何ですか？",
    "choices": [
      {
        "letter": "A",
        "text": "マイクロソフトアウトルック"
      },
      {
        "letter": "B",
        "text": "マイクロソフト OneDrive"
      },
      {
        "letter": "C",
        "text": "マイクロソフトチーム"
      },
      {
        "letter": "D",
        "text": "マイクロソフトエッジ"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 199,
    "question": "Microsoft 365 E5 サブスクリプションをご利用です。すべてのデバイスは Microsoft Intune に登録されています。多要素認証 (MFA) を必要とする条件付きアクセスポリシー「Policy1」を作成します。Policy1 は、非準拠とマークされたデバイスにのみ適用されるようにする必要があります。Policy1 のどの設定を構成する必要がありますか？",
    "choices": [
      {
        "letter": "A",
        "text": "条件付きデバイスプラットフォーム"
      },
      {
        "letter": "B",
        "text": "条件に基づいてデバイスをフィルターする"
      },
      {
        "letter": "C",
        "text": "対象リソース"
      },
      {
        "letter": "D",
        "text": "付与 そして。 セッション"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 200,
    "question": "HOTSPOT - Microsoft Intune を使用して、次の表に示すデバイスを管理する Microsoft 365 テナントがあります。以下の要件を満たすコンプライアンスソリューションを展開する必要があります。• コンプライアンスポリシーに準拠していないデバイスを「非準拠」とマークする • 非準拠デバイスをリモートでロックする 必要なコンプライアンスポリシーの最小数はいくつですか？また、リモートロックアクションをサポートしているデバイスはどれですか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択肢は1つにつき1ポイントです。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image424.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image425.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image426.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 201,
    "question": "HOTSPOT - ネットワークにはオンプレミスの Active Directory Domain Services (AD DS) ドメインが含まれています。Microsoft Intune が含まれ、AD DS ドメインと同期する Microsoft 365 E5 サブスクリプションをご利用です。Microsoft Entra ID で Windows Local Administrator Password Solution (Windows LAPS) が有効になっています。サブスクリプションには、次の表に示すカスタムロールがあります。Microsoft Entra には、次の表に示すユーザーが含まれています。次の表に示すデバイスがあります。以下の各項目について、該当する場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正解は 1 点です。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image427.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image428.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image429.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image430.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image431.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 202,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションを所有し、Microsoft Intune を使用しています。Windows デバイスを 50 台購入しました。Microsoft Entra に参加しているデバイスを Intune に自動登録するように構成しています。デバイスを Microsoft Entra に参加させるには、プロビジョニング パッケージを使用する必要があります。プロビジョニング パッケージの作成には何を使用すればよいですか？また、一括登録にこのパッケージを使用できる最大期間はどれくらいですか？回答するには、回答エリアから適切なオプションを選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image432.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image433.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 203,
    "question": "Microsoft 365 E5 サブスクリプションをご利用です。Device1 というデバイスに対して、自動調査および対応 (AIR) 修復レベルを設定し、すべてのフォルダーに対して承認を必須にする必要があります。何を作成すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "セキュリティグループ"
      },
      {
        "letter": "B",
        "text": "デバイスグループ"
      },
      {
        "letter": "C",
        "text": "行政単位"
      },
      {
        "letter": "D",
        "text": "行動グループ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 204,
    "question": "次の表に示すデバイスを含むMicrosoft 365 E5サブスクリプションを所有しています。すべてのデバイスはMicrosoft Intuneに登録されており、Microsoft 365 Apps for enterpriseがインストールされています。Microsoft 365のクラウドポリシーサービスを使用してMicrosoft 365 Apps for enterpriseを管理できるデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス2のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1、デバイス2、デバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス4のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "E",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image448.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 205,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションを所有しており、Microsoft Intune を使用しています。サブスクリプションには、オンプレミスの Active Directory ドメイン サービス (AD DS) ドメインと同期する Microsoft Entra テナントが含まれています。テナントでは Windows ローカル管理者パスワード ソリューション (Windows LAPS) が有効になっています。次の表に示す Windows デバイスを所有しています。次の表に示すように構成されたエンドポイント セキュリティ ポリシーがあります。以下の各項目について、該当する場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい回答はそれぞれ 1 ポイントです。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image441.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image442.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image443.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image444.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 206,
    "question": "HOTSPOT - Microsoft Intune が含まれる Microsoft 365 サブスクリプションを所有しています。Microsoft Intune 管理センターから、次の表に示すアプリを追加します。次の要件を満たすようにアプリを構成する必要があります。• マーケティング部門のすべてのユーザーが Intune に登録されているすべての Windows 11 デバイスに App1 を自動的にインストールする必要があります。ユーザーが新しいデバイスを受け取った場合、App1 が自動的にインストールされる必要があります。• 人事部門のすべてのユーザーが Intune に登録されていない個人の Android デバイスから App2 をダウンロードできる必要があります。各アプリに対してどの割り当てを構成する必要がありますか。回答するには、回答領域で適切なオプションを選択します。注: 正しい選択はそれぞれ 1 ポイントの価値があります。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image445.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image446.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image447.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 207,
    "question": "Microsoft 365 サブスクリプションを所有しています。Windows 10 を実行し、Microsoft Intune に登録されているコンピューターが 10 台あります。すべてのコンピューターに Microsoft 365 Apps for enterprise スイートを展開する必要があります。どうすればよいでしょうか? A. Microsoft Intune 管理センターからアプリを追加します。B. Microsoft Intune 管理センターから、Windows 10 以降のデバイス プロファイルを作成します。C. Microsoft Entra 管理センターからエンタープライズ アプリケーションを追加します。D. Microsoft Entra 管理センターからアプリ登録を追加します。",
    "choices": [
      {
        "letter": "A",
        "text": "Microsoft Intune 管理センターからアプリを追加します。"
      },
      {
        "letter": "B",
        "text": "Microsoft Intune 管理センターから、Windows 10 以降のデバイス プロファイルを作成します。"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra 管理センターから、エンタープライズ アプリケーションを追加します。"
      },
      {
        "letter": "D",
        "text": "Microsoft Entra 管理センターから、アプリ登録を追加します。"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 208,
    "question": "contoso.com という Microsoft Entra テナントがあります。Windows 11 を実行する Computer1 というワークグループコンピューターがあります。Computer1 を contoso.com に追加する必要があります。どのアプリを使うべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "設定アプリ"
      },
      {
        "letter": "B",
        "text": "コンピュータ管理"
      },
      {
        "letter": "C",
        "text": "ネットドム.exe"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 209,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションをご利用です。すべてのデバイスは Microsoft Intune に登録されています。Group1 というデバイスグループには、5 台の Windows 11 デバイスが含まれています。Windows 11 の新しいビルドが一般公開される前に、Group1 のデバイスが自動的にビルドを受信するようにする必要があります。Intune でどのような構成を行う必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image439.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image440.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 210,
    "question": "Microsoft 365 E5 サブスクリプションをご利用です。Microsoft Intune に登録されている企業所有の Android Enterprise デバイスのオペレーティングシステムのアップデートを管理する必要があります。どの方法を利用すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "コンプライアンスポリシー"
      },
      {
        "letter": "B",
        "text": "Android FOTAの展開"
      },
      {
        "letter": "C",
        "text": "エンドポイントセキュリティポリシー"
      },
      {
        "letter": "D",
        "text": "構成プロファイル"
      }
    ],
    "answer": "D",
    "images": []
  },
  {
    "id": 211,
    "question": "Microsoft 365 E5 サブスクリプションをご利用です。すべての Windows デバイスは Microsoft Intune に登録されています。すべてのデバイスにリモート ヘルプ アプリを展開する必要があります。このソリューションは管理作業を最小限に抑える必要があります。どの種類のアプリを展開すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "Windows アプリ (Win32)"
      },
      {
        "letter": "B",
        "text": "事業部門（LOB）"
      },
      {
        "letter": "C",
        "text": "マイクロソフト365"
      },
      {
        "letter": "D",
        "text": "マイクロソフトストア"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 212,
    "question": "ドラッグ アンド ドロップ - Microsoft Intune に登録されている次のデバイスを含む Microsoft 365 サブスクリプションがあります。 • 企業所有の Windows デバイス (Device1 という名前) • 個人所有の Android デバイス (Device2 という名前) 各デバイスでリモート アクションを使用する必要があります。ソリューションは、次の要件を満たしている必要があります。 • デバイスを工場出荷時の既定の設定に戻して、Device1 を再利用します。 • デバイスのチェックイン時に、Device2 から企業データのみを削除し、Intune からデバイスを削除します。 各デバイスでどのリモート アクションを使用する必要がありますか。 回答するには、適切なリモート アクションを正しいデバイスにドラッグします。各リモート アクションは、1 回、複数回、またはまったく使用しない場合があります。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image460.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image461.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 213,
    "question": "HOTSPOT - Microsoft Intune と Microsoft Defender for Endpoint を含む Microsoft 365 サブスクリプションをご利用です。ユーザーは Windows 11 搭載デバイスを使用しています。Defender for Endpoint から Intune への接続を展開します。デバイスを Intune に登録する際に、Defender for Endpoint に自動的にオンボードされるようにする必要があります。どのような設定を行い、どのポータルを使用すればよいでしょうか？回答するには、回答エリアから適切なオプションを選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image476.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image477.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 214,
    "question": "ドラッグ アンド ドロップ - Microsoft 365 サブスクリプションを所有しています。Microsoft Intune にデバイスを登録する予定です。次の要件を満たす必要があります。• 特定の国際移動体装置識別子 (IMEI) を持つデバイスの登録のみを許可する。• 最大 1,000 台のデバイスの登録と管理をサポートする。各要件に対してどの登録設定を構成する必要がありますか? 回答するには、適切な設定を正しい要件にドラッグします。各設定は、1 回使用することも、複数回使用することも、まったく使用しないこともできます。コンテンツを表示するには、ペイン間の分割バーをドラッグするか、スクロールする必要がある場合があります。注: 正しい選択ごとに 1 ポイントが与えられます。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image482.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image483.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 215,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションをご利用で、Microsoft Intune を使用しています。次の表に示すように、新しい Android デバイスを展開する必要があります。各デバイスにはどの登録プロファイルを使用する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image469.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image470.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image471.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 216,
    "question": "Microsoft 365 サブスクリプションをお持ちで、Microsoft Intune Suite を使用しています。サブスクリプションには、次の表に示すように Intune に登録されているデバイスが含まれています。デバイスクエリをサポートしているデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image472.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 217,
    "question": "Microsoft Intune に登録されているデバイスを含む Microsoft 365 E5 サブスクリプションを所有しています。デバイスクエリを使用して、デバイスの状態に関するオンデマンド情報を提供する予定です。このソリューションはコストを最小限に抑える必要があります。まず何をすべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "診断情報の収集リモート アクションを使用します。"
      },
      {
        "letter": "B",
        "text": "Intune Advanced Analytics アドオンを購入します。"
      },
      {
        "letter": "C",
        "text": "Intune Suite アドオンを購入します。"
      },
      {
        "letter": "D",
        "text": "デバイスをエンドポイント分析にオンボードします。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 218,
    "question": "HOTSPOT - 次の表に示すデバイスを含むMicrosoft 365 E5サブスクリプションをご利用です。このサブスクリプションには、次の表に示す動的デバイスグループが含まれています。以下の各項目について、該当する場合は「はい」を選択してください。該当しない場合は「いいえ」を選択してください。注: 正解は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image478.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image479.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image480.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image481.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 219,
    "question": "HOTSPOT - Microsoft EntraテナントとオンプレミスのActive Directoryドメインサービス（AD DS）ドメインを含むハイブリッド環境があります。この環境には、次の表に示すデバイスが含まれています。各デバイスはどのMicrosoft Entra参加タイプを使用できますか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択ごとに1ポイント獲得できます。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image484.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image485.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image486.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 220,
    "question": "次の表に示すデバイスを含むMicrosoft Entraテナントがあります。エンドポイント権限管理（EPM）を実装できるデバイスはどれですか？ A. デバイス1のみ B. デバイス1とデバイス2のみ C. デバイス1とデバイス3のみ D. デバイス1、デバイス3、デバイス4のみ E. デバイス1、デバイス2、デバイス3、デバイス4 推奨回答を表示 回答を非表示 推奨回答: A 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス3、デバイス4のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image473.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 221,
    "question": "HOTSPOT - 次の表に示すように、Microsoft Intune に登録されている Windows デバイスを含む Microsoft 365 E5 テナントがあります。次の設定を持つ ElevationSettings1 という名前のエンドポイント特権管理 (EPM) 昇格設定ポリシーを作成します。 • エンドポイント特権管理: 有効 • 既定の昇格応答: ユーザーの確認が必要 • 検証: 業務上の正当な理由 • 割り当て: Group1 各デバイスには、管理者のみが実行できる File1.exe という名前のファイルが含まれています。次の設定を持つ ElevationRules1 という名前の EPM 昇格ルール ポリシーを作成します。 • ルール名: Rule1 • 昇格の種類: 自動 • ファイル名: File1.exe • ファイル ハッシュ: • 割り当て: Group2 次の各ステートメントについて、ステートメントが正しい場合は [はい] を選択します。それ以外の場合は [いいえ] を選択します。注: 正しい選択ごとに 1 ポイントが与えられます。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image490.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image491.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image492.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 222,
    "question": "Microsoft 365 サブスクリプションを所有しています。デバイス管理には Microsoft Intune を使用しています。すべての Windows デバイスに App1 と App2 という 2 つのアプリを展開する予定です。App1 は App2 より先にインストールする必要があります。Intune 管理センターから、2 つの Windows アプリ (Win32) を作成して展開します。すべてのデバイスで、App1 が App2 より先にインストールされていることを確認する必要があります。どのような構成が必要ですか？",
    "choices": [
      {
        "letter": "A",
        "text": "App1のデプロイメント構成"
      },
      {
        "letter": "B",
        "text": "動的デバイスグループ"
      },
      {
        "letter": "C",
        "text": "App2の展開構成"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 223,
    "question": "Microsoft 365 E5 サブスクリプションをお持ちです。Microsoft Intune で管理されているすべてのデバイスに関する情報を収集するには、デバイスクエリを使用する必要があります。まず何をすべきでしょうか？ A. Windows ライセンス認証を有効にする。B. デバイスを Microsoft Defender for Endpoint にオンボードする。C. デバイスを Endpoint Analytics にオンボードする。D. すべてのデバイスのコンプライアンスポリシーを作成する。 回答を表示 回答を隠す 回答の候補: C 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "Windows ライセンス検証を有効にします。"
      },
      {
        "letter": "B",
        "text": "デバイスを Microsoft Defender for Endpoint にオンボードします。"
      },
      {
        "letter": "C",
        "text": "デバイスをエンドポイント分析にオンボードします。"
      },
      {
        "letter": "D",
        "text": "すべてのデバイスのコンプライアンス ポリシーを作成します。"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 224,
    "question": "Microsoft 365 E5 サブスクリプションを所有し、Microsoft Intune を使用しています。すべての Windows デバイスに個人ユーザー証明書を展開する Microsoft Cloud PKI ソリューションを実装する予定です。このソリューションをサポートするために必要な構成プロファイルの最小数はいくつですか？",
    "choices": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 225,
    "question": "contoso.com という Microsoft Entra テナントがあり、Contoso Help Desk というグループが含まれています。Windows デバイスが contoso.com に参加するたびに、Contoso Help Desk がローカルの Administrators グループに追加されるようにする必要があります。どうすればよいでしょうか？A. Contoso Help Desk にクラウドデバイス管理者ロールを割り当てます。B. Contoso Help Desk に Microsoft Entra 参加デバイスのローカル管理者ロールを割り当てます。C. Enterprise State Roaming の設定を構成します。D. contoso.com で Microsoft Entra ローカル管理者パスワードソリューション (LAPS) を有効にします。回答を表示 回答を非表示 回答の候補: B 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "クラウド デバイス管理者のロールを Contoso ヘルプ デスクに割り当てます。"
      },
      {
        "letter": "B",
        "text": "Microsoft Entra 参加済みデバイスのローカル管理者の役割を Contoso ヘルプ デスクに割り当てます。"
      },
      {
        "letter": "C",
        "text": "Enterprise State Roaming 設定を構成します。"
      },
      {
        "letter": "D",
        "text": "contoso.com に対して Microsoft Entra Local Administrator Password Solution (LAPS) を有効にします。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 226,
    "question": "ドラッグ＆ドロップ - contoso.com という Microsoft Entra テナントにリンクされた Microsoft 365 E5 サブスクリプションがあります。このサブスクリプションには、User1 というユーザーと、Device1 という新しい Windows 11 デバイスが含まれています。User1 は、Device1 を Microsoft Intune に自動登録する必要があります。他のすべてのユーザーが自動登録を使用できないようにする必要があります。3 つのアクションのうち、どのアクションを順番に実行する必要がありますか？ 回答するには、アクションリストから適切なアクションを回答エリアに移動し、正しい順序で並べ替えてください。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image464.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image465.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 227,
    "question": "HOTSPOT - Device1、Device2、Device3 という 3 台の Windows デバイスが含まれる Microsoft 365 E5 サブスクリプションがあります。各デバイスには、App1 と App2 という 2 つのアプリが含まれています。デバイスは Microsoft Intune を使用して管理します。サブスクリプションには、次の表に示すグループが含まれています。Policy1 という Endpoint Privilege Management (EPM) 昇格設定ポリシーがあり、次の設定があります。 • Endpoint Privilege Management: 有効 • 既定の昇格応答: ユーザーの確認が必要 • 検証: Windows 認証 • 割り当て: Group1、Group2 RulesPolicy1 という Endpoint Privilege Management 昇格ルール ポリシーを作成し、次の設定があります。 • ルール名: Rule1 • 昇格の種類: 自動 • 子プロセスの動作: すべて拒否 • ファイル名: App1.exe • 割り当て: Group1 次の各ステートメントについて、ステートメントが正しい場合は [はい] を選択します。それ以外の場合は [いいえ] を選択します。注: 正しい選択はそれぞれ 1 ポイントの価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image466.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image467.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image468.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 228,
    "question": "Microsoft 365 E5 サブスクリプションがあり、Group1 というグループが含まれています。Group1 のメンバーのみがデバイスを Microsoft Entra テナントに参加できるようにする必要があります。Microsoft Entra 管理センターで設定すべき項目は何ですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス設定"
      },
      {
        "letter": "B",
        "text": "モビリティ"
      },
      {
        "letter": "C",
        "text": "エンタープライズステートローミング"
      },
      {
        "letter": "D",
        "text": "ユーザー設定"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 229,
    "question": "HOTSPOT - 次の表に示すデバイスを含むMicrosoft 365 E5サブスクリプションを所有しています。Group1とGroup2という2つの動的デバイスグループを作成する必要があります。ソリューションは以下の要件を満たす必要があります。• Group1にはDevice1とDevice2のみを含める必要があります。• Group2にはDevice1とDevice3のみを含める必要があります。各グループにどのデバイスメンバーシップルールを構成する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択は1点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image487.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image488.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image489.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 230,
    "question": "contoso.com という Microsoft Entra テナントがあり、そこには Device1 という Windows 11 デバイスと User1 というユーザーがいます。User1 は contoso.com に Device1 を登録します。contoso.com に登録後、Device1 はどの機能を利用できますか？",
    "choices": [
      {
        "letter": "A",
        "text": "シングル サインオン (SSO) を使用してクラウド リソースに認証する"
      },
      {
        "letter": "B",
        "text": "コンプライアンスポリシーの施行"
      },
      {
        "letter": "C",
        "text": "ソフトウェアアップデートの強制"
      },
      {
        "letter": "D",
        "text": "ハードドライブの暗号化の強制"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 231,
    "question": "Microsoft 365 E5 サブスクリプションをお持ちです。名前に「Marketing」という単語が含まれるデバイスをすべて含む動的デバイスグループを作成する必要があります。どのデバイスメンバーシップルールを使用すればよいですか？ A. (device.displayName -in \"Marketing\") B. (device.displayName -in \"*Marketing*\") C. (device.displayName -contains \"Marketing\") D. (device.displayName -contains \"*Marketing*\") 推奨回答を表示 回答を非表示 推奨回答: C 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "(device.displayName -in \"マーケティング\")"
      },
      {
        "letter": "B",
        "text": "(device.displayName -in \"*マーケティング*\")"
      },
      {
        "letter": "C",
        "text": "(device.displayName -「マーケティング」を含む)"
      },
      {
        "letter": "D",
        "text": "(device.displayName -「*Marketing*」を含む)"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 232,
    "question": "注: このセクションには、同じシナリオと問題に関する 1 つ以上の質問セットが含まれています。各質問では、問題に対する独自の解決策が提示されます。解決策が定められた目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決できる場合があります。また、セット内のどの解決策も問題を解決できない可能性もあります。このセクションの質問に回答した後は、戻ることはできません。そのため、これらの質問はレビュー画面に表示されません。contoso.com という名前の Microsoft Entra テナントがあります。Device1 という名前の Android デバイスを購入しました。contoso.com で Device1 を登録する必要があります。解決策: Microsoft Authenticator アプリを使用します。これは目標を満たしていますか?",
    "choices": [
      {
        "letter": "A",
        "text": "はい"
      },
      {
        "letter": "B",
        "text": "いいえ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 233,
    "question": "注: このセクションには、同じシナリオと問題に関する 1 つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示します。解決策が定められた目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決できる場合があります。また、セット内のどの解決策も問題を解決できない可能性もあります。このセクションの質問に回答した後は、戻ることはできません。そのため、これらの質問はレビュー画面に表示されません。Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加し、Microsoft Intune に登録されているデバイスが含まれています。User1 という名前のユーザーを作成します。User1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。解決策: Microsoft Entra 管理センターから、ヘルプデスク管理者の役割を User1 に割り当てます。これは目標を満たしていますか?",
    "choices": [
      {
        "letter": "A",
        "text": "はい"
      },
      {
        "letter": "B",
        "text": "いいえ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 234,
    "question": "注: このセクションには、同じシナリオと問題に関する 1 つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示します。解決策が定められた目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決できる場合があります。また、セット内のどの解決策も問題を解決できない可能性もあります。このセクションの質問に回答した後は、戻ることはできません。そのため、これらの質問はレビュー画面に表示されません。Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加し、Microsoft Intune に登録されているデバイスが含まれています。User1 という名前のユーザーを作成します。User1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。解決策: Microsoft Intune 管理センターから、User1 にヘルプデスクオペレーターの役割を割り当てます。これは目標を満たしていますか?",
    "choices": [
      {
        "letter": "A",
        "text": "はい"
      },
      {
        "letter": "B",
        "text": "いいえ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 235,
    "question": "注: このセクションには、同じシナリオと問題に関する 1 つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示します。解決策が定められた目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決できる場合があります。また、セット内のどの解決策も問題を解決できない可能性もあります。このセクションの質問に回答した後は、戻ることはできません。そのため、これらの質問はレビュー画面に表示されません。Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加し、Microsoft Intune に登録されているデバイスが含まれています。User1 という名前のユーザーを作成します。User1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。解決策: Microsoft Intune 管理センターから、エンドポイント セキュリティ マネージャーの役​​割を User1 に割り当てます。これは目標を満たしていますか?",
    "choices": [
      {
        "letter": "A",
        "text": "はい"
      },
      {
        "letter": "B",
        "text": "いいえ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 236,
    "question": "Device1 というデバイスを含む Microsoft Entra テナントがあります。Device1 は Microsoft Entra に参加しています。Device1 の Microsoft Entra ID プライマリリフレッシュトークン (PRT) を検証する必要があります。どのコマンドを実行すればよいですか？",
    "choices": [
      {
        "letter": "A",
        "text": "klist tgt"
      },
      {
        "letter": "B",
        "text": "dsregcmd /ステータス"
      },
      {
        "letter": "C",
        "text": "クエリセッション"
      },
      {
        "letter": "D",
        "text": "sc.exe クエリ状態=すべて"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 237,
    "question": "ネットワークには、contoso.com という Microsoft Entra テナントと同期するオンプレミスの Active Directory ドメイン サービス (AD DS) ドメインが含まれています。contoso.com に 100 台の Windows 11 デバイスを展開する必要があります。ソリューションは以下の要件を満たす必要があります。• ユーザーがデバイスからオンプレミスのファイル サーバー上の共有に資格情報の入力を求められることなくアクセスできることを保証する。• デバイス ID 管理におけるオンプレミス インフラストラクチャへの依存を最小限に抑える。どの参加タイプを使用すればよいですか?",
    "choices": [
      {
        "letter": "A",
        "text": "Active Directoryドメインに参加"
      },
      {
        "letter": "B",
        "text": "Microsoft Entraハイブリッドが参加"
      },
      {
        "letter": "C",
        "text": "Microsoft Entraが参加"
      },
      {
        "letter": "D",
        "text": "Microsoft Entra登録済み"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 238,
    "question": "次の表に示すように、Microsoft Intune に登録されているデバイスを含む Microsoft 365 サブスクリプションを所有しています。カスタム通知を送信するには、一括デバイスアクションを使用する必要があります。カスタム通知を送信できるデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス2とデバイス3のみ そして。 デバイス1、デバイス2、デバイス3"
      }
    ],
    "answer": "D",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image505.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 239,
    "question": "HOTSPOT - Microsoft Intune Suite を使用する Microsoft 365 E5 サブスクリプションをご利用です。以下の要件を満たすソリューションを推奨する必要があります。• 管理者は、ユーザーのデバイスでリモートタスクを実行するために、共有画面セッションを介した安全な接続を使用する必要があります。• 管理者は、ユーザーのデバイスでリモートタスクを実行するために、昇格されたアクセス権を持っている必要があります。• ソリューションは、最小権限の原則に従う必要があります。各要件について、推奨事項には何を含める必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image508.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image509.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 240,
    "question": "HOTSPOT - contoso.com という Microsoft Entra テナントがあり、そこには次の表に示すユーザーが含まれています。contoso.com に対して、次の Microsoft Entra 参加および登録設定を構成します。• ユーザーはデバイスを Microsoft Entra に参加させることができます：選択済み o 選択済み：Group1 次の表に示すデバイスを購入しました。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注：正しい選択はそれぞれ1点です。回答例を表示 回答を非表示 回答例：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image516.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image517.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image518.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image519.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 241,
    "question": "HOTSPOT - 次の表に示すように、Microsoft Intune に登録されているデバイスを含む Microsoft 365 サブスクリプションを所有しています。デバイスに対して、以下のリモート操作を使用する予定です。• 診断情報の収集 • デバイスの位置特定 • リモートロック 各デバイスはどのようなリモート操作をサポートしていますか？ 回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択肢は 1 点です。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image510.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image511.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image512.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 242,
    "question": "Microsoft 365 E5 サブスクリプションを所有しています。以下の種類のデバイスを購入します。 • Windows • Android • iOS Microsoft Intune にデバイスを登録する予定です。登録制限を構成する必要があります。デバイスメーカーによる制限を構成できるデバイスの種類はどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "Androidのみ"
      },
      {
        "letter": "B",
        "text": "Windowsのみ"
      },
      {
        "letter": "C",
        "text": "AndroidとiOSのみ"
      },
      {
        "letter": "D",
        "text": "WindowsとiOSのみ そして。 Windows、Android、iOS"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 243,
    "question": "ドラッグ＆ドロップ - Microsoft 365 E5 サブスクリプションを所有し、Microsoft Intune を使用しています。Microsoft Cloud PKI を使用して、すべての Windows デバイスに個人ユーザー証明書を展開する必要があります。どの 4 つのアクションを順番に実行する必要がありますか？ 回答するには、アクションリストから適切なアクションを回答エリアに移動し、正しい順序に並べ替えてください。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image506.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image507.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 244,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションがあり、Device1 という Windows デバイスが含まれています。Device1 は、ローカル スクリプトを使用して Microsoft Defender for Endpoint にオンボードされました。Device1 の管理には Microsoft Intune を使用しています。コンプライアンス ポリシーでマシン リスク スコアを使用する予定です。マシン リスク スコアは、Defender for Endpoint のデータに基づいて評価される必要があります。どうすればよいでしょうか。回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image520.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image521.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 245,
    "question": "Microsoft 365 サブスクリプションを所有し、Microsoft Intune Suite を使用しています。Microsoft Cloud PKI を使用して、メールメッセージの署名と暗号化をサポートする予定です。まず何をすべきでしょうか？A. ルート証明機関 (CA) を作成します。B. デバイスコンプライアンスポリシーを作成します。C. デバイス構成 SCEP 証明書プロファイルを作成します。D. デバイス構成の信頼済み証明書プロファイルを作成します。E. 発行証明機関 (CA) を作成します。",
    "choices": [
      {
        "letter": "A",
        "text": "ルート証明機関 (CA) を作成します。"
      },
      {
        "letter": "B",
        "text": "デバイス コンプライアンス ポリシーを作成します。"
      },
      {
        "letter": "C",
        "text": "デバイス構成 SCEP 証明書プロファイルを作成します。"
      },
      {
        "letter": "D",
        "text": "デバイス構成の信頼された証明書プロファイルを作成します。 そして。 発行証明機関 (CA) を作成します。"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 246,
    "question": "HOTSPOT - Microsoft 365 サブスクリプションをご利用で、Microsoft Intune を使用しています。以下の図に示すエンドポイント権限管理 (EPM) の昇格設定ポリシーが設定されています。EPM の昇格ルール ポリシーは設定されていません。図に示されている情報に基づき、ドロップダウン メニューを使用して各文を完成させる選択肢を選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image522.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image523.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image524.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 247,
    "question": "Microsoft 365 E5 サブスクリプションがあり、以下の種類のデバイスが含まれています: • Windows 11 • Android • iOS すべてのデバイスが Microsoft Intune に登録されています。エンタープライズ アプリ カタログからアプリを展開するには、Intune を使用する必要があります。どの種類のデバイスにアプリを展開できますか?",
    "choices": [
      {
        "letter": "A",
        "text": "Windows 11のみ"
      },
      {
        "letter": "B",
        "text": "Windows 11とAndroidのみ"
      },
      {
        "letter": "C",
        "text": "Windows 11のみ"
      },
      {
        "letter": "D",
        "text": "AndroidとiOSのみ そして。 Windows 11、Android、iOS"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 248,
    "question": "HOTSPOT - Microsoft Intuneに登録されている5,000台のWindowsデバイスを含むMicrosoft 365サブスクリプションを所有しています。同期と診断情報の収集という一括デバイスアクションを使用する予定です。各アクションに含めることができるデバイスの最大数はいくつですか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択肢は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image525.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image526.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 249,
    "question": "HOTSPOT - Microsoft Intune を使用してデバイスを管理しています。Intune の自動登録は無効になっています。デバイス登録時にモバイルデバイス管理 (MDM) サーバーのアドレスを入力する必要があるという報告がユーザーから寄せられています。デバイス登録時のユーザー操作を減らすため、次の CNAME DNS ホスト名レコードを作成する予定です。 • EnterpriseEnrollment.contoso.com • EnterpriseRegistration.contoso.com 登録要求を Intune サーバーにリダイレクトするには、各 CNAME レコードに完全修飾ドメイン名 (FQDN) を構成する必要があります。各 FQDN をどのように構成すればよいですか。回答するには、回答領域で適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image527.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image528.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 250,
    "question": "Microsoft 365 E5 サブスクリプションをご利用で、Microsoft Intune を使用しています。企業所有のすべての Windows デバイスで、デバイス一括同期アクションを使用する必要があります。このアクションの対象にできるデバイスの最大数はいくつですか？",
    "choices": [
      {
        "letter": "A",
        "text": "25"
      },
      {
        "letter": "B",
        "text": "50"
      },
      {
        "letter": "C",
        "text": "100"
      },
      {
        "letter": "D",
        "text": "500 そして。 1000"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 251,
    "question": "Microsoft 365 E5 サブスクリプションを所有しており、Microsoft Intune Suite を使用しています。Intune を使用して修復スクリプト パッケージを実行する予定です。Microsoft Intune 管理センターで最初に行うべきことは何ですか？",
    "choices": [
      {
        "letter": "A",
        "text": "プロセッサ構成で Windows 診断データを有効にします。"
      },
      {
        "letter": "B",
        "text": "Windows ライセンス検証を有効にします。"
      },
      {
        "letter": "C",
        "text": "派生資格情報の設定を構成します。"
      },
      {
        "letter": "D",
        "text": "Windows エンタープライズ証明書をアップロードします。"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 252,
    "question": "Microsoft 365 E5 サブスクリプションをご利用です。Android Enterprise デバイス用の Microsoft Intune 登録プロファイルがあり、以下の設定になっています。• 名前: Profile1 • トークンの種類: 企業所有、フルマネージド Profile1 を使用して、Intune に新しい Android デバイスを登録する必要があります。デバイスの登録には何を使用すればよいですか?",
    "choices": [
      {
        "letter": "A",
        "text": "QRコード"
      },
      {
        "letter": "B",
        "text": "企業ポータルアプリ"
      },
      {
        "letter": "C",
        "text": "Microsoft Authenticatorアプリ"
      },
      {
        "letter": "D",
        "text": "Intuneアプリ"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 253,
    "question": "Office 365 向け Microsoft Defender を使用しています。攻撃シミュレーションキャンペーンを自動化する予定です。シミュレーションに失敗したユーザーは、シミュレーション結果に基づいて追加のトレーニングを受ける必要があります。シミュレーション後、ユーザーがトレーニングを利用できる最大日数は？",
    "choices": [
      {
        "letter": "A",
        "text": "7"
      },
      {
        "letter": "B",
        "text": "15"
      },
      {
        "letter": "C",
        "text": "30"
      },
      {
        "letter": "D",
        "text": "45"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 254,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションをご利用です。このサブスクリプションには、Microsoft Defender for Endpoint にデバイスをオンボードしたユーザーが含まれています。Defender for Endpoint は、Microsoft Defender for Cloud Apps に信号を転送するように構成されています。Cloud Discovery によって、App1 という危険な Web アプリが特定されました。Microsoft Edge から App1 へのユーザー接続をブロックする必要があります。ユーザーは制限を回避できる必要があります。Defender for Endpoint と Defender for Cloud Apps を統合するには、どのような種類のアプリタグを使用し、どのような構成にすればよいでしょうか。回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択肢はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image537.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image538.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 255,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションがあり、Microsoft Intune に登録されているデバイスが以下の表のとおり含まれています。サブスクリプションには、以下の表のユーザーが含まれています。Remote Help Tier1 ロールは、以下の図に示すように構成されています。以下の各項目について、該当する場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正解はそれぞれ 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image543.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image544.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image545.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image546.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image547.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 256,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションをお持ちです。Microsoft Graph PowerShell を使用して、[email protected] という新しいユーザーに Microsoft 365 E5 ライセンスを割り当てる必要があります。コマンドをどのように実行すればよいですか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択肢は 1 つにつき 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image539.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image540.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 257,
    "question": "Windows 11デバイスを含むMicrosoft 365 E5サブスクリプションをご利用です。すべてのデバイスはMicrosoft Defender for Endpointにオンボードされています。デバイスの構成を業界標準のベンチマークと比較する必要があります。どのベンチマークを使用すればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "攻撃対象領域マップ"
      },
      {
        "letter": "B",
        "text": "イベント"
      },
      {
        "letter": "C",
        "text": "セキュリティベースライン評価"
      },
      {
        "letter": "D",
        "text": "取り組み"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 258,
    "question": "HOTSPOT - contoso.com という Microsoft Entra テナントがあり、そこには次の表に示すユーザーが含まれています。このテナントには、Windows 11 を実行する Computer1 というスタンドアロンのワークグループコンピューターが含まれています。Computer1 には、次の表に示すローカルユーザーが含まれています。Computer1 を contoso.com に参加させる必要があります。どのローカルユーザーが Computer1 を contoso.com に参加させられますか？また、どのユーザーの Microsoft Entra 資格情報を使用できますか？回答するには、回答エリアから適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image529.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image530.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image531.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image532.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 259,
    "question": "Microsoft 365 E5 サブスクリプションを所有しており、Microsoft Defender for Cloud Apps を使用しています。Cloud Discovery で検出されたすべてのアプリのセキュリティ監査を実施する予定です。監査対象となったアプリを追跡する必要があります。監査対象アプリの一覧をクラウド アプリ カタログに表示できるソリューションが必要です。どうすればよいでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "各アプリにカスタム アプリ タグを適用します。"
      },
      {
        "letter": "B",
        "text": "条件付きアクセス アプリ制御を展開します。"
      },
      {
        "letter": "C",
        "text": "各アプリを重要な資産として定義します。"
      },
      {
        "letter": "D",
        "text": "Cloud Discovery スナップショット レポートを生成します。 そして。 アプリガバナンスを有効にします。"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 260,
    "question": "HOTSPOT - contoso.com という Microsoft Entra テナントがあり、そこには次の表に示す動的メンバーシップグループが含まれています。次の表に示すように、contoso.com にデバイスを追加します。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択はそれぞれ1点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image533.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image534.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image535.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image536.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 261,
    "question": "HOTSPOT - Microsoft 365 サブスクリプションを所有しており、Microsoft Intune Suite を使用しています。次の表に示すデバイスを所有しています。モバイル アプリケーション管理 (MAM) 用に Microsoft Tunnel を実装する予定です。デバイスでサポートされているトンネルの種類は何ですか？回答するには、回答エリアで適切なオプションを選択してください。注: 正解は 1 点です。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image570.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image571.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image572.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 262,
    "question": "HOTSPOT - contoso.com という Microsoft Entra テナントがあり、そこには次の表に示すユーザーが含まれています。次の表に示すデバイスを購入しました。管理者は以下の操作を実行します。• Admin1 の資格情報を使用して、Device1 を contoso.com に参加させます。• Admin2 の資格情報を使用して、Device2 を contoso.com に登録します。以下の各文について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注: 正しい選択はそれぞれ 1 ポイントです。回答例を表示 回答を非表示 回答例:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image573.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image574.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image575.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image576.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 263,
    "question": "シミュレーション - ユーザー名とパスワード - 必要に応じて次のログイン資格情報を使用します。ユーザー名を入力するには、[サインイン] ボックスにカーソルを置き、以下のユーザー名を選択します。パスワードを入力するには、[パスワードの入力] ボックスにカーソルを置き、以下のパスワードを選択します。Microsoft 365 ユーザー名: [email protected] Microsoft 365 パスワード: i7A4$3o^HGD3L~=c[9xuOhM%^4:s11Ai Microsoft Edge ブラウザーまたは Microsoft 365 ポータルが正常に読み込まれない場合は、タスク バーから Microsoft Edge ブラウザー アイコンを選択し、URL「https://portal.office.com」を入力して Enter キーを押します。次の情報は、テクニカル サポートのみを目的としています:ラボ インスタンス: 48262079 - Microsoft Intune に登録されているすべての Windows 10 以降のデバイスで BitLocker ドライブ暗号化 (BitLocker) が有効になっているかどうかを検証するためのコンプライアンス ポリシーを作成する必要があります。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image577.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 264,
    "question": "注: このセクションには、同じシナリオと問題に関する 1 つ以上の質問セットが含まれています。各質問は、問題に対する独自の解決策を提示します。解決策が定められた目標を満たしているかどうかを判断する必要があります。セット内の複数の解決策が問題を解決できる場合があります。また、セット内のどの解決策も問題を解決できない可能性もあります。このセクションの質問に回答した後は、戻ることはできません。そのため、これらの質問はレビュー画面に表示されません。Microsoft 365 E5 サブスクリプションがあります。サブスクリプションには、Microsoft Entra に参加し、Microsoft Intune に登録されているデバイスが含まれています。User1 という名前のユーザーを作成します。User1 が Intune を使用して BitLocker 回復キーをローテーションできるようにする必要があります。解決策: Microsoft Entra 管理センターから、クラウド デバイス管理者の役割を User1 に割り当てます。これは目標を満たしていますか?",
    "choices": [
      {
        "letter": "A",
        "text": "はい"
      },
      {
        "letter": "B",
        "text": "いいえ"
      }
    ],
    "answer": "B",
    "images": []
  },
  {
    "id": 265,
    "question": "HOTSPOT - Microsoft 365 E5 サブスクリプションがあり、Device1、Device2、Device3 という 3 台の Windows デバイスが含まれています。これらのデバイスは Microsoft Intune を使用して管理されています。各デバイスには Script1.ps1 というファイルが含まれています。ユーザーにはこれらのデバイスに対するローカル管理者権限がありません。サブスクリプションには、次の表に示すグループが含まれています。次の設定を持つ 2 つの Endpoint Privilege Management (EPM) 昇格設定ポリシーを作成します。 • 名前: Policy1 • Endpoint Privilege Management: 有効 o 既定の昇格応答: すべての要求を拒否 o 昇格の検出を許可する: いいえ o レポート用に昇格データを送信する: いいえ • 割り当て: o 含まれるグループ: Group1 • 名前: Policy2 • Endpoint Privilege Management: サポートの承認が必要 o 昇格の検出を許可する: いいえ o レポート用に昇格データを送信する: いいえ • 割り当て: o 含まれるグループ: Group3 次の設定を持つ RulesPolicy1 という名前の EPM 昇格ルール ポリシーを作成します。 • ルール名: Rule1 o 昇格の種類: 自動 o 子プロセスの動作: すべて拒否 o ファイル名: Script1.ps1 o ファイル ハッシュ: • 割り当て: Group 1、Group2 次の各ステートメントについて、ステートメントが正しい場合は [はい] を選択します。それ以外の場合は [いいえ] を選択します。 注: 正しい選択ごとに 1 ポイントの価値があります。 推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image588.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image589.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image590.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 266,
    "question": "シミュレーション - ユーザー名とパスワード - 必要に応じて次のログイン資格情報を使用します。 ユーザー名を入力するには、[サインイン] ボックスにカーソルを置き、以下のユーザー名を選択します。 パスワードを入力するには、[パスワードの入力] ボックスにカーソルを置き、以下のパスワードを選択します。 Microsoft 365 ユーザー名: [email protected] Microsoft 365 パスワード: i7A4$3o^HGD3L~=c[9xuOhM%^4:s11Ai Microsoft Edge ブラウザーまたは Microsoft 365 ポータルが正常に読み込まれない場合は、タスク バーから Microsoft Edge ブラウザー アイコンを選択し、URL「https://portal.office.com」を入力して、Enter キーを押します。 次の情報は、テクニカル サポートのみを目的としています: ラボ インスタンス: 48262079 - sg-Engineering というグループのメンバーが Windows デバイスを Microsoft Entra に参加させるときに、デバイスが Microsoft Intune に自動的に登録されるようにする必要があります。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image579.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 267,
    "question": "HOTSPOT - 次の表に示すデバイスを含むMicrosoft 365 E5サブスクリプションがあります。すべてのデバイスはMicrosoft Intuneに登録されています。デバイスには、次の表に示すようにアプリがインストールされています。Intuneで、次の設定を持つPolicy1という名前のアプリ構成ポリシーを作成します。• デバイス登録の種類: 管理対象アプリ • 対象ポリシー: すべてのMicrosoftアプリ • 割り当て o 含めるグループ: Group1 o 除外するグループ: Group2 次の各ステートメントについて、該当する場合は「はい」を選択します。それ以外の場合は「いいえ」を選択します。注: 正しい選択は1点の価値があります。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image608.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image609.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image610.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image611.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 268,
    "question": "HOTSPOT - Microsoft Intuneに登録されている500台のWindowsデバイスを含むMicrosoft 365 E5サブスクリプションを所有しています。Microsoft Defender for Endpointを展開しています。これらのデバイスをDefender for Endpointにオンボードする必要があります。このソリューションは管理作業を最小限に抑える必要があります。どうすればよいでしょうか？回答するには、回答エリアから適切な選択肢を選択してください。注：正解は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image604.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image605.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 269,
    "question": "HOTSPOT - 次の表に示すユーザーを含むMicrosoft 365サブスクリプションがあります。次の表に示すデバイスがあります。Windows登録設定の構成は次のとおりです。• MDMユーザースコープ：グループ1 • Windows情報保護（WIP）ユーザースコープ：グループ2 Microsoft Intuneの登録制限は、図表に示すように構成します。（図表タブをクリックしてください。）以下の各項目について、正しい場合は「はい」を選択してください。そうでない場合は「いいえ」を選択してください。注：正しい選択は1点です。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image592.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image593.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image594.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image595.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image596.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 270,
    "question": "HOTSPOT - Microsoft Intune を含む Microsoft 365 サブスクリプションをご利用です。ユーザーは Microsoft Outlook を使用する iOS デバイスを使用しています。Outlook を構成する必要があります。ソリューションは以下の要件を満たす必要があります。• Outlook の他のアプリからのコピー＆ペースト操作を制限する。• Outlook で S/MIME を有効にする。各要件に対して、どの種類のポリシーを構成する必要がありますか？回答するには、回答エリアで適切なオプションを選択してください。注: 正しい選択はそれぞれ 1 ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image606.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image607.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 271,
    "question": "Microsoft 365 サブスクリプションがあり、Microsoft Intune スイートを使用しています。次の表に示すデバイスを所有しています。すべてのデバイスが Intune に登録されています。デバイスクエリを使用してクエリを実行できるデバイスはどれですか？",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1、デバイス2、デバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス4のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "B",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image591.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 272,
    "question": "Microsoft 365 E5 サブスクリプションをお持ちです。次の表に示すデバイスを購入しました。自動登録を使用して Microsoft Intune に登録できるデバイスはどれですか？ A. デバイス1 のみ B. デバイス1 とデバイス2 のみ C. デバイス1 とデバイス3 のみ D. デバイス1、デバイス2、デバイス3 のみ E. デバイス1、デバイス2、デバイス3、デバイス4 推奨回答を表示 回答を非表示 推奨回答: A 🗳️",
    "choices": [
      {
        "letter": "A",
        "text": "デバイス1のみ"
      },
      {
        "letter": "B",
        "text": "デバイス1とデバイス2のみ"
      },
      {
        "letter": "C",
        "text": "デバイス1とデバイス3のみ"
      },
      {
        "letter": "D",
        "text": "デバイス1、デバイス2、デバイス3のみ そして。 デバイス1、デバイス2、デバイス3、デバイス4"
      }
    ],
    "answer": "A",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image600.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 273,
    "question": "Microsoft 365 サブスクリプションがあり、Microsoft Intune を使用しています。個人用 Android デバイスにモバイル アプリケーション管理 (MAM) 用の Microsoft Tunnel を実装する必要があります。次の操作を実行します。• 管理対象デバイス用に Microsoft Tunnel を構成する。• ユーザー デバイスが Tunnel for MAM の前提条件を満たしていることを確認する。• Microsoft Defender と Microsoft Edge のアプリ構成ポリシーを作成する。次に何を構成する必要がありますか?",
    "choices": [
      {
        "letter": "A",
        "text": "アプリ保護ポリシー"
      },
      {
        "letter": "B",
        "text": "Android Enterpriseデバイス用のカスタムプロファイル"
      },
      {
        "letter": "C",
        "text": "条件付きアクセスポリシー"
      },
      {
        "letter": "D",
        "text": "Android Enterpriseデバイス用のVPNプロファイル"
      }
    ],
    "answer": "A",
    "images": []
  },
  {
    "id": 274,
    "question": "HOTSPOT - Microsoft EntraテナントとオンプレミスのActive Directoryドメインサービス（AD DS）ドメインを含むハイブリッド環境があります。次の表に示すデバイスを購入しました。各デバイスはどのMicrosoft Entra参加タイプを使用できますか？回答するには、回答エリアで適切なオプションを選択してください。注：正しい選択ごとに1ポイントが加算されます。推奨回答を表示 回答を非表示 推奨回答：",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image601.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image602.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image603.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 275,
    "question": "HOTSPOT - 500台のWindowsデバイスと、以下の表に示すリソースを含むMicrosoft 365 E5サブスクリプションを所有しています。両方のデバイスにMicrosoft 365アプリがインストールされています。インターネット上のOfficeファイルでマクロが実行されないようにブロックする「Officeアプリのポリシー」ポリシーを作成して適用する必要があります。どのポータルを使用すべきですか？また、このポリシーの適用範囲はどこまでですか？回答するには、回答エリアから適切なオプションを選択してください。注：正解は1つにつき1ポイントです。推奨回答を表示 回答を非表示 推奨回答:",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image597.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image598.png",
        "analysis": ""
      },
      {
        "url": "https://img.examtopics.com/md-102/image599.png",
        "analysis": ""
      }
    ]
  },
  {
    "id": 276,
    "question": "500台のAndroidデバイスを含むMicrosoft 365サブスクリプションを所有しています。これらのデバイスはMicrosoft Intuneを使用して管理されています。Android FOTAを使用して、これらのデバイスのソフトウェア更新プログラムを管理できることを確認する必要があります。まず何をすべきでしょうか？",
    "choices": [
      {
        "letter": "A",
        "text": "コンプライアンス ポリシーを作成します。"
      },
      {
        "letter": "B",
        "text": "コンプライアンス パートナーを追加します。"
      },
      {
        "letter": "C",
        "text": "コネクタを構成します。"
      },
      {
        "letter": "D",
        "text": "派生資格情報を追加します。"
      }
    ],
    "answer": "",
    "images": []
  },
  {
    "id": 277,
    "question": "シミュレーション - ユーザー名とパスワード - 必要に応じて次のログイン資格情報を使用します。 ユーザー名を入力するには、[サインイン] ボックスにカーソルを置き、以下のユーザー名を選択します。 パスワードを入力するには、[パスワードの入力] ボックスにカーソルを置き、以下のパスワードを選択します。 Microsoft 365 ユーザー名: [email protected] Microsoft 365 パスワード: i7A4$3o^HGD3L~=c[9xuOhM%^4:s11Ai Microsoft Edge ブラウザーまたは Microsoft 365 ポータルが正常に読み込まれない場合は、タスク バーから Microsoft Edge ブラウザー アイコンを選択し、URL「https://portal.office.com」を入力して、Enter キーを押します。 次の情報は、テクニカル サポートのみを目的としています: ラボ インスタンス: 48262079 - sg-IT という名前のグループの Windows 10 以降のデバイスでシングル アプリの全画面キオスク モードを有効にする構成プロファイルを作成する必要があります。 ソリューションでは、KioskUser という名前のローカル ユーザーが自動的にサインインし、Microsoft Edge で https://bing.com ホームページが表示される必要があります。",
    "choices": [],
    "answer": "",
    "images": [
      {
        "url": "https://img.examtopics.com/md-102/image585.png",
        "analysis": ""
      }
    ]
  }
];