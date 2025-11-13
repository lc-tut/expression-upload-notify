/**
 * 申請情報の型定義
 */
export interface Application {
  applicantName: string; // 申請者名（C列）
  applicationType: string; // 申請種類（D列）
  rowNumber: number; // 行番号
}

/**
 * 指定された行から申請情報を取得
 */
export function getApplicationFromRow(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  rowNumber: number
): Application | null {
  // C列とD列のデータを取得
  const applicantName = sheet.getRange(rowNumber, 3).getValue() as string; // C列
  const applicationType = sheet.getRange(rowNumber, 4).getValue() as string; // D列

  // 両方の値が存在する場合のみ有効な申請として扱う
  if (!applicantName || !applicationType) {
    return null;
  }

  return {
    applicantName: applicantName.toString().trim(),
    applicationType: applicationType.toString().trim(),
    rowNumber,
  };
}
